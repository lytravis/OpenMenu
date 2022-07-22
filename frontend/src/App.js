import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import SingleListing from './pages/SingleListing/SingleListing';
import CreateEvent from './pages/CreateEvent/CreateEvent';

import * as sessionActions from './store/session';
import Header from './components/Header';
import Footer from './components/Footer';
import Reviews from './components/Reviews/Reviews';
import SplashPage from './pages/SplashPage/SplashPage';
import Listings from './pages/Listings/Listings';
import EditEvent from './pages/EditEvent/EditEvent';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ManageEvents from './pages/ManageEvents/ManageEvents';
import SearchDisplay from './pages/SearchDisplay/SearchDisplay';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <div className="pageContainer">
          <Header isLoaded={isLoaded} />
          <div className="mainContent">
            <Switch>
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
              <Route exact path="/events/:eventId/edit">
                <EditEvent />
              </Route>
              <Route exact path="/reviews">
                <Reviews />
              </Route>
              <Route exact path="/events/:eventId">
                <SingleListing />
              </Route>
              <Route exact path="/search">
                <SearchDisplay />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
