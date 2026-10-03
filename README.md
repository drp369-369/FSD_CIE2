# BookEase – Book Management System

**Course:** CS3301 Full Stack Development (CIE-2 React Mini Project)  
**Project Title:** BookEase – Book Management System  
**Category:** Full Stack Web Application (MERN Stack Architecture)  

---

## 1. Project Title
**BookEase – Book Management System**

BookEase is a web-based book management system that allows users to view, search, filter, add, edit, view details, and delete books through a responsive React interface connected to an Express.js REST API and MongoDB database.

---

## 2. Problem Statement
Managing a physical or personal library catalog manually often leads to disorganized records, difficulty in finding specific titles or authors quickly, and challenges in keeping track of inventory availability and pricing. Traditional desktop or paper-based systems lack instant search capabilities, dynamic filtering, and seamless multi-device accessibility.

---

## 3. Objective
The primary objective of BookEase is to build a clean, modern, beginner-friendly Full Stack Book Management System that demonstrates core React frontend principles and Express/MongoDB backend integration for academic evaluation. The project aims to:
- Provide an intuitive single-page interface for complete book lifecycle management (CRUD).
- Demonstrate essential React concepts: functional components, class component, props, hooks (`useState`, `useEffect`), event handling, and client-side routing.
- Integrate a decoupled Node.js/Express REST API communicating with a MongoDB database via Mongoose.
- Incorporate two original student modifications beyond tutorial reference material: real-time title/author search and dynamic category filtering.

---

## 4. Features
- **Book Catalog Display:** Responsive grid layout showcasing books with category, author, price, year, and stock availability status.
- **Full CRUD Operations:** Seamless creation, viewing, updating, and deletion of book records.
- **Client-Side Routing:** Page transitions without browser reload using React Router DOM.
- **Real-Time Search:** Instant title and author searching across the collection.
- **Dynamic Category Filtering:** Dynamic category pills generated directly from active books.
- **Live Book Statistics:** Overview metrics displaying total books, in-stock count, and category count.
- **Controlled Forms:** Form handling with client-side validation and non-negative constraints.
- **Interactive UI Feedback:** Distinct loading states, error states, and empty collection states.

---

## 5. Technologies Used
- **React.js (v19):** UI component library (Functional & Class components)
- **Vite:** Next-generation frontend build tool and local dev server
- **React Router DOM (v7):** Client-side declarative routing and URL parameter parsing
- **Express.js (v4):** Backend web framework for building RESTful API endpoints
- **Node.js:** JavaScript runtime environment
- **MongoDB:** NoSQL document database (Database name: `bookease`)
- **Mongoose (v8):** Object Data Modeling (ODM) library for MongoDB schema definition and validation
- **JavaScript (ES6+):** Modern asynchronous syntax (`async`/`await`, arrow functions, destructuring)
- **HTML5 & Plain CSS:** Clean, responsive styling with CSS variables and media queries (No Tailwind, no external UI libraries)
- **Native Browser Fetch API:** HTTP communication without external request libraries (No Axios)

---

