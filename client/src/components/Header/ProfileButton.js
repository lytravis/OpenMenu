import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import LoginFormModal from '../auth/LoginFormModal';
import { Modal } from '../../context/Modal';
import './ProfileButton.css';
import LoginForm from '../auth/LoginFormModal/LoginForm';
import SignupForm from '../auth/SignupFormPage/SignUpForm';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  useEffect(() => {
    if (showSignUpModal || showLoginModal) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [showSignUpModal, showLoginModal]);

  if (showLoginModal) {
    <LoginFormModal />;
  }

  // console.log('@@@@@@@@@@@@@@@@@@@@@@@ user', user?.profilePic);

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
                    backgroundImage: `url(${user.profilePic}), url(https://cdn.discordapp.com/attachments/920377762068447282/989335407344889887/912aaf251766976848e09cce8b136e66.jpg)`,
                  }}
                ></div>
              ) : (
                <div
                  className="profileButtonUserIcon"
                  style={{
                    backgroundImage:
                      'url(https://cdn.discordapp.com/attachments/920377762068447282/989335407344889887/912aaf251766976848e09cce8b136e66.jpg',
                  }}
                ></div>
              )}
            </>
          ) : (
            <div
              className="profileButtonUserIcon"
              style={{
                backgroundImage: `url(https://cdn.discordapp.com/attachments/920377762068447282/989335407344889887/912aaf251766976848e09cce8b136e66.jpg)`,
              }}
            ></div>
          )}
        </div>
        {showMenu && (
          <div className="profileDropDown">
            {user ? (
              <div className="loggedInProfileDropDown">
                <Link to="/events">
                  <div className="profileDropDownLinks">New Experiences</div>
                </Link>
                <Link to="/events/new">
                  <div className="profileDropDownLinks">Host an Event</div>
                </Link>
                <Link to="/manage">
                  <div className="profileDropDownLinks">Manage Events</div>
                </Link>
                <Link to="/account-settings">
                  <div className="profileDropDownLinks">Account</div>
                </Link>
                <div className="dropDownLine"></div>
                <div className="logOutButton" onClick={logout}>
                  Log out
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
          <LoginForm
            setShowLoginModal={setShowLoginModal}
            showLoginModal={showLoginModal}
          />
        </Modal>
      )}
      {showSignUpModal && (
        <Modal onClose={() => setShowSignUpModal(false)}>
          <SignupForm setShowSignUpModal={setShowSignUpModal} />
        </Modal>
      )}
    </>
  );
}
// onClose={() => setShowSignUpModal(false)}
export default ProfileButton;
