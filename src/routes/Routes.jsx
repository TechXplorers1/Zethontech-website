import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../App';
import MobileAppDev from '../pages/services/MobileAppDev';
import WebAppDev from '../pages/services/WebAppDev';
import DigitalMarketing from '../pages/services/DigitalMarketing';
import ITTalentSupply from '../pages/services/ITTalentSupply';
import JobSupport from '../pages/services/JobSupport';
import ServiceLayout from '../components/ServiceLayout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<ServiceLayout />}>
        <Route path="/services/mobile-app-development" element={<MobileAppDev />} />
        <Route path="/services/web-app-development" element={<WebAppDev />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/it-talent-supply" element={<ITTalentSupply />} />
        <Route path="/services/job-support" element={<JobSupport />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;