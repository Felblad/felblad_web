import React from 'react';
import './footer.css';
import './App.css';

const FooterComponent = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <h3>Felblad Info</h3>
        <ul>
          <li><a href="mailto:suppoert@felblad.com">Email: support@felblad.com</a></li>
          <li><a href="mailto:dg@felblad.com"> dg@felblad.com</a></li>
          <li><a href="#services">Phone: +216 98 169 744</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Liens Rapides</h3>
        <ul>
          <li><a href="/">Santé</a></li>
          <li><a href="/gouvernorats">Loi</a></li>
          <li><a href="/">Gastronomie</a></li>
          <li><a href="/">Shopping</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Suivez Nous</h3>
        <ul>
        <li><a href="https://www.facebook.com/profile.php?id=61571253933313">Facebook</a></li>
          <li><a href="https://www.instagram.com/felblad.bigdata/">Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/felblad-platform-4aa8b5337/">LinkedIN</a></li>
          <li><a href="https://www.linkedin.com/in/felblad-platform-4aa8b5337/">Tiktok</a></li>
          <li><a href="https://www.linkedin.com/in/felblad-platform-4aa8b5337/">X</a></li>
          <li><a href="https://www.linkedin.com/in/felblad-platform-4aa8b5337/">Snapchat</a></li>

        </ul>
       <div className="footer">
        <p>&copy; 2025 Fel Blad. All rights reserved.</p>
      </div></div>
     
    </div>
  );
};

export default FooterComponent;
