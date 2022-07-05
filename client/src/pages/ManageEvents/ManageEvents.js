import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import UserEvents from '../../components/UserEvents/UserEvents';
import { getEvents, removeEvent } from '../../store/event';
import { getRSVP, getAllRsvps, removeRSVP } from '../../store/reservation';

const ManageEvents = () => {
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);
  const { eventId } = useParams();
  const history = useHistory();

  const events = useSelector((state) => Object.values(state.event));
  const images = useSelector((state) => Object.values(state.image));
  const hostId = useSelector((state) => state.session.user.id);

  const userId = useSelector((state) => state.session.user.id);
  const user = useSelector((state) => state.session.user);

  // console.log('************* userID', userId);

  const hostedEvents = events.filter((event) => event?.userId === hostId);

  let reservations = useSelector((state) => state?.reservation?.reservations);

  // console.log('------hosted events', hostedEvents);
  // console.log('%%%%%%%%%%%%%%%%%%%%% rsvp', reservations);

  useEffect(() => {
    dispatch(getRSVP(userId));
    dispatch(getEvents()).then(() => setIsLoaded(true));
    // return () => {
    //   setIsLoaded();
    // };
  }, [dispatch, userId]);

  return (
    <div className="yourEventsContainer">
      <UserEvents
      
        hostedEvents={hostedEvents}
        reservations={reservations}
        user={user}
      />
    </div>
  );
};

export default ManageEvents;