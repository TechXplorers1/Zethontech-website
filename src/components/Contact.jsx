import React from 'react';
import '../styles/Contact.css';
import ContactImg from '../assets/Contact.png';
import MailImg from '../assets/Mail.png';
import LocationImg from '../assets/Location.png';
import Footer from './Footer';
import CustomNavbar from './Navbar'

const Contact = () => {
  return (
    <div>
       <CustomNavbar/>
       <br />
    <div className="contact-section" id="contact">
      <h2 className="contact-heading">TECHXPLORERS NAVIGATING THE FUTURE OF INNOVATION</h2>

      <div className="contact-info-cards">
        <div className="info-card">
          <img src={ContactImg} alt="Contact Icon" className="info-icon" />
          <p>+91 9052990765</p>
        </div>
        <div className="info-card">
          <img src={MailImg} alt="Mail Icon" className="info-icon" />
          <p>naresh.pn@techxplorers.in</p>
        </div>
        <div className="info-card">
          <img src={LocationImg} alt="Location Icon" className="info-icon" />
          <p>Maruthi Nagar 3rd Cross ,<br />Near Panda Mini Mart, Anantapur, 515001</p>
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
    <Footer/>
    </div>
  );
};

export default Contact;