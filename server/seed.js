// Standalone script to populate sample books in MongoDB
const mongoose = require('mongoose');
require('dotenv').config();
const Book = require('./models/Book');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/bookease';

const sampleBooks = [
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    category: 'Fiction',
    price: 299,
    publishedYear: 1988,
    description: 'A magical story about following your dreams and listening to your heart.',
    available: true
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    category: 'Technology',
    price: 650,
    publishedYear: 2008,
    description: 'A handbook of agile software craftsmanship with best practices for writing clean code.',
    available: true
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self-Help',
    price: 499,
    publishedYear: 2018,
    description: 'An easy and proven way to build good habits and break bad ones.',
    available: true
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'David Thomas, Andrew Hunt',
    category: 'Technology',
    price: 599,
    publishedYear: 1999,
    description: 'Your journey to mastery: pragmatic philosophies and techniques for developers.',
    available: false
  },
  {
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen, Charles E. Leiserson',
    category: 'Education',
    price: 899,
    publishedYear: 1990,
    description: 'A comprehensive textbook covering a broad range of fundamental computer algorithms.',
    available: true
  }
];

const seedDatabase = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB.');

    // Clear existing records to avoid duplicates
    await Book.deleteMany({});
    console.log('Existing books cleared.');

    // Insert sample books
    const createdBooks = await Book.insertMany(sampleBooks);
    console.log(`✅ Successfully seeded ${createdBooks.length} sample books!`);

    await mongoose.connection.close();
    console.log('Database connection closed.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error.message);
    process.exit(1);
  }
};

seedDatabase();
