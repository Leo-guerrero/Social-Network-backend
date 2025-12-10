import express, {Request, Response, RequestHandler} from 'express';
import cors from 'cors';
import { PrismaClient } from '../generated/prisma';
import { version } from 'os';
import { S3Client, GetObjectCommand, PutObjectAclCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuidv4 } from "uuid";
import multer from 'multer';
import { profile } from 'console';
import { buildSearchIndex, getSearchIndex } from "./searchIndex";
const upload = multer();


const app = express();
const port = process.env.PORT || 3000;

const accessKeyId = process.env.AWS_ACCESS_KEY_ID || "";
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY || "";

const s3 = new S3Client({ region: process.env.AWS_REGION, credentials: { accessKeyId, secretAccessKey } });

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json()); // <-- Needed for POST requests

// Default route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// GET all users
app.get('/Users', async (req, res) => {
  const users = await prisma.users.findMany();


  res.json(users);
});

app.put('/profilesUpdate/:id', async (req, res) => {
  const userid = parseInt(req.params.id);
  const { bio } = req.body;

  try {

    const updateProfile = await prisma.profiles.update({
      where: { userid: userid },
      data: { bio },
    });

    res.json(updateProfile);

  } catch (error) {

  }

});

app.get('/profiles/:id', async (req, res) => {
  const userid = parseInt(req.params.id);


  const profile = await prisma.profiles.findUnique({
    where: {
      userid: userid,
    }
  });

  res.json(profile);

});

// Example: POST a user (optional now)
app.post('/Users', async (req, res) => {

  const { name, email, password } = req.body;

  const user = await prisma.users.create({

    data: { name, email, password },


  });

  const profile = await prisma.profiles.create({
    data: { userid: user.id, bio: "" },
  });



  if (user) {

    const { password, ...noPasswordUser } = user;
    res.json(noPasswordUser);
  }

});


app.post('/LoginCheck', async (request, response) => {
  const { email, password } = request.body;

  const user = await prisma.users.findUnique({
    where: {
      email: email,
    }
  });

  if (user && user.password === password) {
    const { password, ...safeuser } = user;
    response.json(safeuser);
  }

});

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
async function main() {
  await buildSearchIndex(prisma); // load posts.text into elasticlunr

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

main().catch((err) => {
  console.error("Fatal error starting server:", err);
  process.exit(1);
});

// app.post('/CreatePost/:id', upload.single('file'), async (req, res) => {
//   const userid = parseInt(req.params.id);

//   const file = req.file;
//   const { text } = req.body;

//   let uniqueFilename = "";
//   if (file) {

//     let contentType = file?.mimetype;
//     const ext = file.originalname.split(".").pop()?.toLowerCase();

//     if (ext == "mp4") {
//       contentType = "video/mp4";
//     }

//     uniqueFilename = `${uuidv4()}-${file?.originalname}`

//     const command = new PutObjectCommand({
//       Bucket: process.env.S3_BUCKET_NAME,
//       Key: uniqueFilename,
//       Body: file?.buffer,
//       ContentType: contentType,
//     });


//     await s3.send(command);

//     console.log("✅ Uploaded file:", uniqueFilename);
//   }
//   res.json({ filename: uniqueFilename });

//   const post = await prisma.posts.create({
//     data: { userid: userid, text: text, imageURL: uniqueFilename },
//   })
// });
import { addPostToIndex } from "./searchIndex"; 
// make sure this import is at the top of the file

app.post('/CreatePost/:id', upload.single('file'), async (req, res) => {
  try {
    const userid = parseInt(req.params.id);
    const file = req.file;
    const { text } = req.body;

    let uniqueFilename = "";

    // 🔹 Upload file to S3 (if provided)
    if (file) {
      let contentType = file.mimetype;
      const ext = file.originalname.split(".").pop()?.toLowerCase();

      if (ext === "mp4") {
        contentType = "video/mp4";
      }

      uniqueFilename = `${uuidv4()}-${file.originalname}`;

      const command = new PutObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: uniqueFilename,
        Body: file.buffer,
        ContentType: contentType,
      });

      await s3.send(command);

      console.log("✅ Uploaded file:", uniqueFilename);
    }

    // 🔹 Create the post in the database
    const post = await prisma.posts.create({
      data: {
        userid,
        text,
        imageURL: uniqueFilename,
      },
      include: {
        poster: true,
        _count: {
          select: { likes: true, replies: true },
        },
      },
    });

    // 🔹 Add the new post to the search index
    addPostToIndex({ id: post.id, text: post.text });

    // 🔹 Return the FULL post to the frontend
    res.json(post);

  } catch (err) {
    console.error("❌ Error creating post:", err);
    res.status(500).json({ error: "Failed to create post" });
  }
});


