import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './pays.css'; 

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

const Pays = () => {
  const navigate = useNavigate();
  const countries = [
    { isActive: true, image: '/flags/Tunisie.png', title: 'Tunisie', comingSoon: '' },
    { isActive: false, image: '/flags/Lybie.png', title: 'Libye', comingSoon: 'Bientôt disponible' },
    { isActive: false, image: '/flags/Algerie.jpg', title: 'Algérie', comingSoon: 'Bientôt disponible' },
    { isActive: false, image: '/flags/Maroc.png', title: 'Maroc', comingSoon: 'Bientôt disponible' },
    { isActive: false, image: '/flags/Egypte.png', title: 'Egypte', comingSoon: 'Bientôt disponible' },
  ];


  const handleClick = (country) => {
    if (country.isActive) {
      navigate('/gouvernorats'); 
    }
    else
    alert(`${country.title} will be available soon`); 
  };

  return (
    <div className="pays-container">
<div className='title-container-pays'>
  Welcome To
  <div id="flip">
    <div><div>Our Website</div></div>
    <div><div>Our Plateform</div></div>
    <div><div>Felblad</div></div>
  </div>
</div>
      <div className="list-container-home">
        {countries.map((country, index) => (
          <ListItem
            key={index}
            image={country.image}
            title={country.title}
            comingSoon={country.comingSoon}
            isActive={country.isActive}
            onClick={() => handleClick(country)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Pays;
