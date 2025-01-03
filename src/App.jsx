import React, { useState, useRef, useEffect } from "react";
import "./App.css"; // Ensure to update styles in this file
import { FaHome, FaList } from "react-icons/fa";
import { PiCardsThreeBold } from "react-icons/pi"; // Import PiList for mobile menu toggle
import { BsQuestionSquareFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { BiPhoneCall } from "react-icons/bi";
import Logo from "./public/logo.jpg";
import { MdViewList } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false); // Sidebar is collapsed initially
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false); // New state for mobile navbar
  const [isMobileListOpen, setIsMobileListOpen] = useState(false); // New state for mobile navbar
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false); // Search popup state
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false); // Language dropdown visibility state
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [category, setCategory] = useState('');
  const [activity, setActivity] = useState('');
  const searchPopupRef = useRef(null);
  const languageDropdownRef = useRef(null);
  const navigate=useNavigate()
  // Close dropdowns and popup when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchPopupRef.current && searchPopupRef.current.contains(event.target)) {
        setIsSearchPopupOpen(false);
      }
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    // Add event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    setIsSearchPopupOpen(false);
    console.log(`Searching for: ${country}, ${region}, ${category}, ${activity}`);
  };

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const toggleMobileNavbar = () => {
    setIsMobileListOpen(!isMobileListOpen); 
  };

  const goToSection = (section) => {
    setActiveSection(section);
    setIsMobileListOpen(false);
  };

  const toggleSearchPopup = () => {
    setIsSearchPopupOpen(!isSearchPopupOpen);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen); 
  };

  const handleLanguageChange = (language) => {
    console.log(`Selected Language: ${language}`);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <div className="app">
      {/* Sidebar (Desktop Version) */}
      <div className={`sidebar ${isSidebarExpanded ? "expanded" : "collapsed"}`}>
        <div className="logo-container" onClick={()=>{navigate("/", activeSection={activeSection} ,isSidebarExpanded={isSidebarExpanded})}}>
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="icons-container">
          <button className="icon" onClick={toggleSidebar}>
            {isSidebarExpanded ? <FaList /> : <PiCardsThreeBold />}
            {isSidebarExpanded && <span className="icon-text">Cabillot</span>}
          </button>
          <button
            className={`icon ${activeSection === "home" ? "active" : ""}`}
            onClick={() => goToSection("home")}
          >
            <FaHome />
            {isSidebarExpanded && <span className="icon-text">Acceuil</span>}
          </button>
          <button
            className={`icon ${activeSection === "about" ? "active" : ""}`}
            onClick={() => goToSection("about")}
          >
            <BsQuestionSquareFill />
            {isSidebarExpanded && <span className="icon-text">A Propos</span>}
          </button>
          <button
            className={`icon ${activeSection === "map" ? "active" : ""}`}
            onClick={() => goToSection("map")}
          >
            <FaMapLocationDot />
            {isSidebarExpanded && <span className="icon-text">Localisation</span>}
          </button>
          <button
            className={`icon ${activeSection === "contact" ? "active" : ""}`}
            onClick={() => goToSection("contact")}
          >
            <BiPhoneCall />
            {isSidebarExpanded && <span className="icon-text">Contacter Nous</span>}
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className={`mobile-navbar ${isMobileNavbarOpen ? "open" : ""}`}>
        <div className="mobile-navbar-header">
          <img src="/logopng.png" alt="Logo" className="logo1" onClick={()=>{navigate("/", {activeSection:activeSection} ,{isSidebarExpanded:isSidebarExpanded})}} />
          <div className="mobile-svgs">
            <div onClick={toggleSearchPopup} className="mobile-search" >
              <IoMdSearch className="mobile-svg-search" />
            </div>
            <div onClick={toggleLanguageDropdown}>
              <CiGlobe className="mobile-svg-lang" />
            </div>
            <div onClick={toggleMobileNavbar}>
              <MdViewList className="mobile-svg" />
            </div>
          </div>
        </div>
        <div className={isMobileListOpen ? "mobile-navbar-menu" : "display-none"}>
          <button
            className={`mobile-navbar-item ${activeSection === "home" ? "active" : ""}`}
            onClick={() => goToSection("home")}
          >
            Home
          </button>
          <button
            className={`mobile-navbar-item ${activeSection === "about" ? "active" : ""}`}
            onClick={() => goToSection("about")}
          >
            About
          </button>
          <button
            className={`mobile-navbar-item ${activeSection === "map" ? "active" : ""}`}
            onClick={() => goToSection("map")}
          >
            Map
          </button>
          <button
            className={`mobile-navbar-item ${activeSection === "contact" ? "active" : ""}`}
            onClick={() => goToSection("contact")}
          >
            Contact
          </button>
        </div>
      </div>

      {/* Language Dropdown */}
      {isLanguageDropdownOpen && (
        <div ref={languageDropdownRef} className="language-dropdown">
          <ul>
            <li onClick={() => handleLanguageChange("English")}>English</li>
            <li onClick={() => handleLanguageChange("French")}>Français</li>
            <li onClick={() => handleLanguageChange("Arabic")}>العربية</li>
            <li onClick={() => handleLanguageChange("German")}>Deutsch</li>
            <li onClick={() => handleLanguageChange("Spanish")}>Español</li>
            <li onClick={() => handleLanguageChange("Italian")}>Italiano</li>
          </ul>
        </div>
      )}

 {/* Search Popup */}
 {isSearchPopupOpen && (
        <div className="search-popup" ref={searchPopupRef}>
          <div className="search-popup-content">
            <h2 className="search-title">Search</h2>
            <div className="search-container">
              <div className="search-section">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Enter country"
                />
              </div>
              <div className="search-section">
                <label htmlFor="region">Region</label>
                <input
                  type="text"
                  id="region"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  placeholder="Enter region"
                />
              </div>
              <div className="search-section">
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Enter category"
                />
              </div>
              <div className="search-section">
                <label htmlFor="activity">Activity</label>
                <input
                  type="text"
                  id="activity"
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  placeholder="Enter activity"
                />
              </div>
              <button className="search-btn" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;