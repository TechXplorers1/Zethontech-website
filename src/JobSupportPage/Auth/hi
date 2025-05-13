import React, { useState } from 'react';
import { Container, Row, Col, Table, Button, Form, InputGroup, Modal, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminDashboard.css';
import txlogo from '../assets/txlogo.png';
import {
  FaUserCircle,
  FaBars,
  FaArrowLeft,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';

const dummyPeople = [
  { email: 'demo@gmail.com', role: 'Team lead' },
  { email: 'demo1@gmail.com', role: 'Employee' },
  { email: 'demo2@gmail.com', role: 'Employee' }
];

const ManagerData = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [clientsDropdownOpen, setClientsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [newManager, setNewManager] = useState({ name: '', mobile: '', email: '', password: '' });
  const [managers, setManagers] = useState([]);

const [isEditing, setIsEditing] = useState(false);

  const [assignModalOpen, setAssignModalOpen] = useState(false);
  const [selectedManagerIndex, setSelectedManagerIndex] = useState(null);
  const [selectedPeople, setSelectedPeople] = useState([]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleClientsDropdown = () => setClientsDropdownOpen(!clientsDropdownOpen);

  const handleLogout = () => navigate('/');
  const goToManagers = () => navigate('/managers');
  const goToClients = () => navigate('/clients');

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setNewManager({ name: '', mobile: '', email: '', password: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewManager((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddManager = () => {
    if (!newManager.name || !newManager.mobile || !newManager.email || !newManager.password) {
      alert('Please fill all fields');
      return;
    }
    if (isEditing) {
      const updatedManagers = [...managers];
      updatedManagers[currentManagerIndex] = newManager;
      setManagers(updatedManagers);
    } else {
    setManagers([...managers, { ...newManager, assignedPeople: [] }]);
    }
    handleCloseModal();
  };


  

  const openAssignModal = (index) => {
    setSelectedManagerIndex(index);
    setSelectedPeople([]);
    setAssignModalOpen(true);
  };

  const handleAssignDone = () => {
    const updatedManagers = [...managers];
    updatedManagers[selectedManagerIndex].assignedPeople = selectedPeople;
    setManagers(updatedManagers);
    setAssignModalOpen(false);
  };

  const handlePersonToggle = (email) => {
    setSelectedPeople((prev) =>
      prev.includes(email) ? prev.filter((e) => e !== email) : [...prev, email]
    );
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <img src={txlogo} alt="TechXplorers Logo" className="admin-logo" />
      </div>

      <div className="hamburger-btn" onClick={toggleSidebar}>
        <FaBars size={24} />
      </div>

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
          <Button variant="success" onClick={handleShowModal}>+ Add Manager</Button>
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
            {managers.map((mgr, idx) => (
              <tr key={idx} className="table-warning">
                <td>{mgr.name}</td>
                <td>{mgr.mobile}</td>
                <td>{mgr.email}</td>
                <td>{mgr.password}</td>
                <td>
                  <Button size="sm" variant="success" onClick={() => openAssignModal(idx)}>
                    Add People ({mgr.assignedPeople?.length || 0})
                  </Button>
                </td>
                <td>
                  <Button
                    variant="link"
                    className="text-decoration-none"
                    onClick={() => {
                      setIsEditing(true);
                      setCurrentManagerIndex(index);
                      setNewManager(manager);
                      setShowModal(true);
                    }}
                  >
                    ✏️
                  </Button>
                  <Button variant="link" className="text-danger text-decoration-none">❌</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="text-end text-muted">
          <small>1–20 of 70</small>
          <span className="ms-3">‹</span>
          <span className="ms-2">›</span>
        </div>
      </div>

      {/* Modal: Add Manager */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Manager</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" value={newManager.name} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control name="mobile" value={newManager.mobile} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" value={newManager.email} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" value={newManager.password} onChange={handleInputChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          <Button variant="primary" onClick={handleAddManager}>Submit</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal: Assign People */}
      <Modal show={assignModalOpen} onHide={() => setAssignModalOpen(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Assign People</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Added People</h6>
          {dummyPeople.map((person, index) => (
            <div key={index} className="d-flex justify-content-between align-items-center mb-2">
              <Form.Check
                type="checkbox"
                checked={selectedPeople.includes(person.email)}
                onChange={() => handlePersonToggle(person.email)}
                label={person.email}
              />
              <Dropdown>
                <Dropdown.Toggle size="sm" variant="light">
                  {person.role}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Team lead</Dropdown.Item>
                  <Dropdown.Item>Employee</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleAssignDone}>Done</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManagerData;