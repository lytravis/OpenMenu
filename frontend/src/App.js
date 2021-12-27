import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { Modal } from "./context/Modal";
import Events from "./components/Events";
import CreateEvent from "./components/CreateEvent";
import UserProfile from "./components/UserProfile";
import HostedEvents from "./components/HostedEvents";
import SingleEvent from "./components/SingleEvent";
import ReviewForm from "./components/Reviews/ReviewForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <button onClick={() => setShowModal(true)}>Modal</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h1>Hello I am a Modal</h1>
        </Modal>
      )}
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
          <Route exact path="/host">
            <HostedEvents />
          </Route>
          <Route exact path="/events/new">
            <CreateEvent />
          </Route>
          <Route exact path="/users/:userId">
            <UserProfile />
          </Route>
          <Route exact path="/events/:eventId">
            <SingleEvent />
          </Route>
          <Route exact path="/reviews/new">
            <ReviewForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

//testfrontend
export default App;
