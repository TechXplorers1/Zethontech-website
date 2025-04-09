// App.jsx
import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './App.css'
import logo from './assets/logo.png' // Add your logo image here
import rocketCursor from './assets/SpaceRock.png' // Add your image here

function App() {
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
      <Navbar bg="transparent" expand="lg" className="navbar-custom px-4 pt-3 d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#home" className="me-auto">
          <img src={logo} alt="TechXplorers Logo" height="40" />
        </Navbar.Brand>
        <Nav id="navbar" className="d-flex">
          <Nav.Link href="#home" className="text-black nav-link">Home</Nav.Link>
          <Nav.Link href="#about" className="text-black nav-link">About</Nav.Link>
          <Nav.Link href="#services" className="text-black nav-link">Services</Nav.Link>
          <Nav.Link href="#contact" className="text-black nav-link">Contact</Nav.Link>
        </Nav>
      </Navbar>
      <div className="cinematic-text-wrapper">
        <h1 className="cinematic-text">Welcome to Techxplorers private limited</h1>
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

    </div>




  )
}

export default App