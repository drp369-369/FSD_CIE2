const mongoose = require('mongoose');

// Define the Book Schema
// A schema defines the structure of documents within a MongoDB collection
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Book title is required'],
      trim: true
    },
    author: {
      type: String,
      required: [true, 'Author name is required'],
      trim: true
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price must be a positive number']
    },
    publishedYear: {
      type: Number,
      required: [true, 'Published year is required']
    },
    description: {
      type: String,
      default: ''
    },
    available: {
      type: Boolean,
      default: true
    }
  },
  {
    // Automatically creates 'createdAt' and 'updatedAt' fields
    timestamps: true
  }
);

// Create and export the Book model
// A model provides the interface to interact with the MongoDB 'books' collection
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
