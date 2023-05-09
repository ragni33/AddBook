import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import '../App.css';
import { Form, Button, FormGroup, FormLabel, FormControl} from 'react-bootstrap';





function PageB({ books, updateBook, deleteBook }) {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [iban, setIban] = useState('');
  const [price, setPrice] = useState('');
  const history = useHistory();



  useEffect(() => {
    const selectedBook = books.find((b) => b.id === Number(id));
    setBook(selectedBook || {});
  }, [books, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = {
      ...book,
      title,
      author,
      publicationDate,
      iban,
      price,
    };
    updateBook(updatedBook);
    history.push('/book/new');
  };

  const handleDelete = () => {
    deleteBook(book.id);
    history.push('/');
  };
  

  
  return (

<div style={{backgroundColor: "lightpink", height: '100%', paddingTop: "5%", paddingBottom: "1%"}}>
<h1 style={{color: 'blue', textAlign:"center"}}>Welcome to PageB</h1>
<h1 className='booklist'>Book Details</h1>
      

<Form onSubmit={handleSubmit}>
      
      <Form.Group controlId="title">
        <Form.Label>Book Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
        <Form.Group controlId="title">
        <Form.Label>Author Name</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicDate">
  <Form.Label>Date of Publishment</Form.Label>
  <Form.Control type="date" placeholder="Enter date" />
</Form.Group>

<FormGroup>
        <FormLabel>IBAN</FormLabel>
        <FormControl type="text" placeholder="Enter IBAN" />
      </FormGroup>


      <Form.Group controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

      </Form.Group>
         
    </Form>
    <div style={{textAlign:"center" , margin: "1%", paddingLeft: "1%"}}>

      <Button type="submit" onClick={handleSubmit} variant="primary" size="lg">Update</Button>
      <br />
      
      <br />

      <Button type="button" onClick={handleDelete} size="lg">Delete</Button>

   </div>
    </div>
  );
}


     
  





export default PageB;
