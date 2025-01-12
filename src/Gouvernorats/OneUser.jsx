import  React,{useState} from "react";
import { FaArrowLeft, FaArrowRight, FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './OneUser.css'; 
import Footer from'../Footer'; 
import { FaTimes } from "react-icons/fa";
const sallesDeFetes = [
    {
      name: "Le Grand Palais",
      logo_url: "/logo11.png",
        images_url: [
            "/image3.jpg",
            "/image31.jpg"
          ],
      location: "Tunis",
      address: "123 Avenue de la République, Tunis, Tunisia",
      categories: ["Weddings", "Corporate Events", "Birthdays", "Conferences"],
      services: [
        {
          name: "Catering",
          description: "Customizable catering options to suit all types of events, from small gatherings to large banquets."
        },
        {
          name: "Decorations",
          description: "Elegant decoration packages to match the theme of your event, including floral arrangements, lighting, and more."
        },
        {
          name: "Sound & Lighting",
          description: "State-of-the-art sound and lighting systems to ensure your event is illuminated and has the best acoustics."
        },
        {
          name: "Event Planning",
          description: "Professional event planners who will help you organize every detail of your event, from start to finish."
        },
        {
          name: "DJ & Music",
          description: "Experienced DJs providing a wide range of music to keep your guests entertained throughout the event."
        },
        {
          name: "Security",
          description: "Professional security personnel to ensure the safety and smooth operation of your event."
        },
        {
          name: "Parking",
          description: "Ample parking space for guests, ensuring easy access to the venue."
        },
        {
          name: "Photographer",
          description: "Professional photographers to capture the best moments of your event."
        },
        {
          name: "Children's Entertainment",
          description: "Activities and entertainment designed for children, including games, clowns, and face painting."
        },
        {
          name: "Transportation",
          description: "Transportation services to and from the venue for your guests, including shuttle buses and private vehicles."
        }
      ]
    },
    {
      name: "Le Château des Rêves",
      logo_url: "/logo12.png",
      images_url: [
        "/image1.jpg",
        "/image12.jpg",

      ],
      location: "Sfax",
      address: "456 Boulevard des Rêves, Sfax, Tunisia",
      categories: ["Weddings", "Anniversaries", "Banquets", "Concerts"],
      services: [
        {
          name: "Catering",
          description: "Gourmet cuisine prepared by expert chefs, offering a variety of menus for all tastes and preferences."
        },
        {
          name: "Luxury Car Hire",
          description: "Elegant car rental services for transportation, including luxury cars and limousines."
        },
        {
          name: "Stage & Set Design",
          description: "Full stage and set design services for theatrical events, performances, and shows."
        },
        {
          name: "Private Rooms",
          description: "Private rooms for VIPs or smaller, more intimate gatherings."
        },
        {
          name: "Event Coordination",
          description: "Full event coordination services, ensuring your event goes off without a hitch."
        },
        {
          name: "Security",
          description: "Highly trained security teams to provide a safe environment for guests and performers."
        },
        {
          name: "Photo Booth",
          description: "Fun photo booths with props and instant prints for guests to enjoy."
        },
        {
          name: "Stage Lighting",
          description: "High-quality stage lighting setups for performances, parties, and special effects."
        },
        {
          name: "Valet Parking",
          description: "Valet parking service for guests to ensure a seamless experience upon arrival."
        },
        {
          name: "Sound System",
          description: "High-end sound system rental for speeches, music, and entertainment."
        }
      ]
    },
    {
      name: "La Villa Étoilée",
      logo_url: "/logo13.png",
      images_url: [
        "/image2.jpg",
        "/image21.jpg"
      ],
      location: "Carthage",
      address: "789 Avenue des Etoiles, Carthage, Tunisia",
      categories: ["Weddings", "Gala Dinners", "Product Launches", "Corporate Seminars"],
      services: [
        {
          name: "Catering",
          description: "Exclusive catering services offering a variety of international cuisines and personalized menus."
        },
        {
          name: "Event Hosting",
          description: "Our expert hosts provide seamless event hosting services, from managing guests to coordinating the event."
        },
        {
          name: "Dance Floor",
          description: "A spacious dance floor for parties, weddings, and celebrations with the latest sound system."
        },
        {
          name: "Stage Production",
          description: "Full-scale stage production including equipment, lighting, and setup for concerts and shows."
        },
        {
          name: "Live Music",
          description: "Live bands and musicians for all types of events, including jazz, classical, and contemporary music."
        },
        {
          name: "Bridal Suite",
          description: "Private bridal suites for couples to relax and prepare for their special day."
        },
        {
          name: "24/7 Customer Support",
          description: "Our team provides 24/7 assistance for any questions or needs during the planning process."
        },
        {
          name: "Gift Bags",
          description: "Customizable gift bags for guests to take home as a memorable token of the event."
        },
        {
          name: "Smoking Area",
          description: "Designated smoking areas equipped with seating and comfort for smokers."
        },
        {
          name: "Event Setup & Breakdown",
          description: "Complete event setup and breakdown service to ensure everything runs smoothly from start to finish."
        }
      ]
    }
  ];
  const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false); 
    const [popupImage, setPopupImage] = useState('');  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    const openPopup = (image) => {
      setPopupImage(image);
      setIsPopupOpen(true); // Open the popup
    };
  
    const closePopup = () => {
      setIsPopupOpen(false); // Close the popup
      setPopupImage(''); // Clear the image
    };
  
    return (
      <div className="carousel">
        <img
          src={images[currentIndex]}
          alt="Carousel"
          className="carousel-image"

        />
        <div className="carousel-buttons" onClick={() => openPopup(images[currentIndex])} >
          <button onClick={prevSlide} className="carousel-button">
            <FaArrowLeft />
          </button>
          <button onClick={nextSlide} className="carousel-button">
            <FaArrowRight />
          </button>
        </div>
  
        {/* Popup for the clicked image */}
        {isPopupOpen && (
          <div className="image-popup">
            <div className="popup-overlay" onClick={closePopup}></div>
            <div className="popup-content">
              <img src={popupImage} alt="Popup" className="popup-image" />
              <button className="close-popup" onClick={closePopup}>
                <FaTimes />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  const ServiceList = ({ services }) => {
    return (
      <div className="services">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <span className="category-icon"><FaPhoneAlt /></span>
            <div>
              <h4>{service.name}</h4>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  const OneUser = () => {
    const venue = sallesDeFetes[0]; // Change to loop over the list if needed
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupImage, setPopupImage] = useState('');
  
    const openPopup = (image) => {
      setPopupImage(image);
      setIsPopupOpen(true);
    };
  
    const closePopup = () => {
      setIsPopupOpen(false);
      setPopupImage('');
    };
  
    return (
      <div className="oneUser-container">
        <div className="container">
          <div className="left-section">
            <div className="ad">Ad Section</div>
          </div>
  
          <div className="middle-section">
            <Carousel images={venue.images_url} />
  
            <div className="details">
              <div className="logo-container">
                <img
                  src={venue.logo_url}
                  alt="Logo"
                  className="logo"
                  onClick={() => openPopup(venue.logo_url)} // Open popup when logo is clicked
                />
                <div className="venue-details">
                  <h2 className="venue-name">{venue.name}</h2>
                  <p>{venue.location}</p>
                  <hr />
                  <div className="categories">
                    {venue.categories.map((category, index) => (
                      <div key={index} className="category">
                        <span className="category-icon"><FaPhoneAlt /></span>
                        <span>{category}</span>
                        <hr className="line"/>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="map">
                  <div className="map-container">
                    <iframe
                      src={`https://www.google.com/maps?q=${venue.address}&output=embed`}
                      title="Venue Location"
                      width="100%"
                      height="300"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
  
              <div className="description">
                <p>Description of the place...</p>
              </div>
  
              <ServiceList services={venue.services} />
  
              <div className="contact">
                <div className="contact-info">
                  <h3>Contact Client</h3>
                  <div className="social-icons">
                    <FaPhoneAlt />
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="right-section">
            <div className="ad">Ad Section</div>
          </div>
        </div>
  
        {/* Popup for user image */}
        {isPopupOpen && (
          <div className="image-popup-logo">
            <div className="popup-overlay-logo" onClick={closePopup}></div>
            <div className="popup-content-logo">
              <img src={popupImage} alt="Popup" className="popup-image-logo" />
              <button className="close-popup-logo" onClick={closePopup}>
                <FaTimes />
              </button>
            </div>
          </div>
        )}
        <Footer/>
      </div>
    );
  };
  
  export default OneUser;