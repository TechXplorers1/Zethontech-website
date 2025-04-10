import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import CustomNavbar from './components/Navbar/';
import rocketCursor from './assets/SpaceRock.png';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const contentRef = useRef(null);
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setNavbarScrolled(isScrolled);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>

      <CustomNavbar scrolled={navbarScrolled} />

      <div className="main-content">
        <div className="content-container">
          <div className="welcome-section">
            <h1 className="cinematic-text">Welcome <span>to</span> Techxplorers private limited</h1>
          </div>

          <div className="engineering-section">
            <h2 className="future-heading">EXPLORING THE FUTURE</h2>
            <h3 className="tech-innovation">OF TECH & INNOVATION</h3>
            <div className="action-buttons">
              <button className="cta-button talk-button">LET'S TALK</button>
              <button className="cta-button services-button" onClick={scrollToContent}>EXPLORE SERVICES</button>
            </div>
          </div>
        </div>

        <img
          src={rocketCursor}
          alt="Cursor"
          className="custom-cursor"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`
          }}
        />     
           <div className="content-section" ref={contentRef}>
          <div className="card-container">
            <div className="card-row">
              <div className="info-card">
                <h3>Mobile Application Development</h3>
                <p>Explore cutting-edge technology trends and ideas.</p>
              </div>
              <div className="info-card">
                <h3>Web Application Development</h3>
                <p>Work together with teams across the globe.</p>
              </div>
            </div>
            <div className="card-row">
              <div className="info-card">
                <h3>Digital Marketing</h3>
                <p>Enhance your skills and grow your career with us.</p>
              </div>
              <div className="info-card">
                <h3>IT Talent Supply</h3>
                <p>Explore cutting-edge technology trends and ideas.</p>
              </div>
              <div className="info-card">
                <h3>Job Support & IT Consulting</h3>
                <p>Work together with teams across the globe.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;