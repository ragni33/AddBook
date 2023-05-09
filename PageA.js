import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from 'react-bootstrap';


function PageA({ books, deleteBook }) {
  return (
    <div style={{backgroundColor: "lightpink", height: '500px', paddingTop: "10%"}}>
      <h1 style={{color: 'blue', textAlign:"center"}}>Welcome to PageA</h1>
      <h1 className='booklist'>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.title}</Link>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <Button href="/book/new" className='center-btn'>Add a New Book!</Button>    
    </div>
  );
}

export default PageA;
