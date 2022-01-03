import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getTypes } from "../../store/type";
import "./SplashPage.css";

const SplashPage = () => {
  const dispatch = useDispatch();
  const eventTypes = useSelector((state) => Object.values(state.type));
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  // console.log("$$$$$$$$ eventTypes", eventTypes);

  return (
    <>
      <div className="splash-container">
        <div className="splash-picture">
          <div className="splash">
            <p>Not sure what to do?  Perfect.</p>

            <Link to="/events">
              <button type="button" className="splash-btn">
                I'm flexible
              </button>
            </Link>
          </div>
        </div>
        <div className="splash-type-container">
          <div className="splash-child">
            <Link to="/events">
              <img
                src="https://cdn.discordapp.com/attachments/920377762068447282/927500295217512458/online-cooking-classs.jpg"
                alt="type1"
              />
            </Link>
            <div className="splash-info">Online Experiences</div>
          </div>
          <div className="splash-child">
            <Link to="/events">
              <img
                src="https://cdn.discordapp.com/attachments/920377762068447282/927498450004738048/istockphoto-1081422898-612x612.jpg"
                alt="type1"
              />
            </Link>
            <div className="splash-info">Fine Dining</div>
          </div>
          <div className="splash-child">
            <Link to="/events">
              <img
                src="https://cdn.discordapp.com/attachments/920377762068447282/927497897317117982/Super-Cooking-Vacation.jpg"
                alt="type1"
              />
            </Link>
            <div className="splash-info">Cooking Lessons</div>
          </div>
          <div className="splash-child">
            <Link to="/events">
              <img
                src="https://media.discordapp.net/attachments/920377762068447282/927499689874571314/web.ae_.4.2.truckingaround.picA_.Alisha-Kapur.jpg?width=1074&height=676"
                alt="type1"
              />
            </Link>
            <div className="splash-info">Food Trucks</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SplashPage;
