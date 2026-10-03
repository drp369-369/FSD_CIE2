const express = require('express');
const router = express.Router();

// Import controller functions
const {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} = require('../controllers/bookController');

// Route: /api/books
// GET: Fetch all books | POST: Create a new book
router.route('/')
  .get(getBooks)
  .post(createBook);

// Route: /api/books/:id
// GET: Fetch single book | PUT: Update book | DELETE: Delete book
router.route('/:id')
  .get(getBookById)
  .put(updateBook)
  .delete(deleteBook);

module.exports = router;
