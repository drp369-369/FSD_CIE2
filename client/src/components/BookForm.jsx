import React, { useState, useEffect } from 'react';

/**
 * BookForm Component (Reusable Functional Component)
 * 
 * VIVA CONCEPTS DEMONSTRATED:
 * 1. Controlled Form Handling:
 *    - All form input fields are controlled components whose values are managed
 *      by React state (useState).
 * 2. Event Handling:
 *    - 'onChange': Triggered whenever user types or toggles inputs.
 *    - 'onSubmit': Triggered when the form is submitted (intercepted with e.preventDefault()).
 * 3. Form Validation:
 *    - Validates required fields, non-negative price, and valid year before calling onSubmit().
 * 4. Props & Component Reusability:
 *    - Same form is used for both 'Add Book' and 'Edit Book'.
 *    - Receives 'book' (for initial edit values), 'onSubmit', 'submitButtonText', and 'submitting'.
 */
function BookForm({
  book = null,
  onSubmit,
  submitButtonText = 'Save Book',
  submitting = false
}) {
  // State for all form fields
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    price: '',
    publishedYear: '',
    description: '',
    available: true
  });

  // State for client-side validation errors
  const [validationError, setValidationError] = useState('');

  // If editing an existing book, pre-populate the form fields when data arrives
  useEffect(() => {
    if (book) {
      setFormData({
        title: book.title || '',
        author: book.author || '',
        category: book.category || '',
        price: book.price !== undefined ? book.price : '',
        publishedYear: book.publishedYear !== undefined ? book.publishedYear : '',
        description: book.description || '',
        available: book.available !== undefined ? book.available : true
      });
    }
  }, [book]);

  /**
   * Single generic event handler for all form inputs
   * Uses computed property name [name] based on the input's 'name' attribute
   */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear validation error when user begins typing
    if (validationError) {
      setValidationError('');
    }
  };

  /**
   * Form submission event handler
   * Prevents default browser reload and executes validation
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Form Validation (Required fields check)
    if (!formData.title.trim()) {
      setValidationError('Title is required.');
      return;
    }
    if (!formData.author.trim()) {
      setValidationError('Author is required.');
      return;
    }
    if (!formData.category.trim()) {
      setValidationError('Category is required.');
      return;
    }
    if (formData.price === '' || isNaN(formData.price)) {
      setValidationError('Valid price is required.');
      return;
    }
    if (Number(formData.price) < 0) {
      setValidationError('Price cannot be negative.');
      return;
    }
    if (formData.publishedYear === '' || isNaN(formData.publishedYear)) {
      setValidationError('Published year is required.');
      return;
    }

    const currentYear = new Date().getFullYear();
    const yearNum = Number(formData.publishedYear);
    if (yearNum < 1000 || yearNum > currentYear + 1) {
      setValidationError(`Please enter a valid publication year (between 1000 and ${currentYear + 1}).`);
      return;
    }

    // Submit validated payload to parent page handler
    onSubmit({
      ...formData,
      price: Number(formData.price),
      publishedYear: Number(formData.publishedYear)
    });
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      {/* Validation Error Banner */}
      {validationError && (
        <div className="form-error-banner">
          ⚠️ {validationError}
        </div>
      )}

      {/* Title Field */}
      <div className="form-group">
        <label htmlFor="title" className="form-label">
          Book Title <span className="required-star">*</span>
        </label>
        <input
          id="title"
          name="title"
          type="text"
          className="form-control"
          placeholder="e.g. The Pragmatic Programmer"
          value={formData.title}
          onChange={handleChange}
          disabled={submitting}
        />
      </div>

      {/* Author Field */}
      <div className="form-group">
        <label htmlFor="author" className="form-label">
          Author <span className="required-star">*</span>
        </label>
        <input
          id="author"
          name="author"
          type="text"
          className="form-control"
          placeholder="e.g. Andrew Hunt, David Thomas"
          value={formData.author}
          onChange={handleChange}
          disabled={submitting}
        />
      </div>

      {/* Row for Category, Price, and Published Year */}
      <div className="form-row">
        <div className="form-group col-4">
          <label htmlFor="category" className="form-label">
            Category <span className="required-star">*</span>
          </label>
          <input
            id="category"
            name="category"
            type="text"
            className="form-control"
            placeholder="e.g. Technology, Fiction, Self-Help"
            value={formData.category}
            onChange={handleChange}
            disabled={submitting}
          />
        </div>

        <div className="form-group col-4">
          <label htmlFor="price" className="form-label">
            Price (₹) <span className="required-star">*</span>
          </label>
          <input
            id="price"
            name="price"
            type="number"
            min="0"
            step="1"
            className="form-control"
            placeholder="e.g. 599"
            value={formData.price}
            onChange={handleChange}
            disabled={submitting}
          />
        </div>

        <div className="form-group col-4">
          <label htmlFor="publishedYear" className="form-label">
            Published Year <span className="required-star">*</span>
          </label>
          <input
            id="publishedYear"
            name="publishedYear"
            type="number"
            className="form-control"
            placeholder="e.g. 1999"
            value={formData.publishedYear}
            onChange={handleChange}
            disabled={submitting}
          />
        </div>
      </div>

      {/* Description Field */}
      <div className="form-group">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          className="form-control"
          placeholder="Short summary or overview of the book..."
          value={formData.description}
          onChange={handleChange}
          disabled={submitting}
        ></textarea>
      </div>

      {/* Availability Checkbox */}
      <div className="form-group form-checkbox-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleChange}
            disabled={submitting}
          />
          <span>Available in Library Stock</span>
        </label>
      </div>

      {/* Form Action Buttons */}
      <div className="form-actions">
        <button
          type="submit"
          className="btn btn-primary btn-lg"
          disabled={submitting}
        >
          {submitting ? 'Saving...' : submitButtonText}
        </button>
      </div>
    </form>
  );
}

export default BookForm;
