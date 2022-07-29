import React from 'react';
import './Navbar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navbars = () => {
    return (
       <Navbar bg="light" expand="lg" className='navbar'>
      <Container fluid>
        <Navbar.Brand href="#">ATGWORLD</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="d-flex justify-content-evenly">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form >
            <Form.Control
              type="search"
              placeholder="Search for your favorite groups in ATG"
              className="me-2 searchBar"
              aria-label="Search"
            />
           
          </Form>
          <p className='createText'>Create Account <span style={{color:"#2F6CE5"}}>Its Free</span></p>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    );
};

export default Navbars;