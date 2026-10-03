// Import core dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Import route handlers
const bookRoutes = require('./routes/bookRoutes');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/bookease';

// Middleware
app.use(cors()); // Allow Cross-Origin requests from React frontend
app.use(express.json()); // Parse incoming JSON request bodies

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'BookEase API is running'
  });
});

// Mount Book routes
app.use('/api/books', bookRoutes);

// Connect to MongoDB and start server
const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB successfully');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
      console.log(`📚 Books API:    http://localhost:${PORT}/api/books`);
    });
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    console.error('💡 If using MongoDB Atlas, check your MONGO_URI in server/.env');
    // Start server even if DB fails initially, so health check is accessible
    app.listen(PORT, () => {
      console.log(`⚠️ Server running without database on port ${PORT}`);
    });
  }
};

startServer();
