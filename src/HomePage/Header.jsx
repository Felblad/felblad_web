import React, { useState, useEffect } from "react";
import './Header.css'; // Your styles here
import { IoSearch } from "react-icons/io5";

function Header() {
  // State variables to store input values
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [category, setCategory] = useState("");
  const [activity, setActivity] = useState("");
  
  // State variables to control popups
  const [showCountryPopup, setShowCountryPopup] = useState(false);
  const [showRegionPopup, setShowRegionPopup] = useState(false);
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);
  const [showActivityPopup, setShowActivityPopup] = useState(false);
  const [showAdvancedSearchPopup, setShowAdvancedSearchPopup] = useState(false);

  // Lists for popups
  const countries = ["Tunisie", "Algérie", "Maroc", "Libye", "Egypte"];
  const regions = ["Tunis", "Sfax", "Nabeul", "Kairouan", "Sousse"];
  const categories = [
    "SANTÉ", "DROIT", "BÂTIMENT", "SHOPPING", "MÉTIER", "GASTRONOMIE", 
    "Loisir", "GROSSISTE - DEPOT", "MARCHÉ", "EDUCATION", "ESTHETIQUE", 
    "évènementiel", "Transport", "SÉCURITÉ", "SPORT", "INFORMATIQUE", 
    "TOURISME", "CULTURE", "AUTO. MOTO", "AGRICULTURE", "ÉLECTRONIQUE", 
    "FINANCE", "USINE", "SERVICES"
  ];
  const services = ["Service 1", "Service 2", "Service 3", "Service 4"];

  // Function to handle the search button click
  const handleSearch = () => {
    console.log("Searching for:");
    console.log("Country:", country);
    console.log("Region:", region);
    console.log("Category:", category);
    console.log("Activity:", activity);
    alert(`Searching for: ${country}, ${region}, ${category}, ${activity}`);
  };

  // Handle Popup toggle
  const togglePopup = (type) => {
    switch (type) {
      case "country":
        setShowCountryPopup(!showCountryPopup);
        break;
      case "region":
        setShowRegionPopup(!showRegionPopup);
        break;
      case "category":
        setShowCategoryPopup(!showCategoryPopup);
        break;
      case "activity":
        setShowActivityPopup(!showActivityPopup);
        break;
      case "advanced":
        setShowAdvancedSearchPopup(!showAdvancedSearchPopup);
        break;
      default:
        setShowCountryPopup(false);
        setShowRegionPopup(false);
        setShowCategoryPopup(false);
        setShowActivityPopup(false);
        setShowAdvancedSearchPopup(false);
    }
  };

  // Close all popups when clicking outside
  useEffect(() => {
    const closePopupsOnOutsideClick = (e) => {
      if (!e.target.closest('.popup') && !e.target.closest('.search-section-saerch')) {
        setShowCountryPopup(false);
        setShowRegionPopup(false);
        setShowCategoryPopup(false);
        setShowActivityPopup(false);
        setShowAdvancedSearchPopup(false);
      }
    };

    document.addEventListener('click', closePopupsOnOutsideClick);
    return () => document.removeEventListener('click', closePopupsOnOutsideClick);
  }, []);

  return (
    <div className="header-container">
      <div className="search-container-saerch">
        <div className="search-section-saerch">
          <label htmlFor="country">Pays</label>
          <input
            type="text"
            id="country"
            value={country}
            onClick={() => togglePopup("country")}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Enter Un Pays"
          />
          {showCountryPopup && (
            <div className="popup">
              <div className="popup-content">
                <input 
                  type="text" 
                  placeholder="Filter Pays"
                  onChange={(e) => setCountry(e.target.value)}
                />
                <ul>
                  {countries.filter(c => c.toLowerCase().includes(country.toLowerCase())).map((country, index) => (
                    <li key={index} onClick={() => { setCountry(country); togglePopup("country"); }}>
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="search-section-saerch">
          <label htmlFor="region">Ville</label>
          <input
            type="text"
            id="region"
            value={region}
            onClick={() => togglePopup("region")}
            onChange={(e) => setRegion(e.target.value)}
            placeholder="Entrer Une Ville"
          />
          {showRegionPopup && (
            <div className="popup">
              <div className="popup-content">
                <input 
                  type="text" 
                  placeholder="Filter Ville"
                  onChange={(e) => setRegion(e.target.value)}
                />
                <ul>
                  {regions.filter(r => r.toLowerCase().includes(region.toLowerCase())).map((region, index) => (
                    <li key={index} onClick={() => { setRegion(region); togglePopup("region"); }}>
                      {region}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="search-section-saerch">
          <label htmlFor="category">Secteur</label>
          <input
            type="text"
            id="category"
            value={category}
            onClick={() => togglePopup("category")}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Entrer Un Secteur"
          />
          {showCategoryPopup && (
            <div className="popup">
              <div className="popup-content">
                <input 
                  type="text" 
                  placeholder="Filter Secteur"
                  onChange={(e) => setCategory(e.target.value)}
                />
                <ul>
                  {categories.filter(c => c.toLowerCase().includes(category.toLowerCase())).map((category, index) => (
                    <li key={index} onClick={() => { setCategory(category); togglePopup("category"); }}>
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="search-section-saerch">
          <label htmlFor="activity">Service</label>
          <input
            type="text"
            id="activity"
            value={activity}
            onClick={() => togglePopup("activity")}
            onChange={(e) => setActivity(e.target.value)}
            placeholder="Enter activity"
          />
          {showActivityPopup && (
            <div className="popup">
              <div className="popup-content">
                <input 
                  type="text" 
                  placeholder="Filter Service"
                  onChange={(e) => setActivity(e.target.value)}
                />
                <ul>
                  {services.filter(s => s.toLowerCase().includes(activity.toLowerCase())).map((service, index) => (
                    <li key={index} onClick={() => { setActivity(service); togglePopup("activity"); }}>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <button className="advanced-search" onClick={() => togglePopup("advanced")}>
          <i className="fas fa-search">+</i> 
        </button>

        <button className="search-btn-saerch" onClick={handleSearch}>
          <i className="fas fa-search"><IoSearch/></i> 
        </button>
      </div>

      {showAdvancedSearchPopup && (
        <div className="popup">
          <div className="popup-content">
            <input 
              type="text" 
              placeholder="Advanced Search"
            />
            <ul>{services}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
