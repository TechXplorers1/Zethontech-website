import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-heading">TECHXPLORERS NAVIGATING THE FUTURE OF INNOVATION</h2>

      <div className="contact-info-cards">
        <div className="info-card">
          <i className="fas fa-headset"></i>
          <p>+91 9052990765</p>
        </div>
        <div className="info-card">
          <i className="fas fa-envelope"></i>
          <p>Need to update</p>
        </div>
        <div className="info-card">
          <i className="fas fa-map-marker-alt"></i>
          <p>Maruthi Nagar 3rd Cross<br />Near Panda Mini Mart, Anantapur, 515001</p>
        </div>
      </div>

      <div className="contact-main">
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Tech+Xplorers+Private+Limited,+3rd+Cross+Rd,+Anantapur,+India&output=embed"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="form-container">
          <h3>TALK WITH TECHXPLORERS</h3>
          <p>Fill out your contact details below and our experts will be in touch</p>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Your Subject" />
            <textarea placeholder="Message" rows="4"></textarea>
            <button type="submit">GET A RING BACK</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
