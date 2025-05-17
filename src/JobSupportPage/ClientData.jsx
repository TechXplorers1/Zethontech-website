import React, { useState } from "react";
import "../styles/ClientData.css";
import txlogo from '../assets/txlogo.png';
import { useNavigate } from 'react-router-dom';
import { Table, Button, Form, InputGroup, Dropdown } from 'react-bootstrap';
import {
  FaUserCircle,
  FaBars,
  FaArrowLeft,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';

const sampleClients = {
  registered: [
    { id: 1, name: "John Doe", mobile: "9876543210", email: "john@example.com", jobsapplyfor: "Data science", date: "2025-05-01", country: "USA", visastatus: "Citizen (U.S.)" },
    { id: 2, name: "Alice Brown", mobile: "7896543210", email: "alice@example.com", jobsapplyfor: "Cyber security", date: "2025-05-03", country: "UK", visastatus: "Green Card" },
    { id: 3, name: "Mcgregor", mobile: "7776543210", email: "mcg@example.com", jobsapplyfor: "Scrum master", date: "2025-05-01", country: "Australia", visastatus: "H-1B Visa" },
  ],
  unassigned: [
    { id: 4, name: "Jane Smith", mobile: "9977543210", email: "jane@example.com", jobsapplyfor: "Data science", date: "2025-05-02", country: "Africa", visastatus: "F-1 Visa" },
  ],
  active: [
    { id: 5, name: "Mike Green", mobile: "8876543210", email: "mike@example.com", jobsapplyfor: "Cyber security", manager: "Sarah Connor", date: "2025-04-28", country: "USA", visastatus: "L-1 Visa" },
  ],
  rejected: [
    { id: 6, name: "Tom Black", mobile: "8976543210", email: "tom@example.com", jobsapplyfor: "Scrum master", date: "2025-04-15", country: "UK", visastatus: "Green Card" },
  ],
  restored: []
};

const ClientData = () => {
  const [tab, setTab] = useState("registered");
  const [clients, setClients] = useState(sampleClients);
  const [managerAssign, setManagerAssign] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [clientsDropdownOpen, setClientsDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleClientsDropdown = () => setClientsDropdownOpen(!clientsDropdownOpen);

  const handleLogout = () => navigate('/');
  const goToDashboard = () => navigate('/AdminDashboard');
  const goToManagers = () => navigate('/managers');
  const goToTeamLeads = () => navigate('/teamleads');
  const goToEmployees = () => navigate('/employees');
  const goToClients = () => navigate('/clients');


  const handleAccept = (id) => {
    const accepted = clients.registered.find((c) => c.id === id);
    setClients((prev) => ({
      ...prev,
      registered: prev.registered.filter((c) => c.id !== id),
      unassigned: [...prev.unassigned, accepted],
    }));
  };

  const handleDecline = (id) => {
    const declined = clients.registered.find((c) => c.id === id);
    setClients((prev) => ({
      ...prev,
      registered: prev.registered.filter((c) => c.id !== id),
      rejected: [...prev.rejected, declined],
    }));
  };

  const handleAssign = (id, source) => {
    const client = clients[source].find((c) => c.id === id);
    const manager = managerAssign[id];
    if (!manager) return alert("Please select a manager.");

    setClients((prev) => ({
      ...prev,
      [source]: prev[source].filter((c) => c.id !== id),
      active: [...prev.active, { ...client, manager }],
    }));
  };

  const handleRestore = (id) => {
    const restoredClient = clients.rejected.find((c) => c.id === id);
    setClients((prev) => ({
      ...prev,
      rejected: prev.rejected.filter((c) => c.id !== id),
      restored: [...prev.restored, restoredClient],
    }));
  };

  const renderTable = (data) => (
    <Table striped bordered hover responsive className="client-table">
      <thead className="table-primary">
        <tr>
          <th>Name</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Jobs Apply For</th>
          <th>Registered Date</th>
          <th>Country</th>
          <th>Visa Status</th>
          {tab === "active" && <th>Manager</th>}
          {(tab === "unassigned" || tab === "restored") && <th>Assign To</th>}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((client) => (
          <tr key={client.id} className="table-warning">
            <td>{client.name}</td>
            <td>{client.mobile}</td>
            <td>{client.email}</td>
            <td>{client.jobsapplyfor}</td>
            <td>{client.date}</td>
            <td>{client.country}</td>
            <td>{client.visastatus}</td>
            {tab === "active" && <td>{client.manager}</td>}
            {(tab === "unassigned" || tab === "restored") && (
              <td>
                <select
                  value={managerAssign[client.id] || ""}
                  onChange={(e) =>
                    setManagerAssign({ ...managerAssign, [client.id]: e.target.value })
                  }
                >
                  <option value="">Select</option>
                  <option value="Manager A">Manager A</option>
                  <option value="Manager B">Manager B</option>
                </select>
              </td>
            )}
            <td>
              {tab === "registered" && (
                <div>
                  <button className="accept" onClick={() => handleAccept(client.id)}>
                    Accept
                  </button><br />
                  <button className="decline" onClick={() => handleDecline(client.id)}>
                    Decline
                  </button>
                </div>
              )}
              {tab === "unassigned" && (
                <button className="assign" onClick={() => handleAssign(client.id, "unassigned")}>
                  Assign
                </button>
              )}
              {tab === "restored" && (
                <button className="assign" onClick={() => handleAssign(client.id, "restored")}>
                  Assign
                </button>
              )}
              {tab === "rejected" && (
                <button className="restore" onClick={() => handleRestore(client.id)}>
                  Restore
                </button>
              )}
              {tab === "active" && <span>--</span>}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <img src={txlogo} alt="TechXplorers Logo" className="admin-logo" />
        <h2 className="logo-heading">Clients Data</h2>
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
          <li onClick={goToDashboard}>Dashboard</li>
          <li onClick={goToClients}>
            <span>Clients</span>
            {/* {clientsDropdownOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />} */}
          </li>
          {/* {clientsDropdownOpen && (
            <ul className="sub-menu">
              <li>Registrations</li>
              <li>Active Clients</li>
              <li>Previous Clients</li>
              <li>Rejected Clients</li>
            </ul>
          )}    */}
          <li onClick={goToManagers}>Managers</li>
          <li onClick={goToTeamLeads}>Team Leads</li>
          <li onClick={goToEmployees}>Employees</li>
          {/* <li onClick={goToClients}>Employees</li> */}

        </ul>

        <div className="sidebar-footer">
          <p>Help & Support</p>
          <button onClick={handleLogout} className="logout-btn">Log Out</button>
        </div>
      </div>

      <div className="dashboard-container">
        <h2>Clients Data</h2>
        <div className="tabs">
          {Object.keys(clients).map((key) => (
            <button
              key={key}
              className={tab === key ? "active" : ""}
              onClick={() => setTab(key)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)} Clients
            </button>
          ))}
        </div>
        <div className="table-warning">{renderTable(clients[tab])}</div>
      </div>
    </div>
  );
};

export default ClientData;
