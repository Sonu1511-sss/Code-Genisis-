import React from 'react';
import '../Style/Footer.css';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";




const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        <div className="footer-left">
          <h3>Boost your coding workflow smartly <br /> with <span>Code-Genisis.</span></h3>
        </div>

        <div className="footer-right">
          <div className="footer-contact">
            <FaEnvelope className="footer-icon" />
            <p>Code-Genisis@gmail.com</p>
          </div>
          <div className="footer-contact">
            
            <p className="footer-copy">© Code-Genisis 2025, All Rights Reserved</p>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="/docs">About</a>
          <a href="/">Features</a>
          <a href="/chatbots">ChatEase</a>
          <a href="/profile">Profile</a>
        </div>

        <div className='footer-logo'>
            <span onClick={() => window.open("https://github.com/Sonu1511-sss ") }><FaGithub /></span>
            <span onClick={() => window.open("https://www.linkedin.com/in/shubham-uprade-092542278/") }><ImLinkedin /></span>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
