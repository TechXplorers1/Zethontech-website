import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import '../styles/AdminDashboard.css';
import txlogo from '../assets/txlogo.png';
import { Table, Button, Form, InputGroup } from "react-bootstrap";

import {
  FaUserCircle,
  FaBars,
  FaArrowLeft,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [clientsDropdownOpen, setClientsDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleClientsDropdown = () => setClientsDropdownOpen(!clientsDropdownOpen);

   const handleLogout = () => {
    // You can also clear any session or token here if needed
    navigate('/'); // ← Redirects to the root or login route
  };

  const goToManagers = () => {
    navigate('/managers');
  };

   const goToClients = () => {
    navigate('/clients');
  };

  
  return (
    <div className="admin-dashboard">
      {/* Header */}
      <div className="admin-header">
        <img src={txlogo} alt="TechXplorers Logo" className="admin-logo" />
      </div>

      {/* Hamburger just below the logo */}
      <div className="hamburger-btn" onClick={toggleSidebar}>
        <FaBars size={24} />
      </div>

      {/* Sidebar */}
      <div className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-close-btn" onClick={toggleSidebar}>
            <FaArrowLeft size={20} />
          </div>
          <FaUserCircle size={50} className="user-icon" />
        </div>

        <ul className="sidebar-menu">
          <li>Dashboard</li>
          <li onClick={toggleClientsDropdown} className="dropdown-toggle">
            <span>Clients</span>
            {clientsDropdownOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
          </li>
          {clientsDropdownOpen && (
            <ul className="sub-menu">
              <li>Registrations</li>
              <li>Active Clients</li>
              <li>Previous Clients</li>
              <li>Rejected Clients</li>
            </ul>
          )}
          <li onClick={goToManagers}>Managers</li>
          <li>Team Leads</li>
          <li>Employees</li>
        </ul>

        <div className="sidebar-footer">
          <p>Help & Support</p>
          <button onClick={handleLogout} className="logout-btn">Log Out</button>
        </div>
      </div>

<div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <InputGroup className="w-50">
          <Form.Control placeholder="Search" />
          <Button variant="info">Search</Button>
        </InputGroup>
        <Button variant="success">+ Add Manager</Button>
      </div>

      <Table striped bordered hover responsive className="text-center align-middle">
        <thead className="table-primary">
          <tr>
            <th>NAME</th>
            <th>MOBILE</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
            <th>PEOPLE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-warning">
            <td>▼ DEMO NAME</td>
            <td>+91 9874561230</td>
            <td>demo@gmail.com</td>
            <td>07072023@Tx123</td>
            <td>
              <Button size="sm" variant="success">Add People</Button>
            </td>
            <td>
              <Button variant="link" className="text-decoration-none">✏️</Button>
              <Button variant="link" className="text-danger text-decoration-none">❌</Button>
            </td>
          </tr>
        </tbody>
      </Table>

      <div className="text-end text-muted">
        <small>1–20 of 70</small>
        <span className="ms-3">‹</span>
        <span className="ms-2">›</span>
      </div>
    </div>


     
    </div>
  );
};

export default AdminDashboard;
