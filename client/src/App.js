import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from './components/auth/SignupFormPage';
import SingleListing from './pages/SingleListing/SingleListing';
import CreateEvent from './pages/CreateEvent/CreateEvent';

// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from './store/session';
import Header from './components/Header';
import Reviews from './components/Reviews/Reviews';
import SplashPage from './pages/SplashPage/SplashPage';
import Listings from './pages/Listings/Listings';
import EditEvent from './pages/EditEvent/EditEvent';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ManageEvents from './pages/ManageEvents/ManageEvents';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
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
          <Route exact path="/">
            <SplashPage />
          </Route>
          <ProtectedRoute exact path="/events/new">
            <CreateEvent />
          </ProtectedRoute>
          <ProtectedRoute exact path="/manage">
            <ManageEvents />
          </ProtectedRoute>
          <Route exact path="/events">
            <Listings />
          </Route>
          <Route exact path="/events/:eventId">
            <SingleListing />
          </Route>
          <Route exact path="/events/:eventId/edit">
            <EditEvent />
          </Route>
          <Route exact path="/reviews">
            <Reviews />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