app.get('/GetAllPosts', async (req, res) => {
  const posts = await prisma.posts.findMany({
    where: { parentId: null },   // 🔑 exclude replies
    include: {
      poster: { select: { id: true, name: true, profileURL: true } },
      _count: { select: { likes: true } },
      likes: { select: { userid: true } },
    },
    orderBy: { createdAt: 'desc' }
  });

  const transformedPosts = await Promise.all(
    posts.map(async (post) => ({
      ...post,
      imageURL: await getImageURL(post.imageURL),

      poster: {
        ...post.poster,
        profileURL: await getImageURL(post.poster.profileURL) // ✅ now it's the actual string
      }
    }))
  );



  res.json(transformedPosts);
});



app.get('/UserSpecific/:id', async (req, res) => {
  const userid = parseInt(req.params.id);

  try {
    const posts = await prisma.posts.findMany({
      where: {
        userid: userid,
      },
      include: {
        likes: {
          select: {
            userid: true,
          },
        },
        poster: {
          select: {
            name: true,
            profileURL: true,
          },
        },
        _count: {
          select: {
            likes: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const transformedPosts = await Promise.all(
      posts.map(async (post) => ({
        ...post,
        imageURL: await getImageURL(post.imageURL),

        poster: {
          ...post.poster,
          profileURL: await getImageURL(post.poster.profileURL) // ✅ now it's the actual string
        }
      }))
    );



    res.json(transformedPosts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.post('/LikeUnLike', async (req, res) => {
  const { postid, userid } = req.body;

  const post = await prisma.posts.findUnique({ where: { id: postid } });
  const postOwnerId = post?.userid;


  const existingLike = await prisma.likes.findUnique({
    where: {
      userid_postid: {
        userid,
        postid: postid,
      },
    },
  });

  if (existingLike) {
    const like_delete = await prisma.likes.delete({
      where: {
        userid_postid: {
          userid,
          postid: postid,
        },
      }
    });

    const setFalsePost = await prisma.posts.update({
      where: {
        id: postid,
      },
      data: { likedByUser: false }
    });
  }

  if (!existingLike) {
    const like_create = await prisma.likes.create({
      data: { userid: userid, postid: postid }
    })

    const setTruePost = await prisma.posts.update({
      where: {
        id: postid,
      },
      data: { likedByUser: true }
    });

    if (!post || !post.userid) {
      console.error("Post not found, cannot create notification.");
      return;
    }

    // Send notification for like
    await prisma.notifications.create({
      data: {
        userId: Number(postOwnerId),
        senderId: userid,
        type: "like",
        message: "liked your post",
        targetPostId: postid
      }
    });

  }

});

app.get('/User/:id', async (req, res) => {
  const Userid = parseInt(req.params.id);

  const User = await prisma.users.findUnique({
    where: {
      id: Userid,
    }
  });

  res.json(User);
});


app.get('/Get/Specific/Post/:id', async (req, res) => {
  const postid = parseInt(req.params.id);

  const post = await prisma.posts.findUnique({
    where: { id: postid },
    include: {
      poster: { select: { id: true, name: true } },
      _count: { select: { likes: true } },
      likes: { select: { userid: true } },
      replies: {
        include: {
          poster: { select: { id: true, name: true } },
          _count: { select: { likes: true } },
          likes: { select: { userid: true } },
        },
        orderBy: { createdAt: 'asc' },
      },
    },
  });

  if (post) {
    const imagePost = {
      ...post,
      imageURL: await getImageURL(post.imageURL),
    }
    res.json(imagePost);
  }


  //res.json(post);
});


//replies:

//create a reply
app.post('/replies', upload.single("file"), async (req, res) => {
  const { userid, parentId, text } = req.body;
  const file = req.file;

  try {

    let uniqueFilename = "";
    if (file) {

      let contentType = file?.mimetype;
      const ext = file.originalname.split(".").pop()?.toLowerCase();

      if (ext == "mp4") {
        contentType = "video/mp4";
      }

      uniqueFilename = `${uuidv4()}-${file?.originalname}`

      const command = new PutObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: uniqueFilename,
        Body: file?.buffer,
        ContentType: contentType,
      });


      await s3.send(command);

      console.log("✅ Uploaded file:", uniqueFilename);

    }

    const newReply = await prisma.posts.create({
      data: { userid, text, parentId, imageURL: uniqueFilename },
      include: {
        poster: { select: { id: true, name: true } },
        _count: { select: { likes: true } },
        likes: { select: { userid: true } },
      },
    });



    // Find original post owner
    const parentPost = await prisma.posts.findUnique({
      where: { id: parentId },
    });

    if (!parentPost || parentPost.userid == null) {
      console.error("Could not create reply notification: parentPost missing");
      return;
    }

    // If replying to someone else, notify them
    if (parentPost?.userid !== userid) {
      await prisma.notifications.create({
        data: {
          userId: parentPost.userid,
          senderId: userid,
          type: "reply",
          message: "replied to your post",
          targetPostId: parentId
        }
      });
    }


    res.json(newReply);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create reply" });
  }
});


//get a reply
app.get('/replies/:id', async (req, res) => {
  const replyId = parseInt(req.params.id);

  const reply = await prisma.posts.findUnique({
    where: { id: replyId },
    include: {
      poster: { select: { id: true, name: true } },
      _count: { select: { likes: true } },
      likes: { select: { userid: true } },
      parent: { select: { id: true, text: true } }, //so you know which post it's replying to
    },
  });

  if (reply) {
    const transReply = {
      ...reply,
      imageURL: await getImageURL(reply.imageURL),
    }
    res.json(transReply);
  }


  //res.json(transReply);
});

//list all replies
app.get('/posts/:postId/replies', async (req, res) => {
  const postId = parseInt(req.params.postId);

  const replies = await prisma.posts.findMany({
    where: { parentId: postId },
    include: {
      poster: { select: { id: true, name: true } },
      _count: { select: { likes: true } },
      likes: { select: { userid: true } },
    },
    orderBy: { createdAt: 'asc' }, //current I have it set to oldest -> newest
  });

  res.json(replies);
});

//delete a reply
app.delete('/replies/:id', async (req, res) => {
  const replyId = parseInt(req.params.id);

  await prisma.posts.delete({
    where: { id: replyId },
  });

  res.json({ message: 'Reply deleted' });
});
app.post('/runCode', async (req, res) => {
  const { language, code } = req.body;
  const start = performance.now();
  try {
    const PISTOOOONN = await fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: language,
        version: "*",
        files: [
          {
            content: code,
          },
        ],
      }),
    });

    const PistonOUTPUT = await PISTOOOONN.json();
    const end = performance.now();
    res.json({
      output: PistonOUTPUT.run?.output || PistonOUTPUT.run?.stderr || "NOTHING",
      runtime: end - start,
      codeTime: PistonOUTPUT.run?.wall_time,
    });

  } catch (err) {
    console.error("ERROR ERROR", err);
    res.status(500).json({ error: "ERROR RUNNING TS!" });
  }



});

const getImageURL = async (filename: string) => {

  if (filename == "") {
    return "";
  }
  const command = new GetObjectCommand({
    Bucket: process.env.S3_BUCKET_NAME,
    Key: filename,
  });
  const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
  return url;
}

app.get('/get/image/:userId', async (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = await prisma.users.findUnique({
    where: {
      id: userId,

    },
    select: {
      profileURL: true,
    },
  });
  const filename = user?.profileURL || "";

  const result = await getImageURL(filename);

  res.json({ url: result });
});

app.post('/put/image/:userId', upload.single("file"), async (req, res): Promise<void> => {

  const userid = parseInt(req.params.userId);
  try {

    const file = req.file;
    if (!file) res.status(400).json({ error: "No file uploaded" });
    const uniqueFilename = `${uuidv4()}-${file?.originalname}`

    const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME,
      Key: uniqueFilename,
      Body: file?.buffer,
      ContentType: file?.mimetype,
    });

    await s3.send(command);

    const updatedUser = await prisma.users.update({
      where: { id: userid },
      data: { profileURL: uniqueFilename },
      select: { id: true, profileURL: true },
    });

    res.json({ key: uniqueFilename });
  } catch (err) {

  }

});

app.get('/get/all/Problems', async (req, res) => {

  const problems = await prisma.problems.findMany({
    orderBy: {
      id: 'asc',
    },
  },
  );

  res.json(problems);
});

app.get('/get/specific/Problem/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  const problem = await prisma.problems.findUnique({
    where: {
      id: id,
    },
    include: {
      questions: {
        select: {
          daQuestion: true,
          questionOrder: true,
        }
      },
      answers: {
        select: {
          daAnswer: true,
          answerOrder: true,
        },
      },
    },
  });

  res.json(problem);

});

