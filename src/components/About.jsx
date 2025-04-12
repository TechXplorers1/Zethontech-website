import React from 'react';
import '../styles/about.css';
import aboutImage from '../assets/about.png'; // replace with your image path

const About = () => {
  return (
    
    <div className="about-wrapper" id="about">
       <h2 className="main-about-heading">About Us</h2>
      <div className="about-image-container">
        <img src={aboutImage} alt="About TechXplorers" />
      </div>
      <div className="about-text-container">
        <h2 className="about-heading">About TechXplorers</h2>
        <p>
          TechXplorers Is A Technology-Driven And Innovation-Focused Consulting Firm Committed To Delivering Top-Tier Solutions In IT Services, Staffing, Software Engineering, And Enterprise Application Development. Our Mission Is To Explore, Innovate, And Implement Cutting-Edge Technologies That Empower Our Clients To Streamline Operations, Accelerate Growth, And Stay Ahead In An Ever-Evolving Digital Landscape.
        </p>
        <p>
          At TechXplorers, We Bring Together A Passionate Team Of Experts, Modern Methodologies, And Industry Best Practices To Address The Unique Challenges Of Every Project. By Aligning The Right Talent With The Right Technology, We Ensure Flawless Execution And Impactful Outcomes. Our Client-First Approach And Dedication To Excellence Help Businesses Achieve Their Goals With Clarity, Confidence, And A Future-Ready Mindset.
        </p>
      </div>
    </div>
  );
};

export default About;
