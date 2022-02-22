import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  // let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = <ProfileButton user={sessionUser} />;
  // } else {
  //   sessionLinks = (
  //     <>
  //       <LoginFormModal />
  //       <NavLink className="nav-signup" to="/signup">
  //         Sign Up
  //       </NavLink>
  //     </>
  //   );
  // }

  return (
    <header>
      <NavLink exact to="/" id="nav-logo">
        OpenMenu
      </NavLink>
      <NavLink className="nav-link" exact to={`/events`}>
        Experiences
      </NavLink>
      <ProfileButton user={sessionUser} />
      {/* <div className="nav-right">{isLoaded && sessionLinks}</div> */}
    </header>
  );
}

export default Navigation;

//
