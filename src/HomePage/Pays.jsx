import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook
import './pays.css'; // Ensure that the CSS file is correctly imported

// ListItem Component for the countries and governorates
const ListItem = ({ isActive, image, title, comingSoon, onClick }) => {
  return (
    <div onClick={onClick} className="list-item-container">
      <div className={`list-item ${isActive ? 'active' : 'inactive'}`}>
        <div className="image-container">
          <img src={image} alt={title} className='image-pays' />
        </div>
        <div className="title">{title}</div>
      </div>
      {comingSoon && <div className="coming-soon">{comingSoon}</div>} 
    </div>
  );
};

// AnimatedText component for animated titles
const AnimatedText = ({ text, animationClass }) => {
  useEffect(() => {
    let delay = 200;
    let textContainer = document.getElementById(animationClass);

    textContainer.innerHTML = text
      .split("")
      .map(letter => `<span>${letter}</span>`)
      .join("");

    Array.from(textContainer.children).forEach((span, index) => {
      setTimeout(() => {
        span.classList.add(`${animationClass}-letter`);
      }, index * 60 + delay);
    });
  }, [text, animationClass]);

  return <div id={animationClass} className={`animated-text-container ${animationClass}`}>{text}</div>;
};

const Pays = () => {
  // Initialize useNavigate hook
  const navigate = useNavigate();

  // List of countries with additional information
  const countries = [
    { isActive: true, image: '/flags/Tunisie.png', title: 'Tunisie', comingSoon: '' },
    { isActive: false, image: '/flags/Lybie.png', title: 'Libye', comingSoon: 'Bientôt disponible' },
    { isActive: false, image: '/flags/Algerie.jpg', title: 'Algérie', comingSoon: 'Bientôt disponible' },
    { isActive: false, image: '/flags/Maroc.png', title: 'Maroc', comingSoon: 'Bientôt disponible' },
    { isActive: false, image: '/flags/Egypte.png', title: 'Egypte', comingSoon: 'Bientôt disponible' },
  ];

  const text1 = "كليكي تلقاني";
  const text2 = "Click Tu me Trouves";

  // Handle onClick event
  const handleClick = (country) => {
    if (country.isActive) {
      navigate('/gouvernorats'); // Navigate if the country is active
    } else {
      alert(`${country.title} will be available soon`); // Show alert if not active
    }
  };

  return (
    <div className="pays-container">
      {/* Animated Titles */}
      <div className="click-container">
        <AnimatedText text={text1} animationClass="wavy-text-1" />
        <AnimatedText text={text2} animationClass="wavy-text-2" />
      </div>

      {/* List of Countries */}
      <div className="list-container-home">
        {countries.map((country, index) => (
          <ListItem
            key={index}
            image={country.image}
            title={country.title}
            comingSoon={country.comingSoon}
            isActive={country.isActive}
            onClick={() => handleClick(country)} // Pass country to handleClick
          />
        ))}
      </div>
    </div>
  );
};

export default Pays;
