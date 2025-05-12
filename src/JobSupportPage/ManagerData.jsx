import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

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
        { email: 'demo@gmail.com', role: 'Team lead' },
        { email: 'demo1@gmail.com', role: 'Employee' },
        { email: 'demo2@gmail.com', role: 'Employee' }
      ]
    },
  ]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    count: 0,
    members: []
  });
  const [newMember, setNewMember] = useState('');
  const [newRole, setNewRole] = useState('Employee');

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(people[index]);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    const updated = [...people];
    updated.splice(index, 1);
    setPeople(updated);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const updated = [...people];
    const updatedData = {
      ...formData,
      count: formData.members.length
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
    if (newMember && !formData.members.find(m => m.email === newMember)) {
      setFormData(prev => ({
        ...prev,
        members: [...prev.members, { email: newMember, role: newRole }]
      }));
      setNewMember('');
    }
  };

  const updateRole = (email, role) => {
    setFormData(prev => ({
      ...prev,
      members: prev.members.map(m => m.email === email ? { ...m, role } : m)
    }));
  };

  const removeMember = (email) => {
    setFormData(prev => ({
      ...prev,
      members: prev.members.filter(m => m.email !== email)
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-10" />
          <div>
            <h1 className="text-lg font-bold">TECHXPLORERS</h1>
            <p className="text-sm text-gray-500">Exploring the Future</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold">Manager</h2>
        <div className="flex items-center gap-2">
          <input type="text" placeholder="Search" className="border px-3 py-1 rounded" />
          <button className="bg-sky-500 text-white px-4 py-1 rounded">Search</button>
        </div>
      </header>

      <div className="flex justify-end px-6 mt-4">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={() => {
            setFormData({ name: '', mobile: '', email: '', password: '', count: 0, members: [] });
            setEditingIndex(null);
            setShowModal(true);
          }}
        >
          + Add People
        </button>
      </div>

      <table className="w-full mt-4 border-collapse">
        <thead className="bg-sky-500 text-white">
          <tr>
            <th className="p-2">NAME</th>
            <th className="p-2">MOBILE</th>
            <th className="p-2">EMAIL</th>
            <th className="p-2">PASSWORD</th>
            <th className="p-2">PEOPLE</th>
            <th className="p-2">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, idx) => (
            <tr key={idx} className="bg-orange-500 text-white text-center">
              <td className="p-2">{person.name}</td>
              <td className="p-2">{person.mobile}</td>
              <td className="p-2">{person.email}</td>
              <td className="p-2">{person.password}</td>
              <td className="p-2">{person.count}</td>
              <td className="p-2 flex justify-center gap-3">
                <FaEdit className="cursor-pointer" onClick={() => handleEdit(idx)} />
                <FaTrash className="cursor-pointer text-red-600" onClick={() => handleDelete(idx)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-[500px] relative">
            <button className="absolute top-2 right-3 text-2xl" onClick={() => setShowModal(false)}>×</button>
            <h3 className="text-lg font-semibold mb-4">
              {editingIndex === null ? 'Add Manager' : 'Edit Manager'}
            </h3>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" className="w-full border p-2 mb-2" />
            <input type="text" name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="Mobile" className="w-full border p-2 mb-2" />
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="w-full border p-2 mb-2" />
            <input type="text" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" className="w-full border p-2 mb-4" />

            {/* Member Addition UI */}
            <div className="flex items-center gap-2 mb-4">
              <input
                type="email"
                placeholder="Add people with their Email id"
                className="flex-1 border p-2"
                value={newMember}
                onChange={(e) => setNewMember(e.target.value)}
              />
              <select
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                className="border p-2"
              >
                <option>Employee</option>
                <option>Team lead</option>
              </select>
              <button className="bg-sky-500 text-white px-3 py-1 rounded" onClick={addMember}>Add</button>
            </div>

            <div>
              <p className="font-semibold mb-2">Added People</p>
              {formData.members.map((member, index) => (
                <div key={index} className="flex items-center justify-between mb-2">
                  <span>{member.email}</span>
                  <div className="flex items-center gap-2">
                    <select
                      value={member.role}
                      onChange={(e) => updateRole(member.email, e.target.value)}
                      className="border p-1"
                    >
                      <option>Employee</option>
                      <option>Team lead</option>
                    </select>
                    <AiOutlineClose
                      className="cursor-pointer text-red-500"
                      onClick={() => removeMember(member.email)}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              className="bg-sky-500 text-white px-6 py-2 rounded float-right mt-4"
              onClick={handleSave}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagerData;
