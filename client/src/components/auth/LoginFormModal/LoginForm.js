import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../../store/session';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/session';
import './LoginForm.css';

function LoginForm({ setShowLoginModal }) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [borderError, setBorderError] = useState('noBorderError');
  const [loginError, setLoginError] = useState('hidden');

  const [passwordLable, setPasswordLabel] = useState('passwordLable');
  const [emailLable, setEmailLabel] = useState('emailLable');

  // DEMO LOG IN
  const demoLogin = () => {
    setCredential('demo@user.io');
    setPassword('password');
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
          setBorderError('borderError');
        } else {
          resetLoginForm();
        }

        setShowLoginModal(false);
      }
    );
  };

  const resetLog = () => {
    setShowLoginModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        } else {
          resetLoginForm();
        }
      }
    );
  };

  const resetLoginForm = () => {
    setShowLoginModal(false);
    setErrors([]);
    setCredential('');
    setPassword('');
    setBorderError('noBorderError');
    setLoginError('hidden');
  };

  useEffect(() => {
    if (errors.length > 0) {
      setLoginError('visible');
    }
  }, [errors]);

  useEffect(() => {
    if (password.length > 0) {
      setPasswordLabel('passwordSet');
    } else {
      setPasswordLabel('passwordLable');
    }
  }, [password.length]);

  useEffect(() => {
    if (credential.length > 0) {
      setEmailLabel('emailSet');
    } else {
      setEmailLabel('emailLable');
    }
  }, [credential.length]);

  return (
    <>
      <div className="loginModal">
        <div className="loginFormContainer">
          <div className="topRowForm">
            <div className="xToClose" onClick={resetLoginForm}>
              <i className="fas fa-times"></i>
            </div>
            <h3>Login</h3>
            <div></div>
          </div>
          <h2>Welcome to OpenMenu</h2>
          <form id="signUpForm" autoComplete="off" onSubmit={handleSubmit}>
            <div className="formField">
              <input
                className={borderError}
                name="email"
                type="text"
                required
                autoComplete="off"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
              />
              <label id={emailLable}>Email</label>
            </div>
            <div className="formField">
              <input
                className={borderError}
                name="password"
                type="password"
                required
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label id={passwordLable}>Password</label>
            </div>
            <div className="loginError" style={{ visibility: loginError }}>
              <div>!</div>
              <span> Email or password is invalid.</span>
            </div>
            <div className="loginButtons">
              <button  className="formButton" type="submit">
                Login
              </button>
              <button
                id="demoLoginButton"
                className="formButton"
                onClick={demoLogin}
              >
                Demo Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
