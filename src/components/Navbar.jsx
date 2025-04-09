import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="navbar-container">
      <div className="logo">TECH<span className="highlight">X</span>PLORERS</div>
      <ul className="nav-links">
        <li>HOME</li>
        <li>ABOUT</li>
        <li
          className="services-item"
          onMouseEnter={() => setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
        >
          SERVICES
          {showPopup && (
            <div className="services-popup">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="service-box"></div>
              ))}
            </div>
          )}
        </li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
};

export default Navbar;
