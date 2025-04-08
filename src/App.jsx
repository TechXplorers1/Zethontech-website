// App.jsx
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './App.css'
import logo from './assets/logo.png' // Add your logo image here

function App() {
  return (
    <>
    <div className="hero-section">
      <Navbar bg="transparent" expand="lg" className="navbar-custom px-4 pt-3">
        <Navbar.Brand href="#home">
          <img src={logo} alt="TechXplorers Logo" height="40" />
        </Navbar.Brand>
        <Nav id="navbar" className="mx-auto">
          <Nav.Link href="#home" className="text-black mx-2 nav-link">Home</Nav.Link>
          <Nav.Link href="#about" className="text-black mx-2 nav-link">About</Nav.Link>
          <Nav.Link href="#services" className="text-black mx-2 nav-link">Services</Nav.Link>
          <Nav.Link href="#contact" className="text-black mx-2 nav-link">Contact</Nav.Link>
        </Nav>
      </Navbar>
      <div className="cinematic-text-wrapper">
        <h1 className="cinematic-text">Welcome to Techxplorers private limited</h1>
      </div>
    </div>

<div className="content-section">
<Container>
  <h2>About Us</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
  <h2>Services</h2>
  <p>We offer a variety of tech-related services...</p>
  <h2>Contact</h2>
  <p>Reach out via email or phone...</p>
  <h2>About Us</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
  <h2>Services</h2>
  <p>We offer a variety of tech-related services...</p>
  <h2>Contact</h2>
  <p>Reach out via email or phone...</p>
  <h2>About Us</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
  <h2>Services</h2>
  <p>We offer a variety of tech-related services...</p>
  <h2>Contact</h2>
  <p>Reach out via email or phone...</p>
  <h2>About Us</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
  <h2>Services</h2>
  <p>We offer a variety of tech-related services...</p>
  <h2>Contact</h2>
  <p>Reach out via email or phone...</p>
</Container>
</div>
</>

  )
}

export default App