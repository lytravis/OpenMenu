import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEvents } from '../../store/event';
import Browse from '../../components/Browse/Browse';

import './Listings.css';

const Listings = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => Object.values(state.event));


  const [isLoaded, setIsLoaded] = useState(false);



  useEffect(() => {
    dispatch(getEvents()).then(() => setIsLoaded(true));
    return () => {
      setIsLoaded();
    };
  }, [dispatch]);

  return (
    isLoaded && (
      <div className="browseEventContainer">
        <h1>Browse all events</h1>
        <Browse events={events} />
      </div>
    )
  );
};

export default Listings;
