import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./ProfileButton.css";

import { Modal } from "../../context/Modal";
import LoginForm from "../LoginFormModal/LoginForm";
import SignupFormPage from "../SignupFormPage";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

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
      <div className="profileButtonAndDropDown">
        <div className="profileButton" onClick={() => setShowMenu(!showMenu)}>
          <div className="threeLines">
            <div></div>
            <div></div>
            <div></div>
          </div>
          {user ? (
            <>
              {user.profilePic ? (
                <div
                  className="profileButtonUserIcon"
                  style={{
                    backgroundImage: `url(${user.profilePic}), url(https://res.cloudinary.com/dt8q1ngxj/image/upload/v1637102034/Capstone/noProfPic_uxrkv7.png)`,
                  }}
                ></div>
              ) : (
                <div
                  className="profileButtonUserIcon"
                  style={{
                    backgroundImage:
                      "url(https://res.cloudinary.com/dt8q1ngxj/image/upload/v1637102034/Capstone/noProfPic_uxrkv7.png",
                  }}
                ></div>
              )}
            </>
          ) : (
            <div
              className="profileButtonUserIcon"
              style={{
                backgroundImage: `url(https://res.cloudinary.com/dt8q1ngxj/image/upload/v1637102034/Capstone/noProfPic_uxrkv7.png)`,
              }}
            ></div>
          )}
        </div>
        {showMenu && (
          <div className="profileDropDown">
            {user ? (
              <div className="loggedInProfileDropDown">
                <div>
                  {user.firstName} {user.lastName}
                </div>

                <NavLink className="nav-link" to="/host">
                  <div className="dropdown-links">My Events</div>
                </NavLink>

                <NavLink className="nav-link" exact to={`/events/new`}>
                  <div className="dropdown-links">Host an Event</div>
                </NavLink>
                <div className="dropDownLine"></div>
                <div className="dropdown-logout" onClick={logout}>
                  Log Out
                </div>
              </div>
            ) : (
              <div className="loggedOutProfileDropDown">
                <div onClick={() => setShowLoginModal(true)}>Log in</div>
                <div onClick={() => setShowSignUpModal(true)}>Sign up</div>
              </div>
            )}
          </div>
        )}
      </div>
      {showLoginModal && (
        <Modal onClose={() => setShowLoginModal(false)}>
          <LoginForm />
        </Modal>
      )}
      {showSignUpModal && (
        <Modal onClose={() => setShowSignUpModal(false)}>
          <SignupFormPage />
        </Modal>
      )}
    </>
  );
}

export default ProfileButton;
