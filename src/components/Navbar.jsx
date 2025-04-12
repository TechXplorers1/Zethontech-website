import React, { useState, useRef, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/logo.png';
import '../styles/navbar.css';
import ServicesDropdown from './Services';
import IndustriesDropdown from './Industry';

const CustomNavbar = ({ scrolled, aboutRef }) => {
  const [showServicesPopup, setShowServicesPopup] = useState(false);
  const [showIndustriesPopup, setShowIndustriesPopup] = useState(false);

  const servicesTimeoutRef = useRef(null);
  const industriesTimeoutRef = useRef(null);
  const servicesRef = useRef(null);
  const industriesRef = useRef(null);

  // --- Services handlers ---
  const handleServicesEnter = () => {
    clearTimeout(servicesTimeoutRef.current);
    setShowServicesPopup(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      if (!servicesRef.current?.matches(':hover')) {
        setShowServicesPopup(false);
      }
    }, 300);
  };

  const handleServicesDropdownLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setShowServicesPopup(false);
    }, 300);
  };

  // --- Industries handlers ---
  const handleIndustriesEnter = () => {
    clearTimeout(industriesTimeoutRef.current);
    setShowIndustriesPopup(true);
  };

  const handleIndustriesLeave = () => {
    industriesTimeoutRef.current = setTimeout(() => {
      if (!industriesRef.current?.matches(':hover')) {
        setShowIndustriesPopup(false);
      }
    }, 300);
  };

  const handleIndustriesDropdownLeave = () => {
    industriesTimeoutRef.current = setTimeout(() => {
      setShowIndustriesPopup(false);
    }, 300);
  };

  const scrollToAbout = () => {
    if (aboutRef?.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(servicesTimeoutRef.current);
      clearTimeout(industriesTimeoutRef.current);
    };
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} alt="TechXplorers Logo" height="40" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>

            {/* Services */}
            <div
              className="nav-link services-popup-wrapper"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <span>Services</span>
              {showServicesPopup && (
                <div
                  className="services-dropdown-container"
                  ref={servicesRef}
                  onMouseEnter={() => clearTimeout(servicesTimeoutRef.current)}
                  onMouseLeave={handleServicesDropdownLeave}
                >
                  <ServicesDropdown />
                </div>
              )}
            </div>

            {/* Industries */}
            <div
              className="nav-link industries-popup-wrapper"
              onMouseEnter={handleIndustriesEnter}
              onMouseLeave={handleIndustriesLeave}
            >
              <span>Industries</span>
              {showIndustriesPopup && (
                <div
                  className="industries-dropdown-container"
                  ref={industriesRef}
                  onMouseEnter={() => clearTimeout(industriesTimeoutRef.current)}
                  onMouseLeave={handleIndustriesDropdownLeave}
                >
                  <IndustriesDropdown />
                </div>
              )}
            </div>

            <Nav.Link className="nav-link" onClick={scrollToAbout}>About</Nav.Link>
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
