import React from 'react';
import './footer.css';
import './App.css';

const FooterComponent = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <h3>Contact Info</h3>
        <p>Email: felbladin@gmail.com</p>
        <p>Phone: +123 456 789</p>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
       <div className="footer">
        <p>&copy; 2025 Fel Blad. All rights reserved.</p>
      </div></div>
     
    </div>
  );
};

export default FooterComponent;
