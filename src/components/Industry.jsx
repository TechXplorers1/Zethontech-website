// src/components/Industries.jsx
import React from 'react';
import bfsiIcon from '../assets/bfsi.png';
import constructionIcon from '../assets/construction.png';
import educationIcon from '../assets/education.png';
import governmentIcon from '../assets/government.png';
import healthcareIcon from '../assets/health.png';
import manufacturingIcon from '../assets/manufacturing.png';
import oilgasIcon from '../assets/oil_gas.png';
import retailIcon from '../assets/retail.png';
import telecomIcon from '../assets/tele_communication.png';
import '../styles/Industries.css';

const industries = [
  { title: "BFSI", icon: bfsiIcon },
  { title: "CONSTRUCTION", icon: constructionIcon },
  { title: "EDUCATION", icon: educationIcon },
  { title: "GOVERNMENT", icon: governmentIcon },
  { title: "HEALTHCARE", icon: healthcareIcon },
  { title: "MANUFACTURING", icon: manufacturingIcon },
  { title: "OIL & GAS", icon: oilgasIcon },
  { title: "RETAIL", icon: retailIcon },
  { title: "TELE\nCOMMUNICATION", icon: telecomIcon },
];

const IndustriesDropdown = () => {
  return (
    <div className="industries-dropdown">
      {industries.map((industry, index) => (
        <div className="industry-card" key={index}>
          <img src={industry.icon} alt={industry.title} />
          <span>{industry.title}</span>
        </div>
      ))}
    </div>
  );
};

export default IndustriesDropdown;
