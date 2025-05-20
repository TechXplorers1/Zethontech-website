import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaBars } from 'react-icons/fa';
import txlogo from "../assets/txlogo.png";
import '../styles/TeamLeadDashboard.css';

const TeamLeadDashboard = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const navigate = useNavigate();
    const toggleSidebar = () => setShowSidebar(!showSidebar);

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className="dashboard-container">
            {/* Fixed Logo at Top-Left */}
            <div className="logo-container">
                <img src={txlogo} alt="TechXplorers" className="logo" />
                <h2 className="logo-heading">Team Lead Dashboard</h2>
            </div>

            {/* Hamburger Icon Below Logo */}
            {!showSidebar && (
                <div className="hamburger-container" onClick={toggleSidebar}>
                    <FaBars className="hamburger-icon" />
                </div>
            )}


            {/* Sidebar - Starts below the logo */}
            <div className={`sidebar ${showSidebar ? 'open' : ''}`}>
                <div className="sidebar-close" onClick={toggleSidebar}>
                    <FaArrowLeft size={20} />
                </div>

                 <ul className="sidebar-menu">
          <li>Dashboard</li>
          <li>
            <span>Interview Scheduled</span>
            {/* {clientsDropdownOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />} */}
          </li>
          {/* {clientsDropdownOpen && (
            <ul className="sub-menu">
              <li>Registrations</li>
              <li>Active Clients</li>
              <li>Previous Clients</li>
              <li>Rejected Clients</li>
            </ul>
          )} */}
          <li >Updated Resume</li>
        </ul>

                <div className="support-section">
                    <div>Help & Support</div>
                    <Button variant="info" className="logout-button" onClick={handleLogout}>
                        Log Out
                    </Button>
                </div>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <Container fluid>
                    <Row className="justify-content-center mb-4 mt-5">
                        <Col md={8}>
                            <div className="card-main">
                                <div className="text-center">
                                    <h2 className="text-white">My Assigns</h2>
                                    <div className="card-number text-white">16</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center g-4">
                        <Col md={4}>
                            <div className="card-secondary brown text-center">
                            <h4 className="text-white">Interviews Scheduled</h4>
                            <div className="card-number text-white">5</div>
                             </div>
                        </Col>
                        <Col md={4}>
                            <div className="card-secondary purple text-center">
                            <h4 className="text-white">Updated Resume</h4>
                            <div className="card-number text-white">12</div> </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default TeamLeadDashboard;
