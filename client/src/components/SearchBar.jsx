import React from 'react';

/**
 * SearchBar Component (Functional Component)
 * 
 * ACADEMIC REQUIREMENT - STUDENT MODIFICATION 1:
 * - Real-time case-insensitive search filtering by book title or author name.
 * - This component is a controlled child component receiving:
 *   1. 'searchTerm': current search query string from parent state.
 *   2. 'onSearchChange': callback triggered on input 'onChange' event.
 *   3. 'onClear': optional callback to clear the search input.
 * 
 * @param {string} props.searchTerm - Search query state from Books page
 * @param {Function} props.onSearchChange - Event handler to update search state
 * @param {Function} props.onClear - Handler to reset the search input
 */
function SearchBar({ searchTerm = '', onSearchChange, onClear }) {
  return (
    <div className="search-bar-container">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        className="search-input"
        placeholder="Search books by title or author..."
        value={searchTerm}
        onChange={onSearchChange}
      />
      {searchTerm && (
        <button
          type="button"
          className="search-clear-btn"
          onClick={onClear}
          title="Clear search"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;
