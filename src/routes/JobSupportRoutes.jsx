import { Routes, Route } from 'react-router-dom';

import LoginPage from '../JobSupportPage/Auth/login';
import SignupPage from '../JobSupportPage/Auth/signUp';
import CandidateForm from '../JobSupportPage/Auth/JobSupportForm';
import Dashboard from '../JobSupportPage/Auth/dashboard';




const JobSupportRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/candidateform" element={<CandidateForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
export default JobSupportRoutes;