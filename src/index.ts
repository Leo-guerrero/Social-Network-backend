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

app.post('/CreatePost/:id', async (req, res) =>{
    const userid = parseInt(req.params.id);
    const {text, imageURL} = req.body;
    
    
    

    
    

    const post = await prisma.posts.create({
      data: { userid: userid, text: text, imageURL: imageURL},
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
          },
        },
        _count: {
          select: {
            likes: true,
          },
        },
      }
    });

    

    res.json(posts);
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

  res.json(post);
});


//replies:

//create a reply
app.post('/replies', async (req, res) => {
  const { userid, parentId, text } = req.body;

  try {
    const newReply = await prisma.posts.create({
      data: { userid, text, parentId },
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

  res.json(reply);
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

app.post('/put/image/forPost', upload.single("file"), async (req, res) => {
  console.log("HELLO????");
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

    console.log("✅ Uploaded file:", uniqueFilename);
    res.json({filename: uniqueFilename});

  } catch (error){
    console.log("bro???");
  }
});

