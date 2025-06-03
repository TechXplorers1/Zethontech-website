import React, { useState } from "react";
import "../styles/ClientSheet.css";
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

import { PowerBIEmbed } from 'powerbi-client-react';
import {models} from 'powerbi-client';

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

const ClientSheet = () => {
  const [tab, setTab] = useState("registered");
  const [clients, setClients] = useState(sampleClients);
  const [managerAssign, setManagerAssign] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [clientsDropdownOpen, setClientsDropdownOpen] = useState(false);
  const [showSheet, setShowSheet] = useState(false);


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
            <td>
                  <button className="accept">
                    Google Sheet
                  </button>
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
        <div className="table-warning">{renderTable(clients[tab])}</div>
<PowerBIEmbed
        embedConfig = {{
            type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
            id: '1f9aba5b-f44a-4126-ba2b-215c8f934aa9',
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=1f9aba5b-f44a-4126-ba2b-215c8f934aa9&groupId=ef57c8a6-e497-41cb-95f0-1180f1eb826a&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkNOdjBPSTNSd3FsSEZFVm5hb01Bc2hDSDJYRSIsImtpZCI6IkNOdjBPSTNSd3FsSEZFVm5hb01Bc2hDSDJYRSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNjRiMjMzZjgtZDIzNy00YTZhLWJhZmMtNWU3YmU3YmJlNzlkLyIsImlhdCI6MTc0ODI2NTg2MCwibmJmIjoxNzQ4MjY1ODYwLCJleHAiOjE3NDgyNzAzODIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBWFFBaS84WkFBQUFoSENxZXNLSDlwTDg4MXgxTmpxMXRUb1c2OUFxamJLcnhIcXVrZWJZK1Y3aElqSzJTT3pjMU9PdEdrcnk4WjRtZmgzL0FJZFp5ZXJCck1NTHcyODEyU3hEV2pWSHcyMjA2dEV3ZUZtVTk4eWVPV2hUUElZS2ZSdjdvUVdKaFdEVWNlWDB1a2N5RlZkdTZXd2ZWRGhMaEE9PSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiI4NzFjMDEwZi01ZTYxLTRmYjEtODNhYy05ODYxMGE3ZTkxMTAiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6Ik1hbm5pbGEiLCJnaXZlbl9uYW1lIjoiU2FuZGVlcCIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjI0MDU6MjAxOmMwMzI6ZDA2MzozYzdkOjIyZmQ6ZWJjZjpmNDAyIiwibmFtZSI6IlNhbmRlZXAgTWFubmlsYSIsIm9pZCI6ImQ4NTEwNzRhLWY3NGUtNGVlMS04NDczLTU0ODQwMzRlMGM1MiIsInB1aWQiOiIxMDAzMjAwNEE4RjQyNEE5IiwicmgiOiIxLkFjWUEtRE95WkRmU2FrcTZfRjU3NTd2bm5Ra0FBQUFBQUFBQXdBQUFBQUFBQUFEcEFQWEdBQS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWQiOiIwMDUwNGFjOS1kNmI3LWE5YzktNDM3NS02Yjg5OTY4YjM2MWEiLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJteWM5MEFpSjBPVDlJaDJoZVRpUS1tXzR5MU85ZGpqZngxVVEySWZtV1JBIiwidGlkIjoiNjRiMjMzZjgtZDIzNy00YTZhLWJhZmMtNWU3YmU3YmJlNzlkIiwidW5pcXVlX25hbWUiOiJzYW5kZWVwQHRlY2h4cGxvcmVycy5pbiIsInVwbiI6InNhbmRlZXBAdGVjaHhwbG9yZXJzLmluIiwidXRpIjoiWm4xRUtxNnpORWlfUUdPY19hTkZBUSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19mdGQiOiJtSHVxbnBsUWd5RFItRER6RlVsUXc4a19MN01EREhZNVFiX29PVS1UbUo4QllYTnBZWE52ZFhSb1pXRnpkQzFrYzIxeiIsInhtc19pZHJlbCI6IjI0IDEiLCJ4bXNfcGwiOiJlbi1VUyJ9.fi83DyRHcEeXvjQqhJFHR9NzbvbaOsjlc0cDS7UbcqJIix9AcAWsUS7CaOtaHMHMlvclTm_1LvHPBdrLfe1Df_5zua7YojLy7_mkPJ1LfQ8RZqWoOwRsQmhpcta5vV4r1RoWfm3J5ByF8p_BNpMeqE2LefQXqhT_fWIbP_Zpk4FPE0y-fYElRpkWHPq25HzNv6cQWmGxtlZlnw343tbx2J84prqpeC4oYq2QMbt5TrgjeNlY0YVsOru_PhSY1nvpQ-kC6uwEqlktVk06sqfcMl1_bnZmOH1Rhk8VaSvi5E3zOIaXUyDQpjzKJ2x9DUuEGZtYnrhMMDkGfBhxksNwOA',
            tokenType: models.TokenType.Embed, // Use models.TokenType.Aad for SaaS embed
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: false
                }
              },
              background: models.BackgroundType.Transparent,
            }
          }}
        
          eventHandlers = {
            new Map([
              ['loaded', function () {console.log('Report loaded');}],
              ['rendered', function () {console.log('Report rendered');}],
              ['error', function (event) {console.log(event.detail);}],
              ['visualClicked', () => console.log('visual clicked')],
              ['pageChanged', (event) => console.log(event)],
            ])
          }
        
          cssClassName = { "reportClass" }
        
          getEmbeddedComponent = { (embeddedReport) => {
            window.Report = embeddedReport;
          }}
          />
      </div>
    </div>
  );
};

export default ClientSheet;
