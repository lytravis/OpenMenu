import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  updateUserName,
  updateUserEmail,
  updateUserPicture,
  updateUserPassword,
} from '../../store/session';

import './AccountSettings.css';

const AccountSettings = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  // console.log('USERSADSADASDASDASD', user.firstName);

  const [showNameForm, setShowNameForm] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nameErrorId, setNameErrorId] = useState('noUpdateNameError');

  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [emailErrorId, setEmailErrorId] = useState('noUpdateEmailError');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const [showPicForm, setShowPicForm] = useState(false);
  const [profilePic, setProfilePic] = useState('');
  const [profiePicErrorId, setProfilePicErrorId] = useState('noUpdatePicError');
  const [picErrorMessage, setPicErrorMessage] = useState('');

  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordErrorId, setPasswordErrorId] = useState(
    'noUpdatePasswordError'
  );
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  useEffect(() => {
    document.title = `Account Settings · OpenMenu`;
  }, []);

  useEffect(() => {
    setFirstName(user?.firstName);
    setLastName(user?.lastName);
    setEmail(user?.email);
    setProfilePic(user?.profilePic);
  }, [user]);

  const resetNameForm = () => {
    setFirstName(user?.firstName);
    setLastName(user?.lastName);
    setNameErrorId('noUpdateNameError');
    setShowNameForm(false);
  };

  const updateName = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      setNameErrorId('updateNameError');
      return;
    }
    const data = await dispatch(updateUserName(user.id, firstName, lastName));

    if (data[0] === 'Error') {
      setNameErrorId('updateNameError');
      return;
    } else {
      setNameErrorId('noUpdateNameError');
      setShowNameForm(false);
    }
  };

  const resetEmailForm = () => {
    setEmail(user?.email);
    setShowEmailForm(false);
    setEmailErrorId('noUpdateEmailError');
    setEmailErrorMessage('');
  };

  const updateEmail = async (e) => {
    e.preventDefault();
    if (!email) {
      setEmailErrorMessage('Please fill out the Email field.');
      setEmailErrorId('updateEmailError');
      return;
    }
    if (email === user?.email) {
      setShowEmailForm(false);
      return;
    }
    const data = await dispatch(updateUserEmail(user.id, email));

    if (data[0] === 'Error') {
      setEmailErrorId('updateEmailError');
      setEmailErrorMessage(data[1][0].split('email : ').join(''));
      return;
    } else {
      setEmailErrorId('noUpdateEmailError');
      setEmailErrorMessage('');
      setShowEmailForm(false);
    }
  };

  const resetPictureForm = () => {
    setProfilePic(user?.profilePic);
    setProfilePicErrorId('noUpdatePicError');
    setPicErrorMessage('');
    setShowPicForm(false);
  };

  const updateProfilePic = async (e) => {
    e.preventDefault();

    const regex =
      /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
    if (profilePic.length > 0 && !regex.test(profilePic)) {
      setProfilePicErrorId('updatePicError');
      setPicErrorMessage('Please add a valid Image URL.');
      return;
    }

    const data = await dispatch(updateUserPicture(user.id, profilePic));
    if (data[0] === 'Error') {
      setProfilePicErrorId('updatePicError');
      setPicErrorMessage('An error occured. Refresh the page and try again.');
      return;
    } else {
      setProfilePicErrorId('noUpdatePicError');
      setPicErrorMessage('');
      setShowPicForm(false);
    }
  };

  const resetPasswordForm = () => {
    setShowPasswordForm(false);
    setNewPassword('');
    setConfirmPassword('');
    setPasswordErrorId('noUpdatePasswordError');
    setPasswordErrorMessage('');
  };

  const updatePassword = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      setPasswordErrorId('updatePasswordError');
      setPasswordErrorMessage(
        'Please fill out the New Password and Confirm Password fields.'
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordErrorId('updatePasswordError');
      setPasswordErrorMessage(
        'New Password and Confirm Password fields must match.'
      );
      return;
    }

    const data = await dispatch(updateUserPassword(user.id, newPassword));
    if (data[0] === 'Error') {
      setPasswordErrorId('updatePasswordError');
      setPasswordErrorMessage(
        'An error occured. Refresh the page and try again.'
      );
    } else {
      setShowPasswordForm(false);
      setNewPassword('');
      setConfirmPassword('');
      setPasswordErrorId('noUpdatePasswordError');
      setPasswordErrorMessage('');
    }
  };

  return (
    <div className="accountSettingsContainer">
      <h1>Account</h1>
      {user?.id === 1 && (
        <h4 className="demoUserWarning">
          You cannot update the Demo User account information. Login as another
          user to update your account.
        </h4>
      )}
      {showNameForm ? (
        <div className="accountFormContainer">
          <div className="topRowAccount">
            <div className="accountHeader">Legal name</div>
            <div className="editAccountButton" onClick={resetNameForm}>
              Cancel
            </div>
          </div>
          <div className="accountInfo">
            This is the name on your government issued ID, which could be a
            license or a passport.
          </div>
          <form className="accountForm" onSubmit={updateName}>
            <div className="nameInputs">
              <div className="accountFormInputContainer">
                <label>First name</label>
                <input
                  name="firstName"
                  type="input"
                  maxLength="60"
                  required
                  autoComplete="off"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="accountFormInputContainer">
                <label>Last name</label>
                <input
                  name="lastName"
                  type="input"
                  maxLength="60"
                  required
                  autoComplete="off"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="accountFormUpdateErrorContainer">
              <button type="submit">Save</button>
              <div className="updateAccountError" id={nameErrorId}>
                Please fill out the First and Last Name fields.
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="accountFormContainer">
          <div className="topRowAccount">
            <div className="accountHeader">Legal name</div>
            {user?.id !== 1 && (
              <div
                className="editAccountButton"
                onClick={() => setShowNameForm(true)}
              >
                Edit
              </div>
            )}
          </div>
          <div className="accountInfo">{`${user?.firstName} ${user?.lastName}`}</div>
        </div>
      )}
      {showEmailForm ? (
        <div className="accountFormContainer">
          <div className="topRowAccount">
            <div className="accountHeader">Email</div>
            <div className="editAccountButton" onClick={resetEmailForm}>
              Cancel
            </div>
          </div>
          <div className="accountInfo">
            Use an email address you’ll always have access to.
          </div>
          <form className="accountForm" onSubmit={updateEmail}>
            <div className="nameInputs">
              <div className="accountFormInputContainer">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  maxLength="255"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="accountFormUpdateErrorContainer">
              <button type="submit">Save</button>
              <div className="updateAccountError" id={emailErrorId}>
                {emailErrorMessage}
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="accountFormContainer">
          <div className="topRowAccount">
            <div className="accountHeader">Email</div>
            {user?.id !== 1 && (
              <div
                className="editAccountButton"
                onClick={() => setShowEmailForm(true)}
              >
                Edit
              </div>
            )}
          </div>
          <div className="accountInfo">{`${user?.email}`}</div>
        </div>
      )}
      {showPicForm ? (
        <div className="accountFormContainer">
          <div className="topRowAccount">
            <div className="accountHeader">Profile picture</div>
            <div className="editAccountButton" onClick={resetPictureForm}>
              Cancel
            </div>
          </div>
          <div className="accountInfo">Enter a valid Image URL.</div>
          <form className="accountForm" onSubmit={updateProfilePic}>
            <div className="nameInputs">
              <div className="accountFormInputContainer extraLongInput">
                <label>Image URL</label>
                <input
                  name="image_url"
                  type="input"
                  maxLength="255"
                  value={profilePic}
                  onChange={(e) => setProfilePic(e.target.value)}
                />
              </div>
            </div>
            <div className="accountFormUpdateErrorContainer">
              <button type="submit">Save</button>
              <div className="updateAccountError" id={profiePicErrorId}>
                {picErrorMessage}
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="accountFormContainer">
          {user?.profilePic ? (
            <>
              <div className="topRowAccount" id="profilePicAccount">
                <div className="accountHeader">Profile picture</div>
                {user?.id !== 1 && (
                  <div
                    className="editAccountButton"
                    onClick={() => setShowPicForm(true)}
                  >
                    Edit
                  </div>
                )}
              </div>
              <div
                className="userPhoto accountInfo"
                style={{
                  backgroundImage: `url(${user.profilePic}), url(https://cdn.discordapp.com/attachments/920377762068447282/989335407344889887/912aaf251766976848e09cce8b136e66.jpg)`,
                }}
              ></div>
            </>
          ) : (
            <>
              <div className="topRowAccount">
                <div className="accountHeader">Profile picture</div>
                {user?.id !== 1 && (
                  <div
                    className="editAccountButton"
                    onClick={() => setShowPicForm(true)}
                  >
                    Edit
                  </div>
                )}
              </div>
              <div className="accountInfo">Not set</div>
            </>
          )}
        </div>
      )}
      {showPasswordForm ? (
        <div className="accountFormContainer">
          <div className="topRowAccount">
            <div className="accountHeader">Password</div>
            <div className="editAccountButton" onClick={resetPasswordForm}>
              Cancel
            </div>
          </div>
          <form className="accountForm" onSubmit={updatePassword}>
            <div className="nameInputs">
              <div className="accountFormInputContainer">
                <label>New password</label>
                <input
                  name="new_password"
                  type="password"
                  maxLength="60"
                  required
                  autoComplete="off"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="accountFormInputContainer">
                <label>Confirm password</label>
                <input
                  name="confirm_password"
                  type="password"
                  maxLength="60"
                  required
                  autoComplete="off"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="accountFormUpdateErrorContainer">
              <button type="submit">Save</button>
              <div className="updateAccountError" id={passwordErrorId}>
                {passwordErrorMessage}
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="accountFormContainer">
          <div className="topRowAccount">
            <div className="accountHeader">Password</div>
            {user?.id !== 1 && (
              <div
                className="editAccountButton"
                onClick={() => setShowPasswordForm(true)}
              >
                Edit
              </div>
            )}
          </div>
          <div className="accountInfo">***************</div>
        </div>
      )}
    </div>
  );
};

export default AccountSettings;
