import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PageA from "./components/PageA";
import PageB from "./components/PageB";

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const updateBook = (book) => {
    setBooks(books.map((b) => (b.id === book.id ? book : b)));
  };

  const deleteBook = (bookId) => {
    setBooks(books.filter((b) => b.id !== bookId));
  };

  return (
    <Router>
      <Route
        path="/"
        exact
        render={(props) => (
          <PageA {...props} books={books} deleteBook={deleteBook} />
        )}
      />
      <Route
        path="/book/:id"
        render={(props) => (
          <PageB
            {...props}
            books={books}
            updateBook={updateBook}
            deleteBook={deleteBook}
          />
        )}
      />
    </Router>
  );
}

export default App;
