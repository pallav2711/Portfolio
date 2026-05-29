import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { connectDB, isMongoConnected, fallbackStore } from './db.js';
import PortfolioData from './models/PortfolioData.js';
import Contact from './models/Contact.js';
import { seedData } from './seed.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDistPath = path.join(__dirname, '../client/dist');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Database & Seed default data if empty
async function initApp() {
  await connectDB();
  
  if (isMongoConnected) {
    try {
      const count = await PortfolioData.countDocuments();
      if (count === 0) {
        console.log('🌱 No portfolio data found. Seeding default data...');
        const newPortfolio = new PortfolioData(seedData);
        await newPortfolio.save();
        console.log('✅ Default portfolio data seeded in MongoDB.');
      }
    } catch (err) {
      console.error('❌ Failed to check/seed default data in MongoDB:', err);
    }
  } else {
    // Seed default file-based fallback if it doesn't exist
    if (!fallbackStore.getPortfolio()) {
      console.log('🌱 No fallback portfolio file found. Seeding default data file...');
      fallbackStore.savePortfolio(seedData);
      console.log('✅ Default portfolio file seeded.');
    }
  }
}

initApp();

// API ROUTES

// 1. Get Portfolio Data
app.get('/api/portfolio', async (req, res) => {
  if (isMongoConnected) {
    try {
      const data = await PortfolioData.findOne();
      if (data) {
        return res.json(data);
      }
    } catch (err) {
      console.error('Error fetching from MongoDB:', err);
    }
  }
  
  // Fallback to JSON file
  const fileData = fallbackStore.getPortfolio();
  if (fileData) {
    return res.json(fileData);
  }
  
  // Fallback to memory
  return res.json(seedData);
});

// 2. Submit Contact Message
app.post('/api/contacts', async (req, res) => {
  const { name, email, subject, budget, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required fields.' });
  }

  const messageData = {
    name,
    email,
    subject: subject || 'Not specified',
    budget: budget || 'Not specified',
    message,
    createdAt: new Date()
  };

  if (isMongoConnected) {
    try {
      const newContact = new Contact(messageData);
      await newContact.save();
      return res.status(201).json({ success: true, message: 'Message saved to database successfully.' });
    } catch (err) {
      console.error('Error saving to MongoDB:', err);
      // Fallback to local storage on error
    }
  }

  // Fallback storage
  fallbackStore.saveMessage(messageData);
  return res.status(201).json({ success: true, message: 'Message saved to fallback local storage.' });
});

// 3. Admin Verification
app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
  
  if (password === adminPassword) {
    return res.json({ success: true, token: 'authenticated-portfolio-admin' });
  } else {
    return res.status(401).json({ error: 'Invalid password. Try again.' });
  }
});

// 4. Get Contact Messages (Admin only)
app.get('/api/contacts', async (req, res) => {
  const password = req.headers['x-admin-password'];
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

  if (password !== adminPassword) {
    return res.status(401).json({ error: 'Unauthorized. Admin authorization required.' });
  }

  if (isMongoConnected) {
    try {
      const messages = await Contact.find().sort({ createdAt: -1 });
      return res.json(messages);
    } catch (err) {
      console.error('Error fetching from MongoDB:', err);
    }
  }

  // Fallback storage read
  const messages = fallbackStore.getMessages();
  // Sort descending by date
  messages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return res.json(messages);
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    database: isMongoConnected ? 'MongoDB' : 'Fallback File System',
    port: PORT
  });
});

// Serve production frontend build (after `npm run build`)
if (fs.existsSync(path.join(clientDistPath, 'index.html'))) {
  app.use(express.static(clientDistPath));

  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });

  console.log('📦 Serving client build from client/dist');
} else {
  console.warn('⚠️  client/dist not found. Run `npm run build` before production start.');
}

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
