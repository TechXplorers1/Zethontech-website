import { Routes, Route } from 'react-router-dom';

import LoginPage from '../JobSupportPage/Auth/login';
import SignupPage from '../JobSupportPage/Auth/signUp';
import CandidateForm from '../JobSupportPage/Auth/JobSupportForm';
import Dashboard from '../JobSupportPage/Auth/dashboard';
import AdminDashboard from '../JobSupportPage/AdminDashboard';
import ManagerData from '../JobSupportPage/ManagerData';




const JobSupportRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/candidateform" element={<CandidateForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/managers" element={<ManagerData />} />

    </Routes>
  );
};
export default JobSupportRoutes;