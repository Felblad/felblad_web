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

  return (
    <div className='header-container'>
    <div className="search-container-saerch">
      <div className="search-section-saerch">
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter country"
        />
      </div>

      <div className="search-section-saerch">
        <label htmlFor="region">Region</label>
        <input
          type="text"
          id="region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          placeholder="Enter region"
        />
      </div>

      <div className="search-section-saerch">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category"
        />
      </div>

      <div className="search-section-saerch">
        <label htmlFor="activity">Activity</label>
        <input
          type="text"
          id="activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          placeholder="Enter activity"
        />
      </div>

      <button className="search-btn-saerch" onClick={handleSearch}>
        <i className="fas fa-search"><IoSearch/></i> 
      </button>
    </div>
    </div>
  );
}

export default Header;
