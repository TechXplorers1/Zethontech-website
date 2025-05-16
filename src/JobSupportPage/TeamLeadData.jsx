import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/TeamLeadData.css';
import txlogo from '../assets/txlogo.png';
import { Table, Button, Form, InputGroup, Dropdown } from 'react-bootstrap';
import {
  FaUserCircle,
  FaBars,
  FaArrowLeft,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';



const TeamLeadData = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [clientsDropdownOpen, setClientsDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [currentTeamLeadIndex, setCurrentTeamLeadIndex] = useState(null);
  const [newTeamLead, setNewTeamLead] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    role: 'Team Lead'
  });
  const [teamLeads, setTeamLeads] = useState([
      { name: 'siva',mobile:'+91 9874561230', email: 'siva@gmail.com', role: 'Team Lead' },
      { name: 'arjun',mobile:'+91 9874561230', email: 'arjun@gmail.com', role: 'Team Lead' },
      { name: 'satish',mobile:'+91 9874561230', email: 'satish@gmail.com', role: 'Team Lead' },

  ]);

  const [assignModalOpen, setAssignModalOpen] = useState(false);
  const [selectedTeamLeadIndex, setSelectedTeamLeadIndex] = useState(null);
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
    setCurrentTeamLeadIndex(null);
    setNewTeamLead({ name: '', mobile: '', email: '', password: '' ,role: 'Team Lead' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTeamLead((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTeamLead = () => {
    const { name, mobile, email, password } = newTeamLead;
    if (!name || !mobile || !email || !password) {
      alert('Please fill all fields');
      return;
    }

    if (isEditing) {
      const updatedTeamLeads = [...teamLeads];
      updatedTeamLeads[currentTeamLeadIndex] = newTeamLead;
      setTeamLeads(updatedTeamLeads);
    } else {
      setTeamLeads([...teamLeads, { ...newTeamLead, people: [] }]);
    }

    handleCloseModal();
  };

  const openAssignModal = (index) => {
    setSelectedTeamLeadIndex(index);
    setSelectedPeople([]);
    setAssignModalOpen(true);
  };

  const handleAssignDone = () => {
    const updatedTeamLeads = [...teamLeads];
    updatedTeamLeads[selectedTeamLeadIndex].assignedPeople = selectedPeople;
    setTeamLeads(updatedTeamLeads);
    setAssignModalOpen(false);
  };

  const handlePersonToggle = (email) => {
    setSelectedPeople((prev) =>
      prev.includes(email) ? prev.filter((e) => e !== email) : [...prev, email]
    );
  };

  return (
    <div className="teamlead-dashboard">
      <div className="teamlead-header">
        <img src={txlogo} alt="TechXplorers Logo" className="teamlead-logo" />
                <h2 className="logo-heading">TeamLead Data</h2>

      </div>

      <div className="hamburger-btn" onClick={toggleSidebar}>
        <FaBars size={24} />
      </div>

      <div className={`teamlead-sidebar ${sidebarOpen ? 'open' : ''}`}>
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

          <Button variant="success" onClick={handleShowModal}>+ Add TeamLead</Button>
        </div>

        <Table striped bordered hover responsive className="text-center align-middle">
          <thead className="table-primary">
            <tr>
              <th>NAME</th>
              <th>MOBILE</th>
              <th>EMAIL</th>
              <th>PASSWORD</th>
              <th>ROLE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {teamLeads
              .filter((teamlead) =>
                [teamlead.name, teamlead.email, teamlead.mobile].some((field) =>
                  field.toLowerCase().includes(searchTerm.toLowerCase())
                )
              ).map((teamlead, index) => (
                <tr key={index} className="table-warning">
                  <td>{teamlead.name}</td>
                  <td>{teamlead.mobile}</td>
                  <td>{teamlead.email}</td>
                  <td>{teamlead.password}</td>
                  <td>{teamlead.role}</td>
                  <td>
                    <Button
                      variant="link"
                      className="text-decoration-none"
                      onClick={() => {
                        setIsEditing(true);
                        setCurrentTeamLeadIndex(index);
                        setNewTeamLead(teamlead);
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

      {/* Modal for Add/Edit TeamLead */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Edit TeamLead' : 'Add TeamLead'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={newTeamLead.name} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" name="mobile" value={newTeamLead.mobile} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={newTeamLead.email} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={newTeamLead.password} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
  <Form.Label>Role</Form.Label>
  <Form.Control
    type="text"
    name="role"
    value={newTeamLead.role}
    readOnly
  />
</Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
          <Button variant="primary" onClick={handleAddTeamLead}>
            {isEditing ? 'Update TeamLead' : 'Add TeamLead'}
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  );
};

export default TeamLeadData;


// Add Manager,Add people and edit options are working