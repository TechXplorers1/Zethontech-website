import React from 'react';
import '../../styles/ServiceLayout.css';
import img1 from '../../assets/mobile5.png';

const ITTalentSupply = () => {
  return (
    <div className="mobile-app-dev service-box">
      <h2 className="section-title">IT Consulting & Job Support</h2>
      
      {/* Single image display */}
      <div className="single-image-container">
        <img src={img1} alt="IT Talent Supply" className="service-image" />
      </div>

      <div className="service-description">
        <h1>IT Consulting & Job Support – TechXplorers Private Limited</h1>
        <p>
          At TechXplorers Private Limited, we provide expert IT consulting and job support services to help businesses and professionals navigate the complex technology landscape. Our goal is to empower organizations with cutting-edge solutions and equip professionals with real-time project support, ensuring success in their IT careers.
        </p>
        
        <h2>Our IT Consulting Services</h2>
        <p>
          We offer strategic IT consulting to help businesses streamline operations, enhance security, and adopt modern technologies for digital transformation.
        </p>
        
        <h2>Key IT Consulting Services</h2>
        <ul>
          <li><strong>Digital Transformation</strong> – Helping businesses modernize with cloud computing, AI, and automation.</li>
          <li><strong>IT Strategy & Roadmap</strong> – Crafting tailored IT strategies to align with business goals.</li>
          <li><strong>Cloud Computing Consulting</strong> – Expertise in AWS, Azure, and Google Cloud for seamless cloud adoption.</li>
          <li><strong>Cybersecurity Solutions</strong> – Implementing robust security frameworks to protect sensitive data.</li>
          <li><strong>Infrastructure Optimization</strong> – Enhancing performance, scalability, and cost-efficiency of IT systems.</li>
          <li><strong>DevOps & Agile Consulting</strong> – Driving collaboration and automation for faster software delivery.</li>
          <li><strong>Enterprise IT Solutions</strong> – Providing ERP, CRM, and data analytics solutions for businesses.</li>
        </ul>
        
        <h2>Real-Time Job Support for IT Professionals</h2>
        <p>
          Our job support services help IT professionals overcome technical challenges in real-time projects, ensuring career growth and project success.
        </p>
        
        <h2>How We Help IT Professionals</h2>
        <ul>
          <li><strong>Live Project Assistance</strong> – Get expert guidance while working on real-time industry projects.</li>
          <li><strong>One-on-One Support</strong> – Personalized mentoring to resolve technical issues quickly.</li>
          <li><strong>Technology-Specific Support</strong> – Specializing in Java, Python, AWS, DevOps, Data Science, Cybersecurity, and more.</li>
          <li><strong>Code Review & Debugging</strong> – Ensuring high-quality code through expert reviews.</li>
          <li><strong>Interview Preparation</strong> – Mock interviews, resume optimization, and skill-building sessions.</li>
          <li><strong>Freelancer & Remote Work Support</strong> – Assisting independent professionals in managing client projects.</li>
        </ul>
        
        <h2>Our IT Consulting & Job Support Process</h2>
        <p>We follow a structured approach to ensure efficiency, reliability, and success for businesses and professionals.</p>
        <ul>
          <li><strong>Requirement Analysis</strong> – Understanding your challenges and project requirements.</li>
          <li><strong>Expert Allocation</strong> – Assigning domain-specific IT consultants and mentors.</li>
          <li><strong>Problem-Solving Sessions</strong> – Providing real-time troubleshooting and guidance.</li>
          <li><strong>Performance Enhancement</strong> – Optimizing workflows, automation, and cloud integration.</li>
          <li><strong>Continuous Support & Monitoring</strong> – Ongoing assistance to ensure long-term success.</li>
        </ul>
      </div>
    </div>
  );
};

export default ITTalentSupply;