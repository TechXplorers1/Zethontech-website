import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/EmployeeData.css';
import txlogo from '../assets/txlogo.png';
import { Table, Button, Form, InputGroup, Dropdown } from 'react-bootstrap';
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


const EmployeeData = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [clientsDropdownOpen, setClientsDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [currentManagerIndex, setCurrentManagerIndex] = useState(null);
  const [newManager, setNewManager] = useState({
    name: '',
    mobile: '',
    email: '',
    password: ''
  });
  const [managers, setManagers] = useState([
{
      name: "Siva",
      mobile: "+91 9874561230",
      email: "siva@gmail.com",
      password: "07072023@Tx123",
    },
    {
      name: "Arjun",
      mobile: "+91 7894561230",
      email: "arjun@gmail.com",
      password: "07072023@TxSm",
    },

  ]);

  const [assignModalOpen, setAssignModalOpen] = useState(false);
  const [selectedManagerIndex, setSelectedManagerIndex] = useState(null);
  const [selectedPeople, setSelectedPeople] = useState([]);

  const navigate = useNavigate();
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleClientsDropdown = () => setClientsDropdownOpen(!clientsDropdownOpen);

  const handleLogout = () => {
    navigate('/');
  };

  const goToManagers = () => navigate('/managers');
  const goToClients = () => navigate('/clients');
  const goToEmployee = () => navigate('/employee');

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setIsEditing(false);
    setCurrentManagerIndex(null);
    setNewManager({ name: '', mobile: '', email: '', password: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewManager((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddManager = () => {
    const { name, mobile, email, password } = newManager;
    if (!name || !mobile || !email || !password) {
      alert('Please fill all fields');
      return;
    }

    if (isEditing) {
      const updatedManagers = [...managers];
      updatedManagers[currentManagerIndex] = newManager;
      setManagers(updatedManagers);
    } else {
      setManagers([...managers, { ...newManager, people: [] }]);
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
                <h2 className="logo-heading">Employee Dashboard</h2>

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
            <Form.Control
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="info">Search</Button>
          </InputGroup>

          <Button variant="success" onClick={handleShowModal}>+ Add Employee</Button>
        </div>

        <Table striped bordered hover responsive className="text-center align-middle">
          <thead className="table-primary">
            <tr>
              <th>NAME</th>
              <th>MOBILE</th>
              <th>EMAIL</th>
              <th>PASSWORD</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {managers
              .filter((manager) =>
                [manager.name, manager.email, manager.mobile].some((field) =>
                  field.toLowerCase().includes(searchTerm.toLowerCase())
                )
              ).map((manager, index) => (
                <tr key={index} className="table-warning">
                  <td>{manager.name}</td>
                  <td>{manager.mobile}</td>
                  <td>{manager.email}</td>
                  <td>{manager.password}</td>
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
      </div>

      {/* Modal for Add/Edit Manager */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Edit Manager' : 'Add Manager'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={newManager.name} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" name="mobile" value={newManager.mobile} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={newManager.email} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={newManager.password} onChange={handleInputChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
          <Button variant="primary" onClick={handleAddManager}>
            {isEditing ? 'Update Manager' : 'Add Manager'}
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  );
};

export default EmployeeData;


// Add Manager,Add people and edit options are working