import React, { useState } from "react";
import "../styles/ClientData.css";

const sampleClients = {
  registered: [
    { id: 1, name: "John Doe", email: "john@example.com", date: "2025-05-01" },
    { id: 2, name: "Alice Brown", email: "alice@example.com", date: "2025-05-03" },
  ],
  unassigned: [
    { id: 3, name: "Jane Smith", email: "jane@example.com", date: "2025-05-02" },
  ],
  active: [
    { id: 4, name: "Mike Green", email: "mike@example.com", manager: "Sarah Connor", date: "2025-04-28" },
  ],
  rejected: [
    { id: 5, name: "Tom Black", email: "tom@example.com", date: "2025-04-15" },
  ],
};

const ClientData = () => {
  const [tab, setTab] = useState("registered");
  const [clients, setClients] = useState(sampleClients);
  const [managerAssign, setManagerAssign] = useState({});

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

  const handleAssign = (id) => {
    const client = clients.unassigned.find((c) => c.id === id);
    const manager = managerAssign[id];
    if (!manager) return alert("Please select a manager.");

    setClients((prev) => ({
      ...prev,
      unassigned: prev.unassigned.filter((c) => c.id !== id),
      active: [...prev.active, { ...client, manager }],
    }));
  };

  const renderTable = (data) => (
    <table className="client-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Date</th>
          {tab === "active" && <th>Manager</th>}
          {tab === "unassigned" && <th>Assign To</th>}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((client) => (
          <tr key={client.id}>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>{client.date}</td>
            {tab === "active" && <td>{client.manager}</td>}
            {tab === "unassigned" && (
              <td>
                <select
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
                <>
                  <button onClick={() => handleAccept(client.id)}>Accept</button>
                  <button onClick={() => handleDecline(client.id)} className="decline">
                    Decline
                  </button>
                </>
              )}
              {tab === "unassigned" && (
                <button onClick={() => handleAssign(client.id)}>Assign</button>
              )}
              {(tab === "active" || tab === "rejected") && <span>--</span>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
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
      <div className="table-wrapper">{renderTable(clients[tab])}</div>
    </div>
  );
};

export default ClientData;
