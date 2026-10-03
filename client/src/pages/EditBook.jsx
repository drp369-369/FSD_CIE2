import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import BookForm from '../components/BookForm';
import { getBook, updateBook } from '../services/api';

/**
 * EditBook Page Component (Functional Component)
 * 
 * VIVA CONCEPTS DEMONSTRATED:
 * 1. useParams(): Reads ':id' from the URL route (/edit-book/:id).
 * 2. useEffect(): Fetches existing book data by ID when page loads.
 * 3. useState(): Manages 'book', 'loading', 'submitting', and 'error' states.
 * 4. Props & Component Reusability:
 *    - Reuses 'BookForm', passing the existing 'book' data as props to pre-populate inputs.
 * 5. PUT Request:
 *    - Updates the book via Express API PUT /api/books/:id.
 */
function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Fetch the existing book details to pre-populate the form
  useEffect(() => {
    const fetchBookToEdit = async () => {
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
        setError('Unable to load book details for editing.');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBookToEdit();
    }
  }, [id]);

  // Handle form submission to update book
  const handleUpdateBook = async (formData) => {
    try {
      setSubmitting(true);
      setError('');

      await updateBook(id, formData);

      // Navigate back to the books catalog (or book details)
      navigate('/books');
    } catch (err) {
      setError(err.message || 'Unable to update book. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page-container">
      <div className="form-card-container">
        <div className="form-header">
          <Link to={`/books/${id}`} className="back-link">
            ← Back to Details
          </Link>
          <h1 className="page-title">Edit Book</h1>
          <p className="page-subtitle">
            Update the details for <strong>{book?.title || 'this book'}</strong>.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="loading-state">
            <p>Loading book data for editing...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="error-state" style={{ marginBottom: '20px' }}>
            <p>{error}</p>
          </div>
        )}

        {/* Reusable Form pre-populated with fetched book props */}
        {!loading && book && (
          <BookForm
            book={book}
            onSubmit={handleUpdateBook}
            submitButtonText="Update Book Details"
            submitting={submitting}
          />
        )}
      </div>
    </div>
  );
}

export default EditBook;
