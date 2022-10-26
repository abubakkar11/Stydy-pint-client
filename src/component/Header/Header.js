import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import ImageTitle from './image/Study title.png'
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { Button, } from 'react-bootstrap';
import { AiOutlineLogout, AiOutlineUserSwitch , } from 'react-icons/ai';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faMoon , faLightbulb  } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  const [darkmode, setDarkmode] = useState(true)
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to={'/home'}>
            <img
              src={ImageTitle}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Study point logo"
            />
          </Navbar.Brand>
          <Navbar.Brand className='text-write fs-3 fw-bold'>STUDY POINT</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link><Link className='text-decoration-none text-white navbar' to={'/home'}><span className='navbar'>Home</span></Link></Nav.Link>
              <Nav.Link><Link className='text-decoration-none text-white navbar' to={'/courses'}><span className='navbar'>Courses</span></Link></Nav.Link>
              <Nav.Link><Link className='text-decoration-none text-white navbar' to={'/faq'}><span className='navbar'>FAQ</span></Link></Nav.Link>
              <Nav.Link><Link className='text-decoration-none text-white navbar' to={'/blog'}><span className='navbar'>Blog</span></Link></Nav.Link>

            </Nav>
            <Nav className='d-flex justify-content-center align-items-center'>
              {
                <div className='d-md-none '>
                  <LeftSideNav></LeftSideNav>
                </div>
              }
              {
                user?.uid ?
                  <img
                    src={user?.photoURL}
                    width="30"
                    height="30"
                    className="d-inline-block align-top rounded-circle"
                    alt={user.displayName}
                  />
                  :
                  <AiOutlineUserSwitch></AiOutlineUserSwitch>
              }
              <Nav.Link eventKey={2} href="#memes">
                {
                  user?.uid ?
                    user?.displayName
                    :
                    <>
                      <Link to={'/login'}><Button className='me-2' variant="outline-warning">Login</Button></Link>
                      <Link to={'/register'}><Button variant="outline-warning">Register</Button></Link>
                    </>
                }
                {
                  user?.uid ?
                    <AiOutlineLogout onClick={handleLogOut} className='ms-5 fs-4'></AiOutlineLogout>
                    :
                    <div className='d-none'>{user?.displayName}</div>
                }
                {
               darkmode ? <FontAwesomeIcon onClick={() => setDarkmode(!darkmode)} className='ms-5 fs-4' icon = {faLightbulb}></FontAwesomeIcon> 
               :
               <FontAwesomeIcon onClick={() => setDarkmode(!darkmode)} className='ms-5 fs-4' icon ={faMoon}></FontAwesomeIcon>
                }
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;