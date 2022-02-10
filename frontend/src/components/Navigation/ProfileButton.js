import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./ProfileButton.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  // const user = useSelector((state) => state.session.user);
  // console.log("THIS BE THE USER", user);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <div className="container-profile">
        <img className="nav-user-pic" src={user.profilePic} alt="profilePic" />
        <button className="nav-btn" onClick={openMenu}>
          <i className="fas fa-utensils fa-2x" />
        </button>
        {showMenu && (
          <div className="profile-dropdown">
            <li>
              {user.firstName} {user.lastName}
            </li>

            <NavLink className="nav-link" to="/host">
              <div className="dropdown-links">My Events</div>
            </NavLink>

            <NavLink className="nav-link" exact to={`/events/new`}>
              <div className="dropdown-links">Host an Event</div>
            </NavLink>

            <div className="dropdown-logout">
              <button onClick={logout}>Log Out</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProfileButton;
