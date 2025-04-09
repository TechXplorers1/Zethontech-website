// components/Navbar.jsx
import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/logo.png';
import '../styles/navbar.css';


const CustomNavbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Navbar bg="transparent" expand="lg" className="navbar-custom px-4 pt-3 d-flex justify-content-between align-items-center">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} alt="TechXplorers Logo" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-link">About</Nav.Link>

            {/* Services with popup */}
            <div
              className="nav-link services-popup-wrapper"
              onMouseEnter={() => setShowPopup(true)}
              onMouseLeave={() => setShowPopup(false)}
            >
              <span>Services</span>
              {showPopup && (
                <div className="services-popup">
                  {[...Array(6)].map((_, i) => (
                    <div className="popup-card" key={i}></div>
                  ))}
                </div>
              )}
            </div>

            <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;