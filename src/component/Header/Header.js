import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Image from './image/Study title.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
            <img
              src={Image}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand className='text-write fs-3 fw-bold'>STUDY POINT</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link><Link className='text-decoration-none text-white navbar'  to={'/home'}><span className='navbar'>Home</span></Link></Nav.Link>
              <Nav.Link><Link className='text-decoration-none text-white navbar'  to={'/login'}><span className='navbar'>Courses</span></Link></Nav.Link>
              <Nav.Link><Link className='text-decoration-none text-white navbar'  to={'/faq'}><span className='navbar'>FAQ</span></Link></Nav.Link>
              <Nav.Link><Link className='text-decoration-none text-white navbar'  to={'/blog'}><span className='navbar'>Blog</span></Link></Nav.Link>
             
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;