import express from 'express';
import cors from 'cors';
import { PrismaClient } from '../generated/prisma';
import { version } from 'os';
import { S3Client, GetObjectCommand, PutObjectAclCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuidv4 } from "uuid";
import multer from 'multer';
import { profile } from 'console';
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
    const {bio} = req.body;

    try{

      const updateProfile = await prisma.profiles.update({
        where:{userid: userid},
        data: { bio },
      });

      res.json(updateProfile);

    } catch(error){

    }

});

app.get('/profiles/:id', async (req, res) =>{
  const userid = parseInt(req.params.id);


  const profile = await prisma.profiles.findUnique({where: {
    userid: userid,
  }});

  res.json(profile);

});

// Example: POST a user (optional now)
app.post('/Users', async (req, res) => {

  const { name, email, password } = req.body;

  const user = await prisma.users.create({

    data: { name, email, password },
    

  });

  const profile = await prisma.profiles.create({
    data: { userid: user.id , bio: "" },
  });

  

  if (user){

    const {password, ...noPasswordUser} = user;
    res.json(noPasswordUser);
  }
  
});


app.post('/LoginCheck', async (request, response) => {
  const {email, password} = request.body;

  const user = await prisma.users.findUnique({where:{
    email: email,
  }});

  if (user && user.password === password){
    const { password, ...safeuser} = user;
    response.json(safeuser);
  } 

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.post('/CreatePost/:id', upload.single('file'), async (req, res) =>{
    const userid = parseInt(req.params.id);

    const file = req.file;
    const {text} = req.body;

    let uniqueFilename = "";
    if(file){

      let contentType = file?.mimetype;
      const ext = file.originalname.split(".").pop()?.toLowerCase();

      if(ext == "mp4"){
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
    res.json({filename: uniqueFilename});
    
    const post = await prisma.posts.create({
      data: { userid: userid, text: text, imageURL: uniqueFilename},
    })
});

app.get('/GetAllPosts', async (req, res) => {
  const posts = await prisma.posts.findMany({
    where: { parentId: null },   // 🔑 exclude replies
    include: {
      poster: { select: { id: true, name: true, profileURL:true } },
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
          select:{
            userid: true,
          },
        },
        poster: {
          select: {
            name: true, 
            profileURL:true,
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
  const {postid, userid} = req.body;

  const existingLike = await prisma.likes.findUnique({
      where: {
        userid_postid: {
          userid,
          postid: postid,
        },
      },
    });

  if (existingLike){
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
      data: {likedByUser: false}
    });
  }

  if(!existingLike){
    const like_create = await prisma.likes.create({
      data: {userid: userid, postid: postid }
    })

    const setTruePost = await prisma.posts.update({
      where: {
        id: postid,
      },
      data: {likedByUser: true}
    });
  }

});

app.get('/User/:id', async (req , res) => {
    const Userid = parseInt(req.params.id);

    const User = await prisma.users.findUnique({where: {
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
  
  if(post){
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
    if(file){

      let contentType = file?.mimetype;
      const ext = file.originalname.split(".").pop()?.toLowerCase();

      if(ext == "mp4"){
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

  if(reply){
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
  const {language, code} = req.body;
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

  } catch(err){
    console.error("ERROR ERROR", err);
    res.status(500).json({error: "ERROR RUNNING TS!"});
  }
  


});

const getImageURL = async (filename: string) => {

  if(filename == ""){
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
  
  res.json({url: result});
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
  } catch(err) {

  }
  
});

app.get('/get/all/Problems', async (req, res) => {

  const problems = await prisma.problems.findMany( {
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

// ✅ FOLLOW
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

    res.status(201).json({ message: "Followed successfully", follow });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error following user" });
  }
});

// ✅ UNFOLLOW
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
  const {currentUserCode, userid, numSolved } = req.body;


  const AlreadySolvedQ = await prisma.solvedProblems.findFirst({
    where: {
      userid: userid,
    },
  })

  if(!AlreadySolvedQ){
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
    data: { currentUserCode,
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
    include:{
      problem: true,
    },
    orderBy: {
      createdAt: 'asc',
    },
  })

  res.json(solvedProblems);
});
  



