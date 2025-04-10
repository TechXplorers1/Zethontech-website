import React from 'react';
import '../styles/Services.css';

const serviceList = [
  "Mobile Application Development",
  "Web Application Development",
  "Digital Marketing",
  "IT Talent Supply",
  "Job Support & IT Consulting",
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-title">Our Services</div>
      <div className="services-grid">
        {serviceList.map((service, index) => (
          <div key={index} className="service-card">
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}