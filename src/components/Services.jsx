// src/components/Services.jsx
import React from 'react';
import mobileIcon from '../assets/mobile_app_dev.png';
import webIcon from '../assets/web_app_dev.png';
import marketingIcon from '../assets/digi_mark.png';
import talentIcon from '../assets/it_talent_supply.png';
import consultingIcon from '../assets/job_support.png';
import '../styles/Services.css';

const services = [
  { title: "Mobile Application Development", icon: mobileIcon },
  { title: "Web Application Development", icon: webIcon },
  { title: "Digital Marketing", icon: marketingIcon },
  { title: "IT Talent Supply", icon: talentIcon },
  { title: "Job Support & IT Consulting", icon: consultingIcon },
];

const ServicesDropdown = () => {
  return (
    <div className="services-dropdown">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <img src={service.icon} alt="" />
          <span>{service.title}</span>
        </div>
      ))}
    </div>
  );
};

export default ServicesDropdown;
