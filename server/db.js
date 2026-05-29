import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export let isMongoConnected = false;
const fallbackDataDir = path.join(__dirname, 'data');

// Ensure fallback folder exists
if (!fs.existsSync(fallbackDataDir)) {
  fs.mkdirSync(fallbackDataDir, { recursive: true });
}

export async function connectDB() {
  const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio_db';
  
  try {
    // Set a short connection timeout so it falls back quickly if MongoDB is not running
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 3000
    });
    isMongoConnected = true;
    console.log('✨ MongoDB connected successfully!');
  } catch (error) {
    isMongoConnected = false;
    console.warn('⚠️ MongoDB connection failed. Falling back to local JSON file storage.');
    console.warn(`Details: ${error.message}`);
  }
}

// Fallback Helper Functions
export const fallbackStore = {
  getMessages: () => {
    const filePath = path.join(fallbackDataDir, 'messages.json');
    if (!fs.existsSync(filePath)) return [];
    try {
      return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    } catch {
      return [];
    }
  },
  saveMessage: (message) => {
    const filePath = path.join(fallbackDataDir, 'messages.json');
    const messages = fallbackStore.getMessages();
    messages.push(message);
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2), 'utf-8');
    return message;
  },
  getPortfolio: () => {
    const filePath = path.join(fallbackDataDir, 'portfolio.json');
    if (!fs.existsSync(filePath)) return null;
    try {
      return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    } catch {
      return null;
    }
  },
  savePortfolio: (data) => {
    const filePath = path.join(fallbackDataDir, 'portfolio.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return data;
  }
};
