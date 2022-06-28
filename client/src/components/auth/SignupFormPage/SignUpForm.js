import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signup } from '../../../store/session';
import './signup.css';

function SignupFormPage({ showSignModel, setShowSignUpModal }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [signUpErrors, setSignUpErrors] = useState([]);

  const [passwordLable, setPasswordLabel] = useState('passwordLable');
  const [emailLable, setEmailLabel] = useState('emailLable');
  const [firstNameLable, setFirstNameLabel] = useState('firstNameLable');
  const [lastNameLable, setLastNameLabel] = useState('lastNameLable');
  const [borderError, setBorderError] = useState('noBorderError');
  const [loginError, setLoginError] = useState('hidden');

  const [signUpEmailError, setSignUpEmailError] = useState('noEmailErrorYet');
  const [signUpEmailErrorMessaage, setSignUpEmailErrorMessage] = useState('');
  const [signUpEmailErrorVisible, setSignUpEmailErrorVisible] =
    useState('hidden');

  const [firstNameError, setFirstNameError] = useState('noFirstNameErrorYet');
  const [firstNameErrorMessaage, setFirstNameErrorMessage] = useState('');
  const [firstNameErrorVisible, setFirstNameErrorVisible] = useState('hidden');

  const [lastNameError, setLastNameError] = useState('noLastNameErrorYet');
  const [lastNameErrorMessaage, setLastNameErrorMessage] = useState('');
  const [lastNameErrorVisible, setLastNameErrorVisible] = useState('hidden');

  const [passwordError, setPasswordError] = useState('noPasswordErrorYet');
  const [passwordErrorMessaage, setPasswordErrorMessage] = useState('');
  const [passwordErrorVisible, setPasswordErrorVisible] = useState('hidden');

  // if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cleanEmail = email.toLowerCase();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        signup({
          email,
          firstName,
          lastName,
          profilePic,
          password,
        })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        } else {
          resetSignUpForm();
        }
      });
    }
    return setErrors([
      'Confirm Password field must be the same as the Password field',
    ]);
  };

  const resetSignUpForm = () => {
    setShowSignUpModal(false);
    setSignUpErrors([]);
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    resetErrors();
    setLoginError('hidden');
  };

  const resetErrors = () => {
    setSignUpEmailError('noEmailErrorYet');
    setSignUpEmailErrorMessage('');
    setSignUpEmailErrorVisible('hidden');
    setFirstNameError('noFirstNameErrorYet');
    setFirstNameErrorMessage('');
    setFirstNameErrorVisible('hidden');
    setLastNameError('noLastNameErrorYet');
    setLastNameErrorMessage('');
    setLastNameErrorVisible('hidden');
    setPasswordError('noPasswordErrorYet');
    setPasswordErrorMessage(''[1]);
    setPasswordErrorVisible('hidden');
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
    if (email.length > 0) {
      setEmailLabel('emailSet');
    } else {
      setEmailLabel('emailLable');
    }
  }, [email.length]);

  useEffect(() => {
    if (firstName.length > 0) {
      setFirstNameLabel('firstNameSet');
    } else {
      setFirstNameLabel('firstNameLable');
    }
  }, [firstName.length]);

  useEffect(() => {
    if (lastName.length > 0) {
      setLastNameLabel('lastNameSet');
    } else {
      setLastNameLabel('lastNameLable');
    }
  }, [lastName.length]);

  useEffect(() => {
    resetErrors();
    if (signUpErrors.length) {
      for (const error of signUpErrors) {
        let errorArray = error.split(' : ');
        if (errorArray[0] === 'email') {
          setSignUpEmailError('signUpEmailError');
          setSignUpEmailErrorMessage(errorArray[1]);
          setSignUpEmailErrorVisible('visible');
        } else if (errorArray[0] === 'first_name') {
          setFirstNameError('firstNameError');
          setFirstNameErrorMessage(errorArray[1]);
          setFirstNameErrorVisible('visible');
        } else if (errorArray[0] === 'last_name') {
          setLastNameError('lastNameError');
          setLastNameErrorMessage(errorArray[1]);
          setLastNameErrorVisible('visible');
        } else if (errorArray[0] === 'password') {
          setPasswordError('passwordError');
          setPasswordErrorMessage(errorArray[1]);
          setPasswordErrorVisible('visible');
        }
      }
    }
  }, [signUpErrors]);

  return (
    <>
      <div className="loginModal">
        <div className="loginFormContainer">
          <div className="topRowForm">
            <div className="xToClose" onClick={resetSignUpForm}>
              <i className="fas fa-times"></i>
            </div>
            <h3>Sign up</h3>
            <div></div>
          </div>
          <h2>Welcome to OpenMenu</h2>
          <form id="signUpForm" autoComplete="off" onSubmit={handleSubmit}>
            <div className="formField">
              <input
                id={firstNameError}
                name="email"
                type="text"
                required
                autoComplete="off"
                maxLength="60"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label id={firstNameLable}>First Name</label>
              <div
                className="loginError"
                style={{ visibility: firstNameErrorVisible }}
              >
                <div>!</div>
                <span>{firstNameErrorMessaage}</span>
              </div>
            </div>
            <div className="formField">
              <input
                id={lastNameError}
                name="email"
                type="text"
                required
                autoComplete="off"
                maxLength="60"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <label id={lastNameLable}>Last Name</label>
              <div
                className="loginError"
                style={{ visibility: lastNameErrorVisible }}
              >
                <div>!</div>
                <span>{lastNameErrorMessaage}</span>
              </div>
            </div>
            <div className="formField">
              <input
                id={signUpEmailError}
                name="email"
                type="text"
                required
                autoComplete="off"
                maxLength="255"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label id={emailLable}>Email</label>
            </div>
            <div className="loginError" style={{ visibility: loginError }}>
              <div>!</div>
              <span> Please provide a valid email address.</span>
            </div>
            <div className="formField">
              <input
                // id={signUpEmailError}
                name="profilePic"
                type="text"
                required
                autoComplete="off"
                maxLength="255"
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
              />
              <label id={emailLable}>Profile Picture URL</label>
            </div>
            <div
              className="loginError"
              style={{ visibility: signUpEmailErrorVisible }}
            >
              <div>!</div>
              <span>{signUpEmailErrorMessaage}</span>
            </div>
            <div className="formField">
              <input
                id={passwordError}
                name="password"
                type="password"
                required
                autoComplete="off"
                maxLength="100"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label id={passwordLable}>Password</label>
            </div>
            <div className="formField">
              <input
                id={passwordError}
                name="confirm password"
                type="password"
                required
                autoComplete="off"
                maxLength="100"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label id={passwordLable}> Confirm Password</label>
            </div>
            <div className="loginError" style={{ visibility: loginError }}>
              <div>!</div>
              <span> Passwords must match.</span>
            </div>
            <div
              className="loginError"
              style={{ visibility: passwordErrorVisible }}
            >
              <div>!</div>
              <span>{passwordErrorMessaage}</span>
            </div>
            <div className="loginButtons">
              <button className="formButton" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupFormPage;
