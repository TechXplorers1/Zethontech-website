// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
// import LoginPage from './JobSupportPage/Auth/login.jsx';
import SignupPage from './JobSupportPage/Auth/signUp.jsx';
import CandidateForm from './JobSupportPage/Auth/JobSupportForm.jsx';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/Routes';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <SignupPage />
  </React.StrictMode>
);