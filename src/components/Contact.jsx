import React, { useState } from 'react';
import '../styles/Contact.css';
import ContactImg from '../assets/Contact.png';
import MailImg from '../assets/Mail.png';
import LocationImg from '../assets/Location.png';
import CustomNavbar from './Navbar';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/919052990765?text=${whatsappMessage}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <div>
      <CustomNavbar />
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit">
                <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '24px', marginRight: '8px' }} />
                GET A RING BACK
              </button>

            </form>
          </div>
        </div>
        <Footer />
      </div>
      
    </div>
  );
};

export default Contact;