// Josue was here
// GET /api/trending → top 5 most liked posts
app.get("/api/trending", async (req, res) => {
  try {
    // Step 1: Query top-level posts ordered by like count
    const posts = await prisma.posts.findMany({
      where: { parentId: null },
      take: 5,
      orderBy: {
        likes: { _count: "desc" },
      },
      select: {
        id: true,
        parentId: true,
        userid: true,
        text: true,
        createdAt: true,
        imageURL: true,

        likes: {
          select: { userid: true },
        },

        poster: {
          select: {
            id: true,
            name: true,
            profileURL: true,
          },
        },

        _count: {
          select: { likes: true },
        },
      },
    });

    // Step 2: Transform image URLs
    const transformed = await Promise.all(
      posts.map(async (post) => ({
        ...post,

        // Clean post image
        imageURL: await getImageURL(post.imageURL),

        // Clean user profile image
        poster: {
          ...post.poster,
          profileURL: await getImageURL(post.poster.profileURL),
        },
      }))
    );

    res.json(transformed);
  } catch (error) {
    console.error("Error fetching trending posts:", error);
    res.status(500).json({ error: "Failed to fetch trending posts" });
  }
});




const searchHandler: RequestHandler = async (req: Request, res: Response) => {
  try {
    const q = String(req.query.q ?? "").trim();

    if (!q) {
      res.json({ results: [] });
      return;
    }

    const index = getSearchIndex();

    const hits = index.search(q, {
      fields: { body: { boost: 1 } },
      expand: true,
    });

    const ids = hits.map((hit: any) => Number(hit.ref));
    if (ids.length === 0) {
      res.json({ results: [] });
      return;
    }

    const posts = await prisma.posts.findMany({
      where: { id: { in: ids } },
      include: {
        poster: true,
        _count: {
          select: {
            likes: true,
            replies: true,
          },
        },
      },
    });

    const byId = new Map<number, any>();
    posts.forEach((p) => byId.set(p.id, p));

    const results = hits
      .map((hit: any) => {
        const id = Number(hit.ref);
        const post = byId.get(id);
        if (!post) return null;
        return {
          ...post,
          score: hit.score as number,
        };
      })
      .filter(Boolean);

    res.json({ results });
  } catch (err) {
    console.error("Search error:", err);
    res.status(500).json({ error: "Search failed" });
  }
};

