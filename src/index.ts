import express from 'express';
import cors from 'cors';
import { PrismaClient } from '../generated/prisma';
import { version } from 'os';

const app = express();
const port = process.env.PORT || 3000;

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
    const {text} = req.body;

    const post = await prisma.posts.create({
      data: { userid: userid, text: text},
    })
});

app.get('/GetAllPosts', async (req, res) => {
  const posts = await prisma.posts.findMany({
    where: { parentId: null },   // 🔑 exclude replies
    include: {
      poster: { select: { id: true, name: true } },
      _count: { select: { likes: true } },
      likes: { select: { userid: true } },
    },
    orderBy: { createdAt: 'desc' }
  });

  res.json(posts);
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
