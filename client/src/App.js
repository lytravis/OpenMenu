import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from './components/auth/SignupFormPage';
import SingleListing from './pages/SingleListing/SingleListing';

// client/src/pages/SingleListing/SingleListing.js
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from './store/session';
import Header from './components/Header';
import { Modal } from './context/Modal';
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Header isLoaded={isLoaded} />
      {/* <button onClick={() => setShowModal(true)}>Modal</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h1>Hello I am a Modal</h1>
        </Modal>
      )} */}
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/events/:eventId">
            <SingleListing />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
