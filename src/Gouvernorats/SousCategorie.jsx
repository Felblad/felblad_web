import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Categories.css';
import Footer from "../Footer";

const SousCategories = () => {
  const location=useLocation();
  const { data, gouvernoratData } = location.state || {};
  const [selectedDelegations, setSelectedDelegations] = useState([]);
  const delegations = gouvernoratData?.delegations || [];
  const navigate = useNavigate();

  const handleClick = (data,gouvernoratData) => {
    navigate('/Users', { state: { data , gouvernoratData} });
    console.log("data",data);
    
  };

  const handleCheckboxChange = (delegation) => {
    setSelectedDelegations((prev) =>
      prev.includes(delegation)
        ? prev.filter((item) => item !== delegation)
        : [...prev, delegation]
    );
  };

  return (
    <div className="container-column">
      <div className="container-cat">
        {/* Left Section (Delegations List) */}
        <div className="left-section-cat">
          <div className="gouvernaurat-container-cat">
            <h3 className="gouvernaurat-title-cat">Delegations</h3>
            <ul className="delegation-list-cat">
              {/* Example delegation list, replace with actual data */}
              {delegations.map((delegation, index) => (
                <li key={index} className="delegation-item-cat">
                  <label>
                    <input
                      type="checkbox"
                      value={delegation}
                      checked={selectedDelegations.includes(delegation)}
                      onChange={() => handleCheckboxChange(delegation)}
                    />
                    {delegation}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Middle Section (Background, Subcategories List) */}
        <div className="middle-section-cat">
          {/* Background Image Section */}
          <div className="background-image-container">
            <img
              src={`/${data.category.image}`}
              alt={data.category}
              className="category-image"
            />
            <div className="image-overlay-text">
              <p className="category-name">{data.category}</p>
            </div>
          </div>

          {/* Subcategories List Section */}
          <div className="categories-list-container">
            <div className="categories-grid">
              {data.subcategories?.map((subcategory, index) => (
                <div
                  key={index}
                  className="subcategory-item-cat"
                  onClick={() => {
                    handleClick(subcategory,gouvernoratData)
                  }}
                >
                  <div className="image-container-cat">
                    <img
                      src={`/${subcategory.image}`} 
                      alt={subcategory.name} 
                      className="image-cat"
                    />
                    <div className="overlay-cat">
                      <div className="overlay1-cat">
                        <p className="subcategory-name-cat">{subcategory.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section (Empty for Ads) */}
        <div className="right-section-cat">
          {/* Placeholder for right ad */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SousCategories;