## 6. Selected YouTube Tutorial
- **Tutorial Title:** “MERN Stack Tutorial – Book Store Project”
- **Creator / Channel:** freeCodeCamp.org
- **Video Reference Link:** [https://www.youtube.com/watch?v=-42K44A1oMA](https://www.youtube.com/watch?v=-42K44A1oMA)

---

## 7. Project Structure
```text
bookease/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx           # Top navigation bar with active NavLink routing
│   │   │   ├── Footer.jsx           # Reusable footer component
│   │   │   ├── BookStats.jsx        # Derived statistics metric cards
│   │   │   ├── SearchBar.jsx        # Real-time search input with clear button
│   │   │   ├── CategoryFilter.jsx   # Dynamic category filter pills
│   │   │   ├── BookList.jsx         # Parent list container rendering BookCard items
│   │   │   ├── BookCard.jsx         # Child component rendering individual book cards
│   │   │   └── BookForm.jsx         # Controlled form for Add & Edit operations
│   │   ├── pages/
│   │   │   ├── Home.jsx             # Landing page with hero banner & action buttons
│   │   │   ├── Books.jsx            # Catalog page with stats, search, filter & list
│   │   │   ├── BookDetails.jsx      # Dynamic details view by book ID
│   │   │   ├── AddBook.jsx          # Add new book view with BookForm
│   │   │   ├── EditBook.jsx         # Edit existing book view with pre-populated form
│   │   │   └── About.jsx            # Academic class component displaying project details
│   │   ├── services/
│   │   │   └── api.js               # Centralized HTTP service using browser Fetch API
│   │   ├── App.jsx                  # Root component with client-side BrowserRouter
│   │   ├── main.jsx                 # Vite application entry point
│   │   └── index.css                # Plain modern stylesheet with CSS variables & media queries
│   ├── index.html                   # HTML template with Plus Jakarta Sans typography
│   ├── vite.config.js               # Vite configuration
│   └── package.json                 # Frontend dependencies
│
├── server/
│   ├── models/
│   │   └── Book.js                  # Mongoose schema and model definition
│   ├── routes/
│   │   └── bookRoutes.js            # Express router mapping endpoints to controller
│   ├── controllers/
│   │   └── bookController.js        # Controller functions for CRUD operations
│   ├── .env                         # Environment variables (PORT, MONGO_URI)
│   ├── seed.js                      # Standalone database seed script (5 realistic books)
│   ├── server.js                    # Express application entry point & MongoDB connection
│   └── package.json                 # Backend dependencies
│
└── README.md                        # Comprehensive project documentation
```

---

## 8. Component Structure

### Pages
- **Home (`Home.jsx`):** Landing page with hero banner, description, and direct routing buttons.
- **Books (`Books.jsx`):** Main catalog view housing statistics, search, category filter, and book grid.
- **BookDetails (`BookDetails.jsx`):** Detailed overview showing all metadata for a selected book.
- **AddBook (`AddBook.jsx`):** View hosting the creation form to register new books.
- **EditBook (`EditBook.jsx`):** View hosting the pre-populated edit form to update book records.
- **About (`About.jsx`):** Academic class component explaining project scope and technologies.

### Reusable Components
- **Navbar (`Navbar.jsx`):** Header navigation with active page highlighting via `NavLink`.
- **Footer (`Footer.jsx`):** Page footer displaying course and copyright details.
- **BookStats (`BookStats.jsx`):** Overview metric cards displaying total, available, and category counts.
- **SearchBar (`SearchBar.jsx`):** Search input with real-time feedback and inline clear button.
- **CategoryFilter (`CategoryFilter.jsx`):** Pill-based filter dynamically derived from available categories.
- **BookForm (`BookForm.jsx`):** Reusable controlled form used by both Add and Edit pages.
- **BookList (`BookList.jsx`):** Parent list component mapping over the books collection.
- **BookCard (`BookCard.jsx`):** Child card component displaying book metadata and action buttons.

### Component Data Flow
```text
Books.jsx (Page Component - State Owner)
  │
  ├──► BookStats.jsx (Props: totalBooks, availableBooks, categoryCount)
  ├──► SearchBar.jsx (Props: searchTerm, onSearchChange, onClear)
  ├──► CategoryFilter.jsx (Props: categories, selectedCategory, onSelectCategory)
  │
  ▼ [props: books={filteredBooks}, onDelete={handleDeleteBook}]
BookList.jsx (Parent Component - List Rendering)
  │
  ▼ [props: book={book}, onDelete={onDelete}]
BookCard.jsx (Child Component - Individual Item Display & Actions)
```

---

## 9. React Concepts Demonstrated

| React Concept | Implementation in BookEase |
| :--- | :--- |
| **Functional Components** | Used for all primary pages (`Home`, `Books`, `BookDetails`, `AddBook`, `EditBook`) and components (`Navbar`, `Footer`, `BookStats`, `SearchBar`, `CategoryFilter`, `BookForm`, `BookList`, `BookCard`). |
| **Class Component** | Exclusively demonstrated in [client/src/pages/About.jsx](file:///c:/Users/itzpa/Documents/FSD_CIE2/client/src/pages/About.jsx) using `class About extends React.Component` with a `render()` method and without hooks. |
| **Props** | Passing book data, statistics counts, active categories, and callback functions across components. |
| **Parent-Child Communication** | Parent passing props down (`Books` ➔ `BookList` ➔ `BookCard`); child invoking parent callbacks (`onDelete`, `onSearchChange`, `onSelectCategory`, `onSubmit`). |
| **useState Hook** | Managing state for books array, search term, selected category, loading/error states, and form fields. |
| **useEffect Hook** | Fetching books list on `Books` mount (`[]`), fetching single book on `BookDetails`/`EditBook` (`[id]`), and pre-populating form inputs (`[book]`). |
| **Event Handling** | Handling user interactions via `onChange` (typing), `onSubmit` (form submission), and `onClick` (navigation, delete confirmation, clear filters). |
| **Controlled Components** | Form inputs bound directly to component state (`value={formData.title}`, `onChange={handleChange}`). |
| **Form Handling** | Validation checks, non-negative numerical validation, and submission prevention via `e.preventDefault()`. |
| **Client-Side Routing** | `react-router-dom` configuration with `<BrowserRouter>`, `<Routes>`, `<Route>`, `<NavLink>`, `<Link>`, `useNavigate()`, and `useParams()`. |

### Client-Side Routes
- `/` ➔ `Home.jsx`
- `/books` ➔ `Books.jsx`
- `/books/:id` ➔ `BookDetails.jsx`
- `/add-book` ➔ `AddBook.jsx`
- `/edit-book/:id` ➔ `EditBook.jsx`
- `/about` ➔ `About.jsx`

---

## 10. Backend / REST API
The backend is built with **Node.js** and **Express.js** structured into models, routes, and controllers:

| HTTP Method | Route | Description | Success Status | Error Status |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/api/health` | Service health status check | `200 OK` | — |
| **GET** | `/api/books` | Retrieve all books (sorted latest first) | `200 OK` | `500 Server Error` |
| **GET** | `/api/books/:id` | Retrieve single book by MongoDB ObjectId | `200 OK` | `404 Not Found` / `500 Server Error` |
| **POST** | `/api/books` | Create a new book record | `201 Created` | `400 Bad Request` / `500 Server Error` |
| **PUT** | `/api/books/:id` | Update an existing book record by ID | `200 OK` | `404 Not Found` / `500 Server Error` |
| **DELETE** | `/api/books/:id` | Delete a book record by ID | `200 OK` | `404 Not Found` / `500 Server Error` |

---

## 11. Database
- **Database System:** MongoDB (Database Name: `bookease`)
- **ODM Library:** Mongoose
- **Mongoose Schema & Model Fields:**
  - `title` (String, required, trimmed)
  - `author` (String, required, trimmed)
  - `category` (String, required, trimmed)
  - `price` (Number, required, minimum: 0)
  - `publishedYear` (Number, required)
  - `description` (String, optional, default: `''`)
  - `available` (Boolean, default: `true`)
  - `timestamps` (`createdAt`, `updatedAt` automatically managed by Mongoose)

---

## 12. Student Modifications (Beyond Base Tutorial)

The project includes **TWO official original modifications** specifically developed beyond the tutorial scope:

### 🌟 Official Modification 1: Real-Time Search Functionality
- **Implementation:** [client/src/components/SearchBar.jsx](file:///c:/Users/itzpa/Documents/FSD_CIE2/client/src/components/SearchBar.jsx) & [client/src/pages/Books.jsx](file:///c:/Users/itzpa/Documents/FSD_CIE2/client/src/pages/Books.jsx)
- **Concept:** Fast, client-side, case-insensitive search by **Book Title** or **Author Name**.
- **State Management:** Controlled by `useState(searchTerm)`.
- **User Experience:** Immediate feedback as user types, with an inline clear (`✕`) button.

### 🌟 Official Modification 2: Dynamic Category Filtering
- **Implementation:** [client/src/components/CategoryFilter.jsx](file:///c:/Users/itzpa/Documents/FSD_CIE2/client/src/components/CategoryFilter.jsx) & [client/src/pages/Books.jsx](file:///c:/Users/itzpa/Documents/FSD_CIE2/client/src/pages/Books.jsx)
- **Concept:** Filter pill buttons dynamically generated from active books in the database using JavaScript `Set`:
  ```javascript
  const categories = ['All', ...new Set(books.map((b) => b.category).filter(Boolean))];
  ```
- **State Management:** Controlled by `useState(selectedCategory)`.
- **Combined Filtering:** Search and category filter work together seamlessly to derive `filteredBooks` without mutating master state:
  ```javascript
  const filteredBooks = books.filter((book) => {
    const query = searchTerm.toLowerCase().trim();
    const titleMatch = book.title?.toLowerCase().includes(query);
    const authorMatch = book.author?.toLowerCase().includes(query);
    const matchesSearch = query === '' || titleMatch || authorMatch;
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  ```
- **Filter Reset & Count:** Includes a live result count indicator (e.g. `2 books found (filtered from 5 total)`) and a one-click "Clear Filters" button.

> **Note on Book Statistics (`BookStats.jsx`):**  
> The statistics cards component (Total Books, Available Books, Category Count) is included as an **additional UI enhancement**, not as one of the two official student modifications.

---

## 13. Responsive Design
The entire application is styled using **clean plain CSS** without external UI frameworks or Tailwind CSS:
- **Desktop (1024px+):** Multi-column grid for statistics, horizontal layout for filters, and 3-to-4-column card grid.
- **Tablet (<= 768px):** Collapsible navigation menu, stacked form input rows, and 2-column card layouts.
- **Mobile (<= 480px):** Single-column stacked statistics cards, full-width touch-friendly buttons, and vertical action button layouts.

---

## 14. CRUD Operations

```text
       ┌──────────┐
       │ MongoDB  │
       └────┬─────┘
            │ Mongoose ODM
       ┌────┴─────┐
       │ Express  │ (Port 5000)
       └────┬─────┘
            │ REST API (JSON)
       ┌────┴─────┐
       │ React UI │ (Port 5173 via Fetch API)
       └──────────┘
```

1. **Create (POST):** User fills [BookForm](file:///c:/Users/itzpa/Documents/FSD_CIE2/client/src/components/BookForm.jsx), client validates fields, sends `POST /api/books`, and redirects to `/books`.
2. **Read (GET):** Catalog fetches all books via `GET /api/books`; details page fetches specific book via `GET /api/books/:id`.
3. **Update (PUT):** Navigating to `/edit-book/:id` pre-populates [BookForm](file:///c:/Users/itzpa/Documents/FSD_CIE2/client/src/components/BookForm.jsx) with current values, sending `PUT /api/books/:id` on submit.
4. **Delete (DELETE):** Clicking "Delete" on [BookCard](file:///c:/Users/itzpa/Documents/FSD_CIE2/client/src/components/BookCard.jsx) prompts a `window.confirm()` dialog, dispatches `DELETE /api/books/:id`, and filters the book from state.

---

## 15. How to Run the Project

### Prerequisites
- Node.js installed (v18+ recommended)
- MongoDB installed and running locally on default port `27017` (or a MongoDB Atlas connection string)

### 1. Start the Backend Server
```bash
cd server
npm install
npm run dev
```
*(Runs with Node `--watch` server on port 5000)*
- Server Base URL: `http://localhost:5000`
- API Health Endpoint: `http://localhost:5000/api/health`
- Books Endpoint: `http://localhost:5000/api/books`

### 2. (Optional) Seed Sample Books
```bash
cd server
npm run seed
```
*(Inserts 5 realistic sample books: The Alchemist, Clean Code, Atomic Habits, The Pragmatic Programmer, Introduction to Algorithms)*

### 3. Start the Frontend Client
```bash
cd client
npm install
npm run dev
```
*(Runs Vite development server on port 5173)*
- Frontend Application URL: `http://localhost:5173`

---

## 16. Screenshots

*Screenshots to be attached for final CIE-2 submission:*

- **Home Page:**  
  `[Screenshot Placeholder: Home Page Hero Section & Actions]`
- **Books Page (Catalog, Stats, Search, Filters):**  
  `[Screenshot Placeholder: Books Page with BookStats, SearchBar, CategoryFilter, and BookCard Grid]`
- **Book Details Page:**  
  `[Screenshot Placeholder: Dedicated Book Details View with Metadata & Actions]`
- **Add Book Form:**  
  `[Screenshot Placeholder: Add Book Form with Input Validation]`
- **Edit Book Form:**  
  `[Screenshot Placeholder: Edit Book Form Pre-Populated with Existing Data]`
- **About Page (Class Component):**  
  `[Screenshot Placeholder: About Page Class Component & Viva Notes]`
- **Responsive Mobile View:**  
  `[Screenshot Placeholder: Responsive Layout on Mobile Viewport]`

---

## 17. Challenges Faced
1. **Script Execution Policies in Windows PowerShell:**  
   Encountered Windows ExecutionPolicy restrictions when launching `npm` scripts directly. Resolved by using `npm.cmd` directly in the shell environment.
2. **Form Pre-Population for Asynchronous Data:**  
   When navigating to the Edit Book page, the book data arrives asynchronously. Solved by synchronizing the controlled `BookForm` state using a `useEffect` hook listening to changes on the `book` prop.
3. **Synchronized Combined Filtering without State Mutation:**  
   Ensuring that searching and category filtering operate simultaneously without mutating the master `books` array. Solved by computing `filteredBooks` as a derived array on every render cycle.
4. **Preserving Class Component Academic Requirement:**  
   Structuring `About.jsx` as a standard class component (`class About extends React.Component`) without using React Hooks, providing an explicit contrast to functional components for viva examination.

---

## 18. Conclusion
BookEase successfully delivers a comprehensive, responsive, and beginner-friendly full stack web application adhering to all academic CIE-2 guidelines. It bridges standard React frontend patterns with a decoupled Express.js REST API and MongoDB storage. With clear parent-child component communication, full CRUD capability, real-time search, dynamic category filtering, and live statistics, the codebase is clean, well-commented, and easily explainable during a viva voce.

---

## 19. GitHub Repository Link
[https://github.com/drp369-369/FSD_CIE2](https://github.com/drp369-369/FSD_CIE2)

---

## 20. Tutorial Link
- **Selected Reference Tutorial:** [https://www.youtube.com/watch?v=-42K44A1oMA](https://www.youtube.com/watch?v=-42K44A1oMA)  
  *(“MERN Stack Tutorial – Book Store Project” by freeCodeCamp.org)*
