import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import LoginFormModal from '../auth/LoginFormModal';
import { Modal } from '../../context/Modal';
import './ProfileButton.css';
import LoginForm from '../auth/LoginFormModal/LoginForm';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  // const logger = (
  //   <div className="loginModal">
  //     <div className="loginFormContainer">
  //       <div className="topRowForm">
  //         <div className="xToClose" onClick={resetLoginForm}>
  //           <i className="fas fa-times"></i>
  //         </div>
  //         <h3>Login</h3>
  //         <div></div>
  //       </div>
  //       <h2>Welcome to ChihuaWalk</h2>
  //       <form id="signUpForm" autoComplete="off" onSubmit={onLogin}>
  //         <div className="formField">
  //           <input
  //             className={borderError}
  //             name="email"
  //             type="text"
  //             required
  //             autoComplete="off"
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
  //           />
  //           <label id={emailLable}>Email</label>
  //         </div>
  //         <div className="formField">
  //           <input
  //             className={borderError}
  //             name="password"
  //             type="password"
  //             required
  //             autoComplete="off"
  //             value={password}
  //             onChange={(e) => setPassword(e.target.value)}
  //           />
  //           <label id={passwordLable}>Password</label>
  //         </div>
  //         <div className="loginError" style={{ visibility: loginError }}>
  //           <div>!</div>
  //           <span> Email or password is invalid.</span>
  //         </div>
  //         <div className="loginButtons">
  //           <button className="formButton" type="submit">
  //             Login
  //           </button>
  //           <button
  //             id="demoLoginButton"
  //             className="formButton"
  //             onClick={demoLogin}
  //           >
  //             Demo Login
  //           </button>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // );

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
              {user.profile_pic ? (
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
                <Link to="/">
                  <div className="profileDropDownLinks">New Experiences</div>
                </Link>
                <Link to="/">
                  <div className="profileDropDownLinks">Host an Event</div>
                </Link>
                <Link to="/">
                  <div className="profileDropDownLinks">
                    Manage Reservations
                  </div>
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
        <Modal>
          <LoginForm setShowLoginModal={setShowLoginModal} />
        </Modal>
      )}
      {/* {showSignUpModal && (
        <Modal onClose={() => setShowSignUpModal(false)}>
          <SignupFormPage />
        </Modal>
      )} */}
    </>
  );
}

export default ProfileButton;
