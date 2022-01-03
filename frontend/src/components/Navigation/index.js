import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className="nav-container">
      <div className="nav-contents">
        <NavLink exact to="/" id="nav-logo">
          OpenMenu
        </NavLink>
        <NavLink className="nav-link" exact to={`/events`}>
          Experiences
        </NavLink>
        <NavLink className="nav-link" exact to={`/events/new`}>
          Host an event
        </NavLink>
        {/* <NavLink className="nav-nav" exact to={`/users/${sessionUser?.id}`}>
          Manage events
        </NavLink> */}
        <div className="nav-right">{isLoaded && sessionLinks}</div>
      </div>
    </div>
  );
}

export default Navigation;
