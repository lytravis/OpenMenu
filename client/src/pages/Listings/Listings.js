import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEvents } from '../../store/event';
import Browse from '../../components/Browse/Browse';

import './Listings.css';

const Listings = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => Object.values(state.event));

  // const sortedEvents = events.filter((event) => event.Type.name === 'Online');

  // const sortedEvents = events.sort((a, b) => {
  //   a = a.name.toLowerCase();
  //   b = b.name.toLowerCase();
  //   if (a < b) {
  //     return -1;
  //   }
  //   if (a > b) {
  //     return 1;
  //   }
  //   return 0;
  // });

  const [isLoaded, setIsLoaded] = useState(false);

  // console.log('events ------------->', events);
  // console.log('sortedEvents ------------->', sortedEvents);
  // console.log('sorted ------------->', sortedEvents);

  useEffect(() => {
    // dispatch(getEvent(eventId));
    dispatch(getEvents()).then(() => setIsLoaded(true));
    return () => {
      setIsLoaded();
    };
  }, [dispatch]);

  return (
    <div className="browseEventContainer">
      <h1>Browse all events</h1>
      <Browse events={events} />
    </div>
  );
};

export default Listings;
