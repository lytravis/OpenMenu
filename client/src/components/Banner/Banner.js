import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  const imgBg =
    'https://cdn.discordapp.com/attachments/992996927169888286/993001911907266560/Restaurant-Instagram-Photography.png';
  const divStyle = {
    backgroundImage: `url(${imgBg})`,
    // backgroundRepeat: 'no-repeat',
    backgroundPosition: 'fit-content',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center',
  };

  return (
    <div>
      <div className="banner-container banner" style={divStyle}>
        <div className="banner-text">
          <h1>Say Yes To New Experiences</h1>
          <p>
            "The purpose of life is to live it, to taste experience to the
            utmost, to reach out eagerly and without fear for newer and richer
            experience." - Eleanor Roosevelt
          </p>
          <Link to="/events" className="general-btn btn-link">
            learn more
          </Link>
        </div>
        <div className="banner-img">
          {/* <img
            src="https://cdn.discordapp.com/attachments/992996927169888286/992996947776524368/different-spices-herbs-small-bowl-cooking-thai-food-background_52253-2960.webp"
            alt="splash-banner-img"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
