import React from 'react';
import '../styles/Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Logo from '../assets/tx_official_logo.png';

const Footer = () => {
  return (
    <footer className="footer text-white pt-5">
      <div className="container">
        <div className="row text-center text-md-start justify-content-between">

          {/* Logo Column */}
          <div className="col-12 col-md-2 mb-4">
            <img src={Logo} alt="TX Logo" className="footer-logo mb-2" />
          </div>
          
           {/* Description */}
           <div className="col-12 col-md-3 mb-4">
            <h5 className="text-info fw-bold">TECHXPLORERS PRIVATE LIMITED</h5>
            <p className="small mt-2">
              BUILDING THE FUTURE WITH STYLE AND INNOVATION.<br />
              JOIN US ON OUR JOURNEY!
            </p>
          </div>

          {/* Company Info */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="text-info fw-bold">COMPANY</h6>
            <ul className="list-unstyled small mt-2">
              <li><a href="#">ABOUT US</a></li>
              <li><a href="#">CAREERS</a></li>
              <li><a href="#">BLOG</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="text-info fw-bold">SUPPORT</h6>
            <ul className="list-unstyled small mt-2">
              <li><a href="#">HELP CENTER</a></li>
              <li><a href="#">TERMS OF SERVICE</a></li>
              <li><a href="#">PRIVACY POLICY</a></li>
            </ul>
          </div>

         

          {/* Social Links */}
          <div className="col-12 col-md-2 mb-4">
            <h6 className="text-info fw-bold">FOLLOW US</h6>
            <div className="d-flex justify-content-center justify-content-md-start mt-2 gap-3 fs-5">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom text-center py-3">
        <small className="text-info">© 2025 TECHXPLORERS ALL RIGHTS RESERVED</small>
      </div>
    </footer>
  );
};

export default Footer;
