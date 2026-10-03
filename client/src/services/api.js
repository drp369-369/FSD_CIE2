/**
 * API Service for BookEase
 * 
 * VIVA CONCEPT - FRONTEND-BACKEND INTEGRATION:
 * - Uses the native browser 'fetch()' API (no external libraries like Axios).
 * - Centralizes all HTTP communication with the Express REST API.
 * - Base URL points to the Express backend running on port 5000.
 */

const API_BASE_URL = 'http://localhost:5000/api';

/**
 * Fetch all books from the Express API
 * @route GET /api/books
 */
export async function getBooks() {
  const response = await fetch(`${API_BASE_URL}/books`);
  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || 'Failed to fetch books from server');
  }
  const result = await response.json();
  return result.data; // Array of books from MongoDB
}

/**
 * Fetch a single book by its MongoDB _id
 * @route GET /api/books/:id
 */
export async function getBook(id) {
  const response = await fetch(`${API_BASE_URL}/books/${id}`);
  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || 'Failed to fetch book details from server');
  }
  const result = await response.json();
  return result.data; // Single book object from MongoDB
}

/**
 * Create a new book in the database
 * @route POST /api/books
 */
export async function createBook(book) {
  const response = await fetch(`${API_BASE_URL}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || 'Failed to create book');
  }
  const result = await response.json();
  return result.data;
}

/**
 * Update an existing book by its MongoDB _id
 * @route PUT /api/books/:id
 */
export async function updateBook(id, book) {
  const response = await fetch(`${API_BASE_URL}/books/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || 'Failed to update book');
  }
  const result = await response.json();
  return result.data;
}

/**
 * Delete a book by its MongoDB _id
 * @route DELETE /api/books/:id
 */
export async function deleteBook(id) {
  const response = await fetch(`${API_BASE_URL}/books/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || 'Failed to delete book');
  }
  const result = await response.json();
  return result;
}
