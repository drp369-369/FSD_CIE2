import React from 'react';
import { Link } from 'react-router-dom';

/**
 * BookCard Component (Child Component)
 * 
 * VIVA CONCEPT - PROPS & PARENT-CHILD COMMUNICATION:
 * - This is a CHILD component of BookList.
 * - It receives data from the parent component through 'props':
 *   1. 'book': the book data object
 *   2. 'onDelete': a callback function passed from the parent to notify when a book is deleted.
 * 
 * VIVA CONCEPT - EVENT HANDLING:
 * - 'onClick' on the Delete button triggers handleDeleteClick, which requests user
 *   confirmation using window.confirm() before invoking the parent's onDelete callback.
 * 
 * @param {Object} props.book - Book data passed from parent (BookList)
 * @param {Function} props.onDelete - Callback passed from parent to handle book deletion
 */
function BookCard({ book, onDelete }) {
  if (!book) return null;

  // Event handler for delete button
  const handleDeleteClick = () => {
    const isConfirmed = window.confirm(`Are you sure you want to delete "${book.title}"?`);
    if (isConfirmed && onDelete) {
      onDelete(book._id);
    }
  };

  return (
    <div className="book-card">
      <div className="book-card-header">
        <span className="book-category-badge">{book.category}</span>
        <span className={`status-badge ${book.available ? 'available' : 'unavailable'}`}>
          {book.available ? 'Available' : 'Out of Stock'}
        </span>
      </div>

      <div className="book-card-body">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>

        <div className="book-meta">
          <div className="meta-item">
            <span className="meta-label">Published:</span>
            <span className="meta-value">{book.publishedYear}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Price:</span>
            <span className="meta-value book-price">₹{book.price}</span>
          </div>
        </div>
      </div>

      {/* Action buttons: View Details, Edit, and Delete */}
      <div className="book-card-actions">
        <Link to={`/books/${book._id}`} className="btn btn-outline btn-sm">
          Details
        </Link>
        <Link to={`/edit-book/${book._id}`} className="btn btn-secondary btn-sm">
          Edit
        </Link>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookCard;
