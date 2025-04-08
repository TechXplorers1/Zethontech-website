// App.jsx
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './App.css'
import logo from './assets/logo.png' // Add your logo image here

function App() {
  return (

    <div className="hero-section">
      <Navbar bg="transparent" expand="lg" className="navbar-custom px-4 pt-3">
        <Navbar.Brand href="#home">
          <img src={logo} alt="TechXplorers Logo" height="40" />
        </Navbar.Brand>
        <Nav id="navbar" className="mx-auto">
          <Nav.Link href="#home" className="text-black mx-4 nav-link">Home</Nav.Link>
          <Nav.Link href="#about" className="text-black mx-4 nav-link">About</Nav.Link>
          <Nav.Link href="#services" className="text-black mx-4 nav-link">Services</Nav.Link>
          <Nav.Link href="#contact" className="text-black mx-4 nav-link">Contact</Nav.Link>
        </Nav>
      </Navbar>
      <div className="cinematic-text-wrapper">
        <h1 className="cinematic-text">Welcome to Techxplorers private limited</h1>
      </div>

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