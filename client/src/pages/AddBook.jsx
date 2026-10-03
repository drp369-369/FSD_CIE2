import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BookForm from '../components/BookForm';
import { createBook } from '../services/api';

/**
 * AddBook Page Component (Functional Component)
 * 
 * VIVA CONCEPTS DEMONSTRATED:
 * 1. Form Handling: Renders the reusable 'BookForm' component.
 * 2. Parent-Child Communication:
 *    - AddBook passes the 'onSubmit' callback function to BookForm via props.
 *    - BookForm calls this prop function with the validated 'formData'.
 * 3. Asynchronous API POST:
 *    - Sends HTTP POST /api/books to the Express server.
 * 4. Client-Side Navigation:
 *    - Uses 'useNavigate()' from react-router-dom to navigate to '/books' on success.
 */
function AddBook() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');

  const handleAddBook = async (formData) => {
    try {
      setSubmitting(true);
      setApiError('');
      
      // Call Express API to create book
      await createBook(formData);

      // Navigate to books catalog on success
      navigate('/books');
    } catch (error) {
      setApiError(error.message || 'Unable to create book. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page-container">
      <div className="form-card-container">
        <div className="form-header">
          <Link to="/books" className="back-link">
            ← Back to Books
          </Link>
          <h1 className="page-title">Add New Book</h1>
          <p className="page-subtitle">
            Enter details to add a new title to the BookEase library catalog.
          </p>
        </div>

        {/* API Error Notification */}
        {apiError && (
          <div className="error-state" style={{ marginBottom: '20px' }}>
            <p>{apiError}</p>
          </div>
        )}

        {/* Reusable Form Component */}
        <BookForm
          onSubmit={handleAddBook}
          submitButtonText="Add Book to Catalog"
          submitting={submitting}
        />
      </div>
    </div>
  );
}

export default AddBook;
