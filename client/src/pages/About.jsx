import React from 'react';

/**
 * About Page Component (CLASS COMPONENT)
 * 
 * VIVA REQUIREMENT - CLASS COMPONENT:
 * - This component satisfies the academic requirement for demonstrating
 *   at least ONE class component in the project.
 * - It extends 'React.Component' and implements the required 'render()' lifecycle method.
 * - No React Hooks (such as useState or useEffect) are used here, as hooks are only
 *   supported inside functional components.
 */
class About extends React.Component {
  render() {
    return (
      <div className="page-container about-page">
        <div className="about-card">
          <span className="badge">Academic Viva Demo • Class Component</span>
          <h1 className="page-title">About BookEase</h1>
          <p className="about-subtitle">Full Stack Book Management System</p>

          <section className="about-section">
            <h2>About the Project</h2>
            <p>
              <strong>BookEase</strong> is a college academic mini-project developed for
              <strong> CS3301 Full Stack Development (CIE-2)</strong>. It is designed to demonstrate
              clean full-stack integration between a React single-page frontend and a RESTful
              Node.js/Express.js backend backed by MongoDB.
            </p>
          </section>

          <section className="about-section">
            <h2>Technologies Used</h2>
            <div className="tech-grid">
              <div className="tech-item">
                <span className="tech-icon">⚛️</span>
                <strong>React</strong>
                <p>Component-based UI architecture, client-side routing, and state management.</p>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🚀</span>
                <strong>Express.js</strong>
                <p>Fast, minimalist web framework providing RESTful API endpoints.</p>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🍃</span>
                <strong>MongoDB</strong>
                <p>Document-oriented NoSQL database storing the book collection.</p>
              </div>
              <div className="tech-item">
                <span className="tech-icon">📦</span>
                <strong>Mongoose</strong>
                <p>Object Data Modeling (ODM) library defining schema and data validation.</p>
              </div>
            </div>
          </section>

          <section className="about-section viva-notes-box">
            <h3>🎓 Viva Demonstration Note</h3>
            <p>
              This <code>About.jsx</code> file is intentionally written as a <strong>React Class Component</strong>
              (extending <code>React.Component</code> with a <code>render()</code> method) to contrast with
              the functional components used throughout the rest of the application.
            </p>
          </section>
        </div>
      </div>
    );
  }
}

export default About;
