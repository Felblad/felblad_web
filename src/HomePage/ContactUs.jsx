import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGoogle } from 'react-icons/fa';
import './contactUs.css';

const ContactUsComponent = () => {
  return (
    <div className="contact-container-contact">
      <div className="image-container-contact">
        <img
          src="https://thecustomizewindows.cachefly.net/wp-content/uploads/2024/08/What-Happens-When-Your-Phone-Spies-on-You.jpg"
          alt="Contact Us"
          className="contact-image-contact"
        />
        <div className="overlay-contact">
          <h2 className="contact-title-contact">Contact Felblad</h2>

          <div className="social-media-container-contact">
            <ul className="social-media-list-contact">
              <li className="social-media-item-contact">
                <a href="https://www.facebook.com/profile.php?id=61571253933313" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="social-icon-contact" />
                </a>
              </li>
              <li className="social-media-item-contact">
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="social-icon-contact" />
                </a>
              </li>
              <li className="social-media-item-contact">
                <a href="https://www.instagram.com/felblad.bigdata/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="social-icon-contact" />
                </a>
              </li>
              <li className="social-media-item-contact">
                <a href="https://www.linkedin.com/in/felblad-platform-4aa8b5337/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="social-icon-contact" />
                </a>
              </li>
              {/* <li className="social-media-item-contact">
                <a href="mailto:support@felblad.com" target="_blank" rel="noopener noreferrer">
                  <FaGoogle className="social-icon-contact" />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;
