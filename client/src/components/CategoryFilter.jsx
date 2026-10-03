import React from 'react';

/**
 * CategoryFilter Component (Functional Component)
 * 
 * ACADEMIC REQUIREMENT - STUDENT MODIFICATION 2:
 * - Interactive category filtering allowing users to filter books by specific genres.
 * - Categories are generated dynamically from the active book catalog in the parent component.
 * - Demonstrates props and event handling:
 *   1. 'categories': Array of available categories passed from parent.
 *   2. 'selectedCategory': Currently selected category string.
 *   3. 'onSelectCategory': Callback function invoked with onClick to update parent state.
 * 
 * @param {Array} props.categories - List of unique category names
 * @param {string} props.selectedCategory - Active category
 * @param {Function} props.onSelectCategory - Event callback to switch active category
 */
function CategoryFilter({
  categories = ['All'],
  selectedCategory = 'All',
  onSelectCategory = () => {}
}) {
  return (
    <div className="category-filter-container">
      <span className="filter-label">Category:</span>
      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
