import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './contactUs.css';

const ContactUsComponent = () => {
  return (
    <div className="contact-container-contact">
      <div className="image-container-contact">
        <img src="https://thecustomizewindows.cachefly.net/wp-content/uploads/2024/08/What-Happens-When-Your-Phone-Spies-on-You.jpg" alt="Contact Us" className="contact-image-contact" />
        <div className="overlay-contact">
          <h2 className="contact-title-contact">Contact Felblad</h2>
       

      <div className="social-media-container-contact">
        <ul className="social-media-list-contact">
          <li className="social-media-item-contact">
            <FaFacebook className="social-icon-contact" on/>
          </li>
          <li className="social-media-item-contact">
            <FaTwitter className="social-icon-contact" />
          </li>
          <li className="social-media-item-contact">
            <FaInstagram className="social-icon-contact" />
          </li>
          <li className="social-media-item-contact">
            <FaLinkedin className="social-icon-contact" />
          </li>
        </ul>
      </div>
    </div> </div>
      </div>
  );
};

export default ContactUsComponent;
