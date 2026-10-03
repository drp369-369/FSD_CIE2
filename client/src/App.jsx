import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Views
import Home from './pages/Home';
import Books from './pages/Books';
import BookDetails from './pages/BookDetails';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import About from './pages/About'; // Academic requirement: Class component

/**
 * App Component (Root Functional Component)
 * 
 * VIVA CONCEPT - CLIENT-SIDE ROUTING:
 * - Uses 'react-router-dom' to manage page navigation without reloading the entire page.
 * - <BrowserRouter> keeps the UI in sync with the browser's URL.
 * - <Routes> and <Route> render the matching page component based on the active path.
 */
function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        {/* Navigation Bar present across all pages */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:id" element={<BookDetails />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/edit-book/:id" element={<EditBook />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Footer present across all pages */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
