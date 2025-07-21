import { Routes, Route } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import LoginPage from '../JobSupportPage/login';
import SignupPage from '../JobSupportPage/signUp';
import CandidateForm from '../JobSupportPage/JobSupportForm';
import ClientDashboard from '../JobSupportPage/ClientDashboard';
import AdminDashboard from '../JobSupportPage/AdminDashboard';
import ManagerDashboard from '../JobSupportPage/ManagerDashboard';
import TeamLeadDashboard from '../JobSupportPage/TeamLeadDashboard';
import EmployeeDashboard from '../JobSupportPage/EmployeeDashboard';
import ManagerData from '../JobSupportPage/ManagerData';
import ClientData from '../JobSupportPage/ClientData';
import ClientSheet from '../JobSupportPage/ClientSheet';
import EmployeeData from '../JobSupportPage/EmployeeData';
import TeamLeadData from '../JobSupportPage/TeamLeadData';








const JobSupportRoutes = () => {
  return (
    <>
    <ScrollToTop />
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/candidateform" element={<CandidateForm />} />
        <Route path="/clientdashboard" element={<ClientDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/managerdashboard" element={<ManagerDashboard />} />
        <Route path="/teamlead_dashboard" element={<TeamLeadDashboard />} />
        <Route path="/employeedashboard" element={<EmployeeDashboard />} />
        <Route path="/managers" element={<ManagerData />} />
        <Route path="/clients" element={<ClientData />} />
        <Route path="/clientsheet" element={<ClientSheet />} />
        <Route path="/employees" element={<EmployeeData />} />
        <Route path="/teamleads" element={<TeamLeadData />} />

       


    </Routes>
    </>
  );
};
export default JobSupportRoutes;