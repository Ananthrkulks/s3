import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import OpenAI from 'openai';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:5173", "http://localhost:4173"],
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:4173"],
  credentials: true
}));
app.use(express.json());
app.use(express.static(join(__dirname, '../dist')));

const systemPrompt = `You are an expert AI assistant for an animation studio. Your role is to help potential clients with questions about animation services, pricing, and project requirements.

Key Information:
- We specialize in character animation, game art, product visualization, and motion graphics
- Our team uses industry-standard tools like Maya, Blender, and After Effects
- Typical project timelines range from 2-12 weeks depending on complexity
- We work with game developers, product companies, and marketing agencies
- Our pricing is project-based and depends on complexity and requirements

Please provide helpful, professional responses that showcase our expertise while being transparent about our capabilities and process. If asked about specific pricing, provide ranges and explain the factors that influence cost.`;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  let conversationHistory = [
    { role: "system", content: systemPrompt }
  ];

  socket.on('sendMessage', async (message) => {
    try {
      if (!message || typeof message !== 'string') {
        throw new Error('Invalid message format');
      }

      // Add user message to history
      conversationHistory.push({ role: "user", content: message });

      // Keep only last 10 messages to prevent token limit issues
      if (conversationHistory.length > 10) {
        conversationHistory = [
          conversationHistory[0], // Keep system prompt
          ...conversationHistory.slice(-9) // Keep last 9 messages
        ];
      }

      const completion = await openai.chat.completions.create({
        messages: conversationHistory,
        model: "gpt-3.5-turbo",
        temperature: 0.7,
        max_tokens: 500,
        presence_penalty: 0.6,
        frequency_penalty: 0.5
      });

      const response = completion.choices[0].message.content;
      
      // Add assistant response to history
      conversationHistory.push({ role: "assistant", content: response });
      
      socket.emit('botResponse', response);
    } catch (error) {
      console.error('OpenAI Error:', error);
      socket.emit('botResponse', "I apologize, but I'm having trouble processing your request. Please try again later.");
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});