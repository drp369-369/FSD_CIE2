import React from 'react';
import { NavLink, Link } from 'react-router-dom';

/**
 * Navbar Component (Functional Component)
 * Demonstrates:
 * - Functional component structure
 * - React Router NavLink for active page highlighting
 * - Client-side navigation without page refresh
 */
function Navbar() {
  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        {/* Logo / Brand Name */}
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">📚</span>
          <span className="brand-text">BookEase</span>
        </Link>

        {/* Navigation Links */}
        <div className="navbar-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Home
          </NavLink>

          <NavLink
            to="/books"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Books
          </NavLink>

          <NavLink
            to="/add-book"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Add Book
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
