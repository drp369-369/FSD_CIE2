import React from 'react';
import BookCard from './BookCard';

/**
 * BookList Component (Parent Component to BookCard)
 * 
 * VIVA CONCEPT - PARENT-CHILD COMMUNICATION & PROPS:
 * - BookList receives:
 *   1. 'props.books': the array of books
 *   2. 'props.onDelete': callback function from the Books page for deleting a book.
 * - It maps over 'books' and passes both 'book' and 'onDelete' to each BookCard child.
 * 
 * @param {Array} props.books - Array of book objects
 * @param {Function} props.onDelete - Callback passed down to BookCard for deletion
 */
function BookList({ books, onDelete }) {
  if (!books || books.length === 0) {
    return (
      <div className="empty-state">
        <p>No books found.</p>
      </div>
    );
  }

  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookCard
          key={book._id}
          book={book}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default BookList;
