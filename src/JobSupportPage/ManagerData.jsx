import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import '../styles/ManagerData.css';
import txlogo from '../assets/txlogo.png';

const ManagerData = () => {
  const [showModal, setShowModal] = useState(false);
  const [people, setPeople] = useState([
    {
      name: 'DEMO NAME',
      mobile: '+91 9874561230',
      email: 'demo@gmail.com',
      password: '07072023@Tx123',
      count: 3,
      members: [
        { email: 'demo1@gmail.com', role: 'Team lead' },
        { email: 'demo2@gmail.com', role: 'Employee' },
        { email: 'demo3@gmail.com', role: 'Employee' },
      ],
    },
  ]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    count: 0,
    members: [],
  });
  const [newMember, setNewMember] = useState('');
  const [newRole, setNewRole] = useState('Employee');
  const [expandedRows, setExpandedRows] = useState([]);

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(people[index]);
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const updated = [...people];
    const updatedData = {
      ...formData,
      count: formData.members.length,
    };
    if (editingIndex === null) {
      updated.push(updatedData);
    } else {
      updated[editingIndex] = updatedData;
    }
    setPeople(updated);
    setShowModal(false);
    setEditingIndex(null);
  };

  const addMember = () => {
    if (!newMember) return;

    if (newMember === formData.email) {
      alert("You can't add the manager's email as a team member.");
      return;
    }

    if (!formData.members.find((m) => m.email === newMember)) {
      setFormData((prev) => ({
        ...prev,
        members: [...prev.members, { email: newMember, role: newRole }],
      }));
      setNewMember('');
    } else {
      alert('This member is already added.');
    }
  };

  const updateRole = (email, role) => {
    setFormData((prev) => ({
      ...prev,
      members: prev.members.map((m) =>
        m.email === email ? { ...m, role } : m
      ),
    }));
  };

  const removeMember = (email) => {
    setFormData((prev) => ({
      ...prev,
      members: prev.members.filter((m) => m.email !== email),
    }));
  };

  const toggleExpand = (index) => {
    setExpandedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="manager-container">
      <header className="manager-header">
        <div className="manager-logo">
          <img src={txlogo} alt="TechXplorers Logo" className="admin-logo" />
          <div>
            <h1>TECHXPLORERS</h1>
            <p>Exploring the Future</p>
          </div>
        </div>
        <h2>Manager</h2>
        <div className="manager-search">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
      </header>

      <div className="manager-actions">
        <button
          onClick={() => {
            setFormData({
              name: '',
              mobile: '',
              email: '',
              password: '',
              count: 0,
              members: [],
            });
            setEditingIndex(null);
            setShowModal(true);
          }}
        >
          + Add Manager
        </button>
      </div>

      <table className="manager-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>MOBILE</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
            <th>PEOPLE</th>
            <th>ADD PEOPLE</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, idx) => (
            <React.Fragment key={idx}>
              <tr className="table-row">
                <td>
                  <button onClick={() => toggleExpand(idx)}>
                    {expandedRows.includes(idx) ? '▲' : '▼'}
                  </button>{' '}
                  {person.name}
                </td>
                <td>{person.mobile}</td>
                <td>{person.email}</td>
                <td>{person.password}</td>
                <td>{person.count}</td>
                <td>
                  <button onClick={() => handleEdit(idx)}>Add People</button>
                </td>
              </tr>
              {expandedRows.includes(idx) && person.members.length > 0 && (
                <tr className="table-expanded">
                  <td colSpan="6">
                    <strong>Members:</strong>
                    <ul>
                      {person.members.map((m, i) => (
                        <li key={i}>
                          {m.email} — <em>{m.role}</em>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={() => setShowModal(false)}>
              ×
            </button>
            <h3>{editingIndex === null ? 'Add Manager' : 'Edit Manager'}</h3>
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
            <input
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="Mobile"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <input
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
            />

            <div className="add-member">
              <input
                type="email"
                placeholder="Add team member Email"
                value={newMember}
                onChange={(e) => setNewMember(e.target.value)}
              />
              <select
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
              >
                <option>Employee</option>
                <option>Team lead</option>
              </select>
              <button onClick={addMember}>Add</button>
            </div>

            <div className="added-people">
              <p>Added People</p>
              {formData.members.map((member, index) => (
                <div key={index} className="added-member">
                  <span>{member.email}</span>
                  <select
                    value={member.role}
                    onChange={(e) => updateRole(member.email, e.target.value)}
                  >
                    <option>Employee</option>
                    <option>Team lead</option>
                  </select>
                  <AiOutlineClose
                    onClick={() => removeMember(member.email)}
                  />
                </div>
              ))}
            </div>

            <button className="save-button" onClick={handleSave}>
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagerData;
