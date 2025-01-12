import React, { useState, useEffect } from 'react';
import './aboutUs.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      text: `L’aspect économique :
Le lancement de notre site web Felblad.com va contribuer à maitriser l'art de l'information, c'est un
guide virtuel vers des liens utiles pour les internautes afin de donner suite à leurs besoins.
Notre site garantit la fiabilité, la certitude des donnés afin de créer des réseaux entre différents acteurs   
économique, industriels, touristiques ... un bénéfice pour booster l'économie du pays, le commerce et
les relations internationales, un vrai itinéraire vers le monde entier.
Notre site web permet de projeter la lumière sur certaines zones moins connues du pays, d'augmenter
leur visibilité avec tout leur patrimoine (localisation des entreprises, commerces, sites touristiques...)
c'est un miroir qui reflète les moindres détails primordiaux dans les recherches.
Evidemment un tel projet avec une telle ambition, va permettre de créer de nouveaux postes et
logiquement diminuer le taux de chômage.`,
    },
    {
      text: `L’aspect social :
Ce projet qui répond aux profondes préoccupations citoyennes, sociales, c'est un échange qui adoptera
une charte garantissant un accès équitable :
-Aux bénéficiaires des régions les moins développés dans une optique de développement régional
-Aux femmes
Felblad.com est un site web guidé et sélectionné.
Felblad.com est un concept inédit, un portail polyglotte multilingue.
C’est une vitrine sur le monde entier et une fenêtre interactive sur notre univers, du village au pays en
passant par la cité et ses circonscriptions.
`,
    },
    {
      text: `En bref, c’est le tour de monde en un simple clic.
C’est l’accès à l’information locale, nationale et internationale. Les informations culturelles côtoient
les informations commerciales, industrielles, historiques, géographiques, technologiques… l’actualité
est conjuguée aux activités sociales ainsi qu’aux loisirs de manière digeste et interactive.
Business men, artistes, artisans, hommes et femmes de tous les continents chacun y trouve ce qu’il
cherche, dans sa langue maternelle.
Felblad.com va fournir toutes sortes d’informations dont nous avons besoin ; placards publicitaires,
liste des services, adresses, contacts petites annonces, histoires, météo et actualités de chaque pays.
Felblad.com permet nous clients de se faire connaitre leurs sociétés et leurs produits et être en fasse de marché.`,
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  // Convert '\n' in text to <br /> for proper rendering of line breaks
  const getTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };
  useEffect(() => {
    const text = document.getElementById('text');
    if (text) {
      let newDom = '';
      let animationDelay = 6;
      for (let i = 0; i < text.innerText.length; i++) {
        newDom += `<span class="char">${text.innerText[i] === ' ' ? '&nbsp;' : text.innerText[i]}</span>`;
      }
      text.innerHTML = newDom;
      const length = text.children.length;
      for (let i = 0; i < length; i++) {
        text.children[i].style['animation-delay'] = `${animationDelay * i}ms`;
      }
    }
  }, [currentSlide]);

  return (
    <div className="main-container">
      <div className="area">
      <ul className="circles">
          <li className="circle-1"></li>
          <li className="circle-2"></li>
          <li className="circle-3"></li>
          <li className="circle-4"></li>
          <li className="circle-5"></li>
          <li className="circle-6"></li>
          <li className="circle-7"></li>
          <li className="circle-8"></li>
          <li className="circle-9"></li>
          <li className="circle-10"></li>
        </ul>
        
        <div className="center-text-container">
          <div className="centered">
            <h2 className="about-us-title">A Propos Felblad</h2>
          </div>
          <div className="center">
            {/* Render the text with line breaks */}
            <p>{getTextWithLineBreaks(slides[currentSlide].text)}</p>
          </div>
        

        <div className="carousel-navigation">
          <div className="arrow-prev" onClick={handlePrev}>
            <IoIosArrowBack />
          </div>
          <div className="arrow-next" onClick={handleNext}>
            <IoIosArrowForward />
          </div></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
