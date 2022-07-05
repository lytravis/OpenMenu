import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import EventsHolder from '../EventsHolder/EventsHolder';
import './HostCard.css';

import { getEvents, removeEvent } from '../../store/event';
// import EditEvent from '../EditEvent';

import ImageSlider from '../ImageSlider/ImageSlider';

const HostCard = ({ event, hosted }) => {
  const dispatch = useDispatch();
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showError, setShowError] = useState(false);

  const eventYear = event.createdAt.slice(0, 4);

  const eventMonth = event.createdAt.slice(5, 10);

  const [isLoaded, setIsLoaded] = useState(true);
  // const [showDelete, setShowDelete] = useState(false);


  const userId = useSelector((state) => state.session.user.id);



  // console.log('**************event', event);
  // console.log('**************event IMAGES', event.Images);

  return (
    <div className="card">
      <div>
        <ImageSlider event={event} />
      </div>
      <div className="card__info">
        <h2>{event.name}</h2>
        {/* <h4>{event.description}</h4> */}
        <h3>{event.Type.name}</h3>
      </div>
    </div>
  );
};
export default HostCard;
