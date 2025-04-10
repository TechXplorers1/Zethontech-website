import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/logo.png';
import '../styles/navbar.css';
import Services from './Services';

const CustomNavbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`navbar-custom px-4 pt-3 ${scrolled ? 'scrolled' : ''}`}
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
            >
              <span>Services</span>
              {showPopup && <Services />}
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