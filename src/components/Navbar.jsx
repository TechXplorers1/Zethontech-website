import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/logo.png';
import '../styles/navbar.css';
import ServicesDropdown from './Services';

const CustomNavbar = ({ scrolled }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} alt="TechXplorers Logo" height="40" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>

            <div
              className="nav-link services-popup-wrapper"
              onMouseEnter={() => setShowPopup(true)}
              onMouseLeave={() => setShowPopup(false)}
              style={{ position: 'relative' }}
            >
              <span>Services</span>
              {showPopup && (
                <div style={{ position: 'absolute', top: '100%', left: 0, width: '100vw' }}>
                  <ServicesDropdown />
                </div>
              )}
            </div>

            <Nav.Link href="#industries" className="nav-link">Industries</Nav.Link>
            <Nav.Link href="#about" className="nav-link">About</Nav.Link>
            <Nav.Link href="#careers" className="nav-link">Careers</Nav.Link>
            <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
            <Nav.Link href="#event" className="nav-link">Events</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
