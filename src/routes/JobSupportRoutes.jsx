import { Routes, Route } from 'react-router-dom';

import LoginPage from '../JobSupportPage/login';
import SignupPage from '../JobSupportPage/signUp';
import CandidateForm from '../JobSupportPage/JobSupportForm';
import ClientDashboard from '../JobSupportPage/ClientDashboard';
import AdminDashboard from '../JobSupportPage/AdminDashboard';
import ManagerDashboard from '../JobSupportPage/ManagerDashboard';
import ManagerData from '../JobSupportPage/ManagerData';
import ClientData from '../JobSupportPage/ClientData';
import EmployeeData from '../JobSupportPage/EmployeeData';
import TeamLeadData from '../JobSupportPage/TeamLeadData';






const JobSupportRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/candidateform" element={<CandidateForm />} />
        <Route path="/clientdashboard" element={<ClientDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/managerdashboard" element={<ManagerDashboard />} />
        <Route path="/managers" element={<ManagerData />} />
        <Route path="/clients" element={<ClientData />} />
        <Route path="/employees" element={<EmployeeData />} />
        <Route path="/teamleads" element={<TeamLeadData />} />

    </Routes>
  );
};
export default JobSupportRoutes;