import React from 'react';
import '../styles/Services.css'; // Ensure the filename and path are exactly correct

const serviceList = [
  "Web Application Development",
  "Mobile Application Development",
  "Job Support & IT Consulting",
  "IT Talent Supply",
  "Digital Marketing"
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {serviceList.map((service, index) => (
          <div key={index} className="service-card">
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}
