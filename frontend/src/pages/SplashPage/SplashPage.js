import React from 'react';
import Banner from '../../components/Banner/Banner';
import { Link } from 'react-router-dom';
import './SplashPage.css';

const SplashPage = () => {
  return (
    <div className="splash-container">
      <div className="splash-top">
        <Banner />
      </div>

      <div className="splash-mid">
        <div className="splash-type-container">
          <div className="splash-child btn-link">
            <Link to="/search/online" style={{ textDecoration: 'none' }}>
              <img
                src="https://cdn.discordapp.com/attachments/920377762068447282/927500295217512458/online-cooking-classs.jpg"
                alt="type1"
              />
              <div className="splash-info">Online Experiences</div>
            </Link>
          </div>
          <div className="splash-child btn-link">
            <Link to="/search/fine-dining" style={{ textDecoration: 'none' }}>
              <img
                src="https://cdn.discordapp.com/attachments/920377762068447282/927498450004738048/istockphoto-1081422898-612x612.jpg"
                alt="type1"
              />
              <div className="splash-info">Fine Dining</div>
            </Link>
          </div>
          <div className="splash-child btn-link">
            <Link
              to="/search/cooking-lessons"
              style={{ textDecoration: 'none' }}
            >
              <img
                src="https://cdn.discordapp.com/attachments/920377762068447282/927497897317117982/Super-Cooking-Vacation.jpg"
                alt="type1"
              />
              <div className="splash-info">Cooking Lessons</div>
            </Link>
          </div>
          <div className="splash-child btn-link">
            <Link to="/search/food-trucks" style={{ textDecoration: 'none' }}>
              <img
                src="https://media.discordapp.net/attachments/920377762068447282/927499689874571314/web.ae_.4.2.truckingaround.picA_.Alisha-Kapur.jpg?width=1074&height=676"
                alt="type1"
              />
              <div className="splash-info">Food Trucks</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="splash-bottom">
        <div className="splash-pic">
          <div className="splash">
            <p className="splash-p">Share Your Skills & Host An Event</p>

            <Link to="/events/new">
              <button type="button" className="general-btn btn-link">
                Host now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
