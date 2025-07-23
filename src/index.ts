import express from 'express';
import cors from 'cors';
import { PrismaClient } from '../generated/prisma';

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

app.get('/GetAllPosts', async (req, res) =>{
  const posts = await prisma.posts.findMany({
  include: {
    poster: {
      select: {
        id: true,
        name: true, 
      },
    },
    _count: {
      select: {
        likes: true,
      },
    },
  },
  orderBy: {
    createdAt: 'asc', 
  },
}
    
  );

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
  }

  if(!existingLike){
    const like_create = await prisma.likes.create({
      data: {userid: userid, postid: postid }
    })
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
