import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import txlogo from '../../assets/txlogo.png';
import '../../styles/Dashboard.css';

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <img src={txlogo} alt="Logo" className="logo" />
          <button className="hamburger" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <aside className={`sidebar-content ${showSidebar ? 'show' : ''}`}>
        <div className="sidebar-info">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="User"
            className="user-icon"
            style={{ width: '60px', margin: '0 auto', display: 'block', marginBottom: '15px' }}
          />
          <h6 className="text-center mb-3">Dashboard</h6>
          <div className="plan-info text-center mb-3">
            <div className="d-flex justify-content-center gap-3 mb-2">
              <div>
                <div>1 Month Plan</div>
                <strong>$000</strong>
              </div>
              <div>
                <div>Days Left</div>
                <strong>28</strong>
              </div>
            </div>
            <Button className="renew-button">Renewal</Button>
          </div>
          <div className="support-section text-center mt-5">
            <div className="mb-2">Help & Support</div>
            <Button className="logout-button">Log Out</Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <Container fluid>
          <Row className="justify-content-center mb-4 mt-5">
            <Col md={8}>
              <div className="card-main">
                <div className="text-center">
                  <div>TODAY TOTAL APPLICATIONS</div>
                  <div className="card-number">16</div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center g-4">
            <Col md={4}>
              <div className="card-secondary brown">
                Interviews Scheduled
              </div>
            </Col>
            <Col md={4}>
              <div className="card-secondary purple">
                Updated Resume & Job Portal File
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default Dashboard;
