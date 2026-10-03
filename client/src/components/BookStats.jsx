import React from 'react';

/**
 * BookStats Component (Functional Component)
 * 
 * Demonstrates:
 * - Reusable functional component
 * - Props receiving derived metrics from parent (Books.jsx)
 * - Calculation of values from existing state without redundant network calls
 * 
 * @param {number} props.totalBooks - Total count of books
 * @param {number} props.availableBooks - Count of in-stock books
 * @param {number} props.categoryCount - Number of distinct categories
 */
function BookStats({ totalBooks = 0, availableBooks = 0, categoryCount = 0 }) {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <span className="stat-icon">📚</span>
        <div className="stat-info">
          <span className="stat-value">{totalBooks}</span>
          <span className="stat-label">Total Books</span>
        </div>
      </div>

      <div className="stat-card">
        <span className="stat-icon">✅</span>
        <div className="stat-info">
          <span className="stat-value">{availableBooks}</span>
          <span className="stat-label">Available Books</span>
        </div>
      </div>

      <div className="stat-card">
        <span className="stat-icon">🏷️</span>
        <div className="stat-info">
          <span className="stat-value">{categoryCount}</span>
          <span className="stat-label">Categories</span>
        </div>
      </div>
    </div>
  );
}

export default BookStats;