app.get("/api/search", searchHandler);
//  FOLLOW
app.post('/follow', async (req, res) => {
  try {
    let { followerId, followingId } = req.body;
    followerId = parseInt(followerId);
    followingId = parseInt(followingId);

    if (!followerId || !followingId) {
      res.status(400).json({ error: "Missing user IDs" });
      return;
    }

    if (followerId === followingId) {
      res.status(400).json({ error: "You cannot follow yourself" });
      return;
    }

    const existingFollow = await prisma.follows.findUnique({
      where: { followerId_followingId: { followerId, followingId } },
    });

    if (existingFollow) {
      res.status(200).json({ message: "Already following" });
      return;
    }

    const follow = await prisma.follows.create({
      data: { followerId, followingId },
    });

    // Create follow notification
    await prisma.notifications.create({
      data: {
        userId: followingId,        // person being followed
        senderId: followerId,       // the follower
        type: "follow",
        message: "started following you."
      }
    });


    res.status(201).json({ message: "Followed successfully", follow });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error following user" });
  }
});

// UNFOLLOW
app.post('/unfollow', async (req, res) => {
  try {
    let { followerId, followingId } = req.body;
    followerId = parseInt(followerId);
    followingId = parseInt(followingId);

    const deleted = await prisma.follows.deleteMany({
      where: { followerId, followingId },
    });

    if (deleted.count > 0) {
      res.status(200).json({ message: "Unfollowed successfully" });
    } else {
      res.status(404).json({ message: "Not currently following" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error unfollowing user" });
  }
});

// GET followers of a user
app.get('/followers/:id', async (req, res) => {
  const userId = parseInt(req.params.id);
  try {
    const followers = await prisma.follows.findMany({
      where: { followingId: userId },
      include: { follower: true },
    });

    /*
    const followersTrans = await Promise.all(
      followers.map(async (folli) => {
        
        follower: {
          ...folli.follower,
          profileURL: await getImageURL(profileURL);
        }
        
      })
    ); */

    res.json(followers);
    //res.json(followers.map((f: any) => f.follower));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching followers" });
  }
});

// GET who a user is following
app.get('/following/:id', async (req, res) => {
  const userId = parseInt(req.params.id);
  try {
    const following = await prisma.follows.findMany({
      where: { followerId: userId },
      include: { following: true },
    });
    res.json(following.map((f: any) => f.following));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching following" });
  }
});

app.get('/User/follows/list/:id', async (req, res) => {
  const userId = parseInt(req.params.id);

  const following = await prisma.follows.findMany({
    where: {
      followerId: userId,
    },
    include: {
      following: true,
    },
  });

  res.json(following);
});

app.post('/create/Solved/problem/:id', async (req, res) => {
  const problemid = parseInt(req.params.id);
  const { currentUserCode, userid, numSolved } = req.body;


  const AlreadySolvedQ = await prisma.solvedProblems.findFirst({
    where: {
      userid: userid,
    },
  })

  if (!AlreadySolvedQ) {
    const points = numSolved * 10;
    const updateUsersScore = await prisma.users.update({

      where: {
        id: userid,
      },
      data: {
        score: {
          increment: points,
        },
      },
    });
  }

  const solvedProblem = await prisma.solvedProblems.create({
    data: {
      currentUserCode,
      userid, problemid, numSolved
    }
  });


  res.json(solvedProblem);
});

app.get('/grab/users/submitted/problems/:id', async (req, res) => {
  const userid = parseInt(req.params.id);

  const submittedProblems = await prisma.solvedProblems.findMany({
    where: {
      userid: userid,

    },
    orderBy: {
      createdAt: 'desc',
    },
    distinct: ['problemid'],
    include: {
      problem: true,
    },

  });

  res.json(submittedProblems);
});

app.get('/get/history/ofUsersSubmits/:id', async (req, res) => {
  const solvedProblemid = parseInt(req.params.id);
  const userid = Number(req.query.extra);

  const solvedProblems = await prisma.solvedProblems.findMany({
    where: {
      userid: userid,
      problem: {
        id: solvedProblemid,
      }
    },
    include: {
      problem: true,
    },
    orderBy: {
      createdAt: 'asc',
    },
  })

  res.json(solvedProblems);
});



//notifications:

app.get('/notifications/:userId', async (req, res) => {
  const userId = parseInt(req.params.userId);

  try {
    const notifications = await prisma.notifications.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      include: {
        sender: { select: { id: true, name: true, profileURL: true } },
      },
    });

    res.json(notifications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch notifications" });
  }
});

app.post('/notifications', async (req, res) => {
  const { userId, senderId, type, message, targetPostId } = req.body;

  try {
    const note = await prisma.notifications.create({
      data: {
        userId,
        senderId,
        type,
        message,
        targetPostId,
      },
    });

    res.json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create notification" });
  }
});

app.put('/notifications/read/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const updated = await prisma.notifications.update({
      where: { id },
      data: { isRead: true },
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Failed to update notification" });
  }
});


