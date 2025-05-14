import React, { createContext, useContext, useState } from 'react';

const PeopleContext = createContext();

export const PeopleProvider = ({ children }) => {
const [teamLeads, setTeamLeads] = useState([
{ email: 'siva@gmail.com', role: 'Team Lead' },
{ email: 'arjun@gmail.com', role: 'Team Lead' }
]);

const [employees, setEmployees] = useState([
{ email: 'sivaemployee@gmail.com', role: 'Employee' },
{ email: 'arjunemployee@gmail.com', role: 'Employee' }
]);

const addTeamLead = (lead) => {
setTeamLeads((prev) => [...prev, lead]);
};

const addEmployee = (emp) => {
setEmployees((prev) => [...prev, emp]);
};

return (
<PeopleContext.Provider value={{ teamLeads, employees, addTeamLead, addEmployee }}>
{children}
</PeopleContext.Provider>
);
};

export const useGlobalData = () => useContext(PeopleContext);