import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Pays from "./Pays";
import Carousel from "./AboutUs";
import ContactUs from "./ContactUs";
import Location from "./Localisation";
import Footer from "../Footer";

const HomePage = () => {
  // Refs to each section for scrolling
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const mapRef = useRef(null);
  const contactRef = useRef(null);
  const location = useLocation();
  
  // Extract state from location (default to empty object if no state is passed)
  const { activeSection, isSidebarExpanded } = location.state || {};

  // Scroll to the corresponding section when activeSection changes
  useEffect(() => {
    console.log("activeSection",activeSection, "isSidebarExpanded,", isSidebarExpanded);
    
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
        break;
    }
  }, [activeSection]);

  return (
    <div>
      {/* Home section */}
      <section ref={homeRef} className="section">
        <header className="header">
          <Header isSidebarExpanded={isSidebarExpanded} />
          <Pays />
        </header>
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
