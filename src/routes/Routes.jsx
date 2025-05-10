import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../App';
import MobileAppDev from '../pages/services/MobileAppDev';
import WebAppDev from '../pages/services/WebAppDev';
import DigitalMarketing from '../pages/services/DigitalMarketing';
import ITTalentSupply from '../pages/services/ITTalentSupply';
import JobSupport from '../pages/services/JobSupport';
import ContactForm from '../pages/services/JobSupportContactForm';
import ServiceLayout from '../components/ServiceLayout';
import Contact from '../components/Contact';
import BFSI from '../pages/industries/BFSI';
import Construction from '../pages/industries/Construction';
import Education from '../pages/industries/Education';
import Government from '../pages/industries/Government';
import Healthcare from '../pages/industries/Healthcare';
import Manufacturing from '../pages/industries/Manufacturing';
import OilGas from '../pages/industries/OilGas';
import Retail from '../pages/industries/Retail';
import Telecommunication from '../pages/industries/Telecommunication';



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route element={<ServiceLayout />}>

        <Route path="/industries/bfsi" element={<BFSI />} />
        <Route path="/industries/construction" element={<Construction />} />
        <Route path="/industries/education" element={<Education />} />
        <Route path="/industries/government" element={<Government />} />
        <Route path="/industries/healthcare" element={<Healthcare />} />
        <Route path="/industries/manufacturing" element={<Manufacturing />} />
        <Route path="/industries/oil-gas" element={<OilGas />} />
        <Route path="/industries/retail" element={<Retail />} />
        <Route path="/industries/telecommunication" element={<Telecommunication />} />
        <Route path="/services/mobile-app-development" element={<MobileAppDev />} />
        <Route path="/services/web-app-development" element={<WebAppDev />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/it-talent-supply" element={<ITTalentSupply />} />
        <Route path="/services/job-support" element={<JobSupport />} />
        <Route path="/services/job-contact-support" element={<ContactForm />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;