import React from 'react';
import './location.css';

const LocationComponent = () => {
  const bizerteCoordinates = { lat: 37.2765, lng: 9.8737 };

  return (

    <div className="container-map">
    <div className="location-container">
      <div className='loca-text'>Felblad Localisation</div>
      <div
        className="gmap-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '85vh', 
        }}
      >
        <div
          className="gmap_canvas"
          style={{
            overflow: 'hidden',
            background: 'none !important',
            width: '400%',
            maxWidth: '1520px', 
          }}
        >
          <iframe
            width="500%"
            height="560"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=14+rue+de+tripoli+Bizerte+&t=&z=12&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LocationComponent;