//messaging:

// import type { Request, Response } from "express";

app.post(
  '/conversations',
  async (
    req: Request<{}, {}, { userIds: number[] }>,
    res: Response
  ) => {
    try {
      const { userIds } = req.body;

      const conversation = await prisma.conversations.create({
        data: {
          participants: {
            create: userIds.map((id: number) => ({ userId: id }))
          }
        },
        include: {
          participants: true
        }
      });

      res.json(conversation);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed creating conversation' });
    }
  }
);

// import type { Request, Response } from "express";

app.post(
  "/conversations/start",
  async (
    req: Request<{}, {}, { user1Id: number; user2Id: number }>,
    res: Response
  ) => {
    try {
      const { user1Id, user2Id } = req.body;

      if (!user1Id || !user2Id) {
        res.status(400).json({ error: "Missing user IDs" });
        return;
      }

      // 1. Check for an existing conversation with both users
      const existing = await prisma.conversations.findFirst({
        where: {
          participants: {
            some: { userId: user1Id },
          },
          AND: {
            participants: {
              some: { userId: user2Id },
            },
          },
        },
        include: {
          participants: { include: { user: true } },
        },
      });

      if (existing) {
        res.json({ conversationId: existing.id, created: false });
        return;
      }

      // 2. Create a new one
      const newConversation = await prisma.conversations.create({
        data: {
          participants: {
            create: [
              { userId: user1Id },
              { userId: user2Id },
            ],
          },
        },
        include: {
          participants: { include: { user: true } },
        },
      });

      res.json({ conversationId: newConversation.id, created: true });
    } catch (error) {
      console.error("Conversation start error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);




app.get('/conversations/user/:id', async (req, res) => {
  const userId = parseInt(req.params.id);

  try {
    const conversations = await prisma.conversations.findMany({
      where: {
        participants: {
          some: { userId }
        }
      },
      include: {
        participants: {
          include: {
            user: { select: { id: true, name: true, profileURL: true } }
          }
        },
        messages: {
          orderBy: { createdAt: 'desc' },
          take: 1, // latest message preview
        }
      }
    });

    res.json(conversations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get conversations' });
  }
});

app.post('/messages', async (req, res) => {
  const { conversationId, senderId, content } = req.body;

  try {
    const msg = await prisma.messages.create({
      data: { conversationId, senderId, content },
    });

    // Get other participant
    const convo = await prisma.conversations.findUnique({
      where: { id: conversationId },
      include: { participants: true },
    });

    if (!convo) {
      console.error("Conversation not found:", conversationId);
      return; // or throw an error, or res.status(404)
    }

    // Who is receiving the message?
    const recipient = convo.participants.find(p => p.userId !== senderId);

    if (!recipient) {
      console.error("No recipient found for conversation:", conversationId);
      return;
    }

    if (recipient) {
      await prisma.notifications.create({
        data: {
          userId: recipient.userId,
          senderId: senderId,
          type: "message",
          message: content,
        }
      });
    }


    res.json(msg);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send message" });
  }
});


app.get('/messages/:conversationId', async (req, res) => {
  const conversationId = parseInt(req.params.conversationId);

  try {
    const messages = await prisma.messages.findMany({
      where: { conversationId },
      orderBy: { createdAt: 'asc' },
      include: {
        sender: {
          select: { id: true, name: true, profileURL: true }
        }
      }
    });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});