import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Home Page Component (Functional Component)
 * Landing view featuring hero banner and navigation CTA buttons
 */
function Home() {
  return (
    <div className="page-container home-page">
      <section className="hero-section">
        <span className="badge">College Mini Project • CS3301</span>
        <h1 className="hero-title">BookEase</h1>
        <p className="hero-tagline">Manage your books with ease.</p>
        <p className="hero-description">
          A clean, modern, and beginner-friendly web application for organizing,
          tracking, and managing your personal library and book collection.
        </p>

        {/* Action Buttons with React Router Link */}
        <div className="hero-actions">
          <Link to="/books" className="btn btn-primary btn-lg">
            Browse Books
          </Link>
          <Link to="/add-book" className="btn btn-outline btn-lg">
            Add a Book
          </Link>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="features-section">
        <div className="feature-card">
          <span className="feature-icon">📖</span>
          <h3>Explore Library</h3>
          <p>Browse through books with clear details on category, author, price, and availability.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🔍</span>
          <h3>Instant Search</h3>
          <p>Quickly locate books by title or author using fast client-side filtering.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">⚡</span>
          <h3>MERN Stack</h3>
          <p>Built with React, Express, MongoDB, and Mongoose for clean full-stack architecture.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
