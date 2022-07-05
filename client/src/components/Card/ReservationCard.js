import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import EventsHolder from '../EventsHolder/EventsHolder';
import './ReservationCard.css';

import { getImages } from '../../store/image';
import { getEvents, removeEvent } from '../../store/event';
// import EditEvent from '../EditEvent';

import ReservationSlider from '../ImageSlider/ReservationSlider';

const ReservationCard = ({ event, hosted }) => {
  const dispatch = useDispatch();
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showError, setShowError] = useState(false);

  const images = useSelector((state) => Object.values(state.image));
  const eventImages = images.filter((image) => image.eventId == event.id);

  console.log('&&&&&&&&&&&&&&&&&&&&> images', images);
  console.log('%%%%%%%%%%%%%>> eventImages', eventImages);

  const eventYear = event.createdAt.slice(0, 4);

  const eventMonth = event.createdAt.slice(5, 10);

  const [isLoaded, setIsLoaded] = useState(true);
  // const [showDelete, setShowDelete] = useState(false);

  const userId = useSelector((state) => state.session.user.id);

  console.log('**************event', event);
  // console.log('**************event IMAGES', event);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <div className="card">
      <div><ReservationSlider eventImages={eventImages} /></div>
      <div className="card__info">
        <h2>{event.Event.name}</h2>
        {/* <h4>{event.description}</h4> */}
        {/* <h3>{event.Event.Type.name}</h3> */}
      </div>
    </div>
  );
};
export default ReservationCard;
