import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBook } from '../services/api';

/**
 * BookDetails Page Component (Functional Component)
 * 
 * VIVA CONCEPTS DEMONSTRATED:
 * 1. useParams(): Extracts the dynamic ':id' route parameter from the URL (/books/:id).
 * 2. useState:
 *    - 'book': Stores the fetched book object from MongoDB.
 *    - 'loading': Tracks fetching progress.
 *    - 'error': Stores error message if the book cannot be loaded.
 * 3. useEffect:
 *    - Fetches the specific book's details when the component mounts or when 'id' changes.
 */
function BookDetails() {
  const { id } = useParams();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch book details when component mounts or ID changes
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        setLoading(true);
        setError('');
        const data = await getBook(id);
        if (!data) {
          setError('Book not found.');
        } else {
          setBook(data);
        }
      } catch (err) {
        setError('Unable to load book details. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBookDetails();
    }
  }, [id]);

  return (
    <div className="page-container">
      {/* 1. Loading State */}
      {loading && (
        <div className="loading-state">
          <p>Loading book details...</p>
        </div>
      )}

      {/* 2. Error State */}
      {error && !loading && (
        <div className="error-state">
          <p>{error}</p>
          <div style={{ marginTop: '16px' }}>
            <Link to="/books" className="btn btn-outline">
              ← Back to Books
            </Link>
          </div>
        </div>
      )}

      {/* 3. Book Not Found State */}
      {!loading && !error && !book && (
        <div className="empty-state">
          <p>Book not found.</p>
          <div style={{ marginTop: '16px' }}>
            <Link to="/books" className="btn btn-outline">
              ← Back to Books
            </Link>
          </div>
        </div>
      )}

      {/* 4. Book Details Display */}
      {!loading && !error && book && (
        <div className="detail-card">
          <div className="detail-header">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="book-category-badge">{book.category}</span>
              <span className={`status-badge ${book.available ? 'available' : 'unavailable'}`}>
                {book.available ? 'Available' : 'Out of Stock'}
              </span>
            </div>
            <h1 className="detail-title">{book.title}</h1>
            <p className="book-author" style={{ fontSize: '1.1rem' }}>by {book.author}</p>
          </div>

          <div className="detail-body">
            <div className="book-meta" style={{ marginBottom: '24px', fontSize: '1rem' }}>
              <div className="meta-item">
                <span className="meta-label">Published Year:</span>
                <span className="meta-value">{book.publishedYear}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Price:</span>
                <span className="meta-value book-price" style={{ fontSize: '1.2rem' }}>₹{book.price}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Availability:</span>
                <span className="meta-value">{book.available ? 'In Stock' : 'Currently Unavailable'}</span>
              </div>
            </div>

            <div className="description-section">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Description</h3>
              <p style={{ color: '#334155', lineHeight: '1.7' }}>
                {book.description || 'No description provided for this book.'}
              </p>
            </div>
          </div>

          <div className="detail-actions">
            <Link to="/books" className="btn btn-outline">
              ← Back to Books
            </Link>
            <Link to={`/edit-book/${book._id}`} className="btn btn-secondary">
              Edit Book
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookDetails;
