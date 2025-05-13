import { Routes, Route } from 'react-router-dom';

import LoginPage from '../JobSupportPage/login';
import SignupPage from '../JobSupportPage/signUp';
import CandidateForm from '../JobSupportPage/JobSupportForm';
import ClientDashboard from '../JobSupportPage/ClientDashboard';
import AdminDashboard from '../JobSupportPage/AdminDashboard';
import ManagerData from '../JobSupportPage/ManagerData';
import ClientData from '../JobSupportPage/ClientData';
import EmployeeData from '../JobSupportPage/EmployeeData';





const JobSupportRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/candidateform" element={<CandidateForm />} />
        <Route path="/clientdashboard" element={<ClientDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/managers" element={<ManagerData />} />
        <Route path="/clients" element={<ClientData />} />
        <Route path="/employee" element={<EmployeeData />} />

    </Routes>
  );
};
export default JobSupportRoutes;