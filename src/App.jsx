// App.jsx
import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './App.css'
import logo from './assets/logo.png' // Add your logo image here
import rocketCursor from './assets/SpaceRock.png' // Add your image here

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])



  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>

      <Navbar bg="transparent" expand="lg" className="navbar-custom">
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

      <div className="content-container">
        <div className="welcome-section">
          <h1 className="cinematic-text">Welcome <span>to</span> Techxplorers private limited</h1>
        </div>


        {/* Custom Cursor Tracker */}
        <img
          src={rocketCursor}
          alt="Cursor"
          className="custom-cursor"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`
          }}
        />
        <div className="content-section">
          <div className="card-container">
            <div className="card-row">
              <div className="info-card">
                <h3>Innovation</h3>
                <p>Explore cutting-edge technology trends and ideas.</p>
              </div>
              <div className="info-card">
                <h3>Collaboration</h3>
                <p>Work together with teams across the globe.</p>
              </div>
            </div>
            <div className="card-row">
              <div className="info-card">
                <h3>Growth</h3>
                <p>Enhance your skills and grow your career with us.</p>
              </div>
              <div className="info-card">
                <h3>Innovation</h3>
                <p>Explore cutting-edge technology trends and ideas.</p>
              </div>
              <div className="info-card">
                <h3>Collaboration</h3>
                <p>Work together with teams across the globe.</p>
              </div>
            </div>
          </div>
        </div>


        <div className="engineering-section">
          <h2 className="future-heading">EXPLORING THE FUTURE</h2>
          <h3 className="tech-innovation">OF TECH & INNOVATION</h3>
          <div className="action-buttons">
            <button className="cta-button talk-button">LET'S TALK</button>
            <button className="cta-button services-button">EXPLORE SERVICES</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
