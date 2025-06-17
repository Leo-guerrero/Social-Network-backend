import express from 'express';
import cors from 'cors';
import { PrismaClient } from './generated/prisma';

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

// Example: POST a user (optional now)
app.post('/Users', async (req, res) => {
  const { name, email } = req.body;
  const user = await prisma.users.create({
    data: { name, email },
  });
  res.json(user);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
