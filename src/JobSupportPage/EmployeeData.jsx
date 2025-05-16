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




const EmployeeData = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [clientsDropdownOpen, setClientsDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [currentEmployeeIndex, setCurrentEmployeeIndex] = useState(null);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    role: ''
  });
  const [employees, setEmployees] = useState([
      { name: 'ram',mobile:'+91 9874561230', email: 'ramemployee@gmail.com',password: '07072023@TxRm', role: 'Employee' },
      { name: 'gopi',mobile:'+91 9874561230', email: 'gopiemployee@gmail.com',password: '07072023@TxRm', role: 'Employee' },
      { name: 'arun',mobile:'+91 9874561230', email: 'arunemployee@gmail.com',password: '07072023@TxRm', role: 'Employee' },
      { name: 'madhu',mobile:'+91 9874561230', email: 'madhuemployee@gmail.com',password: '07072023@TxRm', role: 'Employee' },
      { name: 'poorna',mobile:'+91 9874561230', email: 'poornaemployee@gmail.com',password: '07072023@TxRm', role: 'Employee' },


  ]);

  const [assignModalOpen, setAssignModalOpen] = useState(false);
  const [selectedEmployeeIndex, setSelectedEmployeeIndex] = useState(null);
  const [selectedPeople, setSelectedPeople] = useState([]);

  const navigate = useNavigate();
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleClientsDropdown = () => setClientsDropdownOpen(!clientsDropdownOpen);

  const handleLogout = () => {
    navigate('/');
  };

  const goToManagers = () => navigate('/managers');
  const goToClients = () => navigate('/clients');
  const goToEmployee = () => navigate('/employees');

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setIsEditing(false);
    setCurrentEmployeeIndex(null);
    setNewEmployee({ name: '', mobile: '', email: '', password: '', role: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddEmployee = () => {
    const { name, mobile, email, password } = newEmployee;
    if (!name || !mobile || !email || !password) {
      alert('Please fill all fields');
      return;
    }

    if (isEditing) {
      const updatedEmployees = [...employees];
      updatedEmployees[currentEmployeeIndex] = newEmployee;
      setEmployees(updatedEmployees);
    } else {
      setEmployees([...employees, { ...newEmployee, people: [] }]);
    }

    handleCloseModal();
  };

  const openAssignModal = (index) => {
    setSelectedEmployeeIndex(index);
    setSelectedPeople([]);
    setAssignModalOpen(true);
  };

  const handleAssignDone = () => {
    const updatedEmployees = [...employees];
    updatedEmployees[selectedEmployeeIndex].assignedPeople = selectedPeople;
    setEmployees(updatedEmployees);
    setAssignModalOpen(false);
  };

  const handlePersonToggle = (email) => {
    setSelectedPeople((prev) =>
      prev.includes(email) ? prev.filter((e) => e !== email) : [...prev, email]
    );
  };

  return (
    <div className="employee-dashboard">
      <div className="employee-header">
        <img src={txlogo} alt="TechXplorers Logo" className="employee-logo" />
                <h2 className="logo-heading">Employees Data</h2>

      </div>

      <div className="hamburger-btn" onClick={toggleSidebar}>
        <FaBars size={24} />
      </div>

      <div className={`employee-sidebar ${sidebarOpen ? 'open' : ''}`}>
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
              <th>ROLE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {employees
              .filter((employee) =>
                [employee.name, employee.email, employee.mobile].some((field) =>
                  field.toLowerCase().includes(searchTerm.toLowerCase())
                )
              ).map((employee, index) => (
                <tr key={index} className="table-warning">
                  <td>{employee.name}</td>
                  <td>{employee.mobile}</td>
                  <td>{employee.email}</td>
                  <td>{employee.password}</td>
                  <td>{employee.role}</td>
                  <td>
                    <Button
                      variant="link"
                      className="text-decoration-none"
                      onClick={() => {
                        setIsEditing(true);
                        setCurrentEmployeeIndex(index);
                        setNewEmployee(employee);
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
          <Modal.Title>{isEditing ? 'Edit Employee' : 'Add Employee'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={newEmployee.name} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" name="mobile" value={newEmployee.mobile} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={newEmployee.email} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={newEmployee.password} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
<Form.Label>Role</Form.Label>
<Form.Select
name="role"
value={newEmployee.role}
onChange={handleInputChange}>
<option value="Employee">Employee</option>
<option value="Intern">Intern</option>
</Form.Select>
</Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
          <Button variant="primary" onClick={handleAddEmployee}>
            {isEditing ? 'Update Employee' : 'Add Employee'}
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  );
};

export default EmployeeData;


// Add Manager,Add people and edit options are working