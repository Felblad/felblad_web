import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Pays from "./Pays";
import Carousel from "./AboutUs";
import ContactUs from "./ContactUs";
import Location from "./Localisation";
import Footer from "../Footer";
import "./homePage.css"
const HomePage = () => {
  // Refs to each section for scrolling
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const mapRef = useRef(null);
  const contactRef = useRef(null);
  const location = useLocation();
  
  // Extract state from location (default to empty object if no state is passed)
  const { activeSection } = location.state || {};

  // Scroll to the corresponding section when activeSection changes
  useEffect(() => {
    console.log("activeSection",activeSection);
    const sectionToScroll = activeSection || "home";
    switch (activeSection) {
      case "home":
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "map":
        mapRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
        default:
          console.warn(`Unknown section: ${sectionToScroll}`);
          break;
    }
    
  }, [activeSection]);
  useEffect(() => {
    if (!activeSection) {
      console.warn("No active section provided.");
    }
  }, [activeSection]);
  

  return (
    <div>
      {/* Home section */}
      <section ref={homeRef} className="section">
        <header className="header">
          <div className="header-overlay-home">
          <Pays />
          <Header />
          </div>
        </header>
        <div className="box-container">
      <div className="box"><div className="boxData">Plus que 10k de catégories disponibles!</div></div>
      <div className="box"><div className="boxData">Le premier annuaire en Tunisie qui vous fait de la PUB</div></div>
      <div className="box"><div className="boxData">Rejoignez notre communauté aujourd'hui!</div></div>
    </div>
      </section>

      {/* About section */}
      <section ref={aboutRef} className="section">
        <Carousel />
      </section>

      {/* Map section */}
      <section ref={mapRef} className="section">
        <Location />
      </section>

      {/* Contact section */}
      <section ref={contactRef} className="section">
        <ContactUs />
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
