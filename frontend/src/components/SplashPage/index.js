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
          <div className="splash-info">
            <p>Experience More</p>

            <Link to="/events">
              <button type="button" className="splash-btn">
                Explore
              </button>
            </Link>
          </div>
        </div>
        <div className="splash-type-container">
          <div></div>
        </div>
      </div>
      <div className="splash-h1">SPLASH</div>
    </>
  );
};

export default SplashPage;
