import React, { useState, useEffect } from 'react';
import BookStats from '../components/BookStats';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import BookList from '../components/BookList';
import { getBooks, deleteBook } from '../services/api';

/**
 * Books Page Component (Functional Component)
 * 
 * ACADEMIC HIGHLIGHTS & STUDENT MODIFICATIONS:
 * 
 * 1. STUDENT MODIFICATION 1 — SEARCH FUNCTIONALITY:
 *    - Real-time client-side search across book titles and author names.
 *    - Case-insensitive search using useState('searchTerm').
 * 
 * 2. STUDENT MODIFICATION 2 — CATEGORY FILTERING:
 *    - Filters the displayed books by category.
 *    - Categories are dynamically derived from the available books array.
 *    - Managed via useState('selectedCategory').
 * 
 * 3. BOOK STATISTICS (Derived State):
 *    - Calculated directly from existing 'books' state without extra API calls.
 *    - Total Books, Available Books, and Unique Categories count passed to BookStats.
 * 
 * 4. COMBINED FILTERING & PARENT-CHILD COMMUNICATION:
 *    - Books (Parent) passes derived metrics to BookStats, search state to SearchBar,
 *      categories to CategoryFilter, and filteredBooks to BookList.
 */
function Books() {
  // Master API data state
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // STUDENT MODIFICATION 1: Search state
  const [searchTerm, setSearchTerm] = useState('');

  // STUDENT MODIFICATION 2: Category filter state
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Fetch all books on component mount
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError('');
        const data = await getBooks();
        setBooks(data);
      } catch (err) {
        setError('Unable to load books. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Delete handler passed down through props to BookList -> BookCard
  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id);
      // Clean state update: remove the deleted book from local state
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
    } catch (err) {
      alert(err.message || 'Failed to delete the book. Please try again.');
    }
  };

  // Dynamically extract unique categories from the active book catalog
  const uniqueCategories = Array.from(
    new Set(books.map((b) => b.category).filter(Boolean))
  );
  const categories = ['All', ...uniqueCategories];

  // Derived statistics (calculated from existing state without extra state or network calls)
  const totalBooksCount = books.length;
  const availableBooksCount = books.filter((book) => book.available).length;
  const categoryCount = uniqueCategories.length;

  // Combined Filtering: Derive filteredBooks based on searchTerm and selectedCategory
  const filteredBooks = books.filter((book) => {
    // 1. Check title and author (case-insensitive match)
    const query = searchTerm.toLowerCase().trim();
    const titleMatch = book.title?.toLowerCase().includes(query);
    const authorMatch = book.author?.toLowerCase().includes(query);
    const matchesSearch = query === '' || titleMatch || authorMatch;

    // 2. Check category selection
    const matchesCategory =
      selectedCategory === 'All' || book.category === selectedCategory;

    // Must satisfy both conditions
    return matchesSearch && matchesCategory;
  });

  // Reset all search and category filters
  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
  };

  const isFiltered = searchTerm.trim() !== '' || selectedCategory !== 'All';

  return (
    <div className="page-container">
      {/* 1. Page Title & Description */}
      <div className="page-header">
        <h1 className="page-title">Book Collection</h1>
        <p className="page-subtitle">
          Browse, search, and filter through our curated collection of books.
        </p>
      </div>

      {/* 2. Book Statistics (Derived values passed as props) */}
      {!loading && !error && books.length > 0 && (
        <BookStats
          totalBooks={totalBooksCount}
          availableBooks={availableBooksCount}
          categoryCount={categoryCount}
        />
      )}

      {/* 3. Search Bar & Category Filters (Student Modifications) */}
      <div className="filter-section">
        {/* Student Modification 1 */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={(e) => setSearchTerm(e.target.value)}
          onClear={() => setSearchTerm('')}
        />

        {/* Student Modification 2 */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* 4. Live Result Count & Clear Filters Option */}
        {!loading && !error && books.length > 0 && (
          <div className="filter-results-info">
            <span className="results-counter">
              <strong>{filteredBooks.length}</strong> {filteredBooks.length === 1 ? 'book found' : 'books found'}
              {isFiltered && ` (filtered from ${books.length} total)`}
            </span>

            {isFiltered && (
              <button
                type="button"
                className="btn btn-secondary btn-sm clear-filters-btn"
                onClick={handleClearFilters}
              >
                Clear Filters
              </button>
            )}
          </div>
        )}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="loading-state">
          <p>Loading books...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="error-state">
          <p>{error}</p>
        </div>
      )}

      {/* Empty Library State (No books in DB) */}
      {!loading && !error && books.length === 0 && (
        <div className="empty-state">
          <p>No books found in the library catalog.</p>
        </div>
      )}

      {/* Empty Filter Results State (Filtered down to 0) */}
      {!loading && !error && books.length > 0 && filteredBooks.length === 0 && (
        <div className="empty-state">
          <p>No books match your search/filter criteria.</p>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            style={{ marginTop: '14px' }}
            onClick={handleClearFilters}
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* 5. Book Cards List */}
      {!loading && !error && filteredBooks.length > 0 && (
        <BookList books={filteredBooks} onDelete={handleDeleteBook} />
      )}
    </div>
  );
}

export default Books;
