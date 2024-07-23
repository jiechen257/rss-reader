import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/feeds', async (req, res) => {
  try {
    const { url } = req.body;
    const feed = await prisma.feed.create({ data: { url } });
    res.json(feed);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add feed' });
  }
});

app.get('/api/feeds', async (req, res) => {
  try {
    const feeds = await prisma.feed.findMany();
    res.json(feeds);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch feeds' });
  }
});

app.get('/api/items', async (req, res) => {
  try {
    const items = await prisma.item.findMany({
      include: { feed: true },
      orderBy: { pubDate: 'desc' },
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));