// src/components/About.jsx
import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-overlay" />
      <div className="about-content">
        <h2 className="about-heading">What We Do</h2>
        <p>
          We offer a diverse range of services tailored to meet your digital needs. Our team of skilled professionals
          specializes in mobile application development, web application development, digital marketing, IT talent
          supply, job support, and IT consulting. At TechXplorers, we believe in harnessing the power of technology
          to transform businesses and enhance their competitive edge in the digital landscape.
        </p>
        <p>
          At TechXplorers, we understand the dynamic nature of technology and its impact on businesses. Our services
          are designed to adapt to the ever-changing digital environment and help you stay ahead of the curve.
          Whether you're looking to develop a mobile app, create a user-friendly web application, or launch a
          digital marketing campaign, we have the expertise to bring your vision to life.
        </p>
        <p>
          As a leader in IT talent supply, we connect businesses with skilled professionals who can drive success and
          innovation. Our job support and IT consulting services provide guidance and resources to help businesses
          excel in the evolving tech landscape. When you partner with TechXplorers, you're working with a team
          dedicated to your success.
        </p>
        <p>
          Explore our services and discover how TechXplorers can help unlock your full potential and achieve your
          business goals. Contact us today to begin your digital transformation journey with a trusted partner.
        </p>
      </div>
    </div>
  );
};

export default About;
