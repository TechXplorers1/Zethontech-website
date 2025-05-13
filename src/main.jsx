// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import JobSupportRoutes from './routes/JobSupportRoutes.jsx';
import AdminDashboard from './JobSupportPage/AdminDashboard.jsx';
import ManagerDashboard from './JobSupportPage/ManagerData.jsx';
import ClientData from './JobSupportPage/ClientData.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AppRoutes />
      <JobSupportRoutes/>
      {/* <AdminDashboard/> */}
      {/* <ManagerData/> */}
    </BrowserRouter>
  </React.StrictMode>
);