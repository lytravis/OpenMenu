import React from 'react';
import Banner from '../../components/Banner/Banner';
import './SplashPage.css';

const SplashPage = ({ src, title, description, price }) => {
  return (
    <div className="splash-container">
      <div className="splash-top">
        <Banner />
      </div>

      <div className="splash-bottom">mid</div>
      <div className="splash-mid">bot</div>
    </div>
  );
};

export default SplashPage;
