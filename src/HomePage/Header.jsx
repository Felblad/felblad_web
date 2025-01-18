import React, { useState } from "react";
import './Header.css'; // You can write your styles in an external CSS file or inline
import { IoSearch } from "react-icons/io5";

function Header() {
  // State variables to store input values
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [category, setCategory] = useState("");
  const [activity, setActivity] = useState("");

  // Function to handle the search button click
  const handleSearch = () => {
    // Display the search query in the console and alert
    console.log("Searching for:");
    console.log("Country:", country);
    console.log("Region:", region);
    console.log("Category:", category);
    console.log("Activity:", activity);

    alert(`Searching for: ${country}, ${region}, ${category}, ${activity}`);
  };
  const handlePopupOpen= ()=>{
    return(
      <div className="popup">
        <div className="popup-content">
          <input></input>
        </div>
      </div>
    )
  }
  return (
    <div className='header-container'>
    <div className="search-container-saerch">
      <div className="search-section-saerch">
        <label htmlFor="country">Pays</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter Un Pays"
        />
      </div>

      <div className="search-section-saerch">
        <label htmlFor="region">Ville</label>
        <input
          type="text"
          id="region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          placeholder="Entrer Une Ville"
        />
      </div>

      <div className="search-section-saerch">
        <label htmlFor="category">Secteur</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Entrer Un Secteur"
        />
      </div>

      <div className="search-section-saerch">
        <label htmlFor="activity">Service</label>
        <input
          type="text"
          id="activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          placeholder="Enter activity"
        />
      </div>

<button className="advanced-search" onClick={handlePopupOpen}>
        <i className="fas fa-search">+</i> 
      </button>

      <button className="search-btn-saerch" onClick={handleSearch}>
        <i className="fas fa-search"><IoSearch/></i> 
      </button>
    </div>
    </div>
  );
}

export default Header;
