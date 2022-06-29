import React, { useState, useEffect } from 'react';
import './SingleListing.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';

import { getEvents } from '../../store/event';
import { getReviews, removeReview } from '../../store/review';
//   .item{Item $}*12

const SingleListing = () => {
  const dispatch = useDispatch();
  const { eventId } = useParams();

  const [isLoaded, setIsLoaded] = useState(false);

  const event = useSelector((state) => state?.event[eventId]);
  const reviews = useSelector((state) => Object.values(state.review));
  const eventReviews = reviews.filter((review) => review?.eventId == event?.id);
  const events = useSelector((state) => Object.values(state.event));
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getEvents());
    dispatch(getReviews()).then(() => setIsLoaded(true));
    return () => {
      setIsLoaded();
    };
  }, [dispatch]);

  console.log('hello----->', event);
  console.log('$$ EVENT REVIEWS', eventReviews);
  return (
    <>
      {isLoaded && (
        <div className="sl-container">
          <div className="sl-header">{event.name}</div>
          <div className="sl-photogrid-container">
        
            <div className="sl-main-img"></div>
            <div className="sl-tm-img"></div>
            <div className="sl-tr-img"></div>
            <div className="sl-bm-img"></div>
            <div className="sl-br-img"></div>
          </div>
          <div className="sl-description">Description</div>
          <div className="sl-review">Review</div>
          <div className="sl-checkinfo">Check in info</div>
        </div>
      )}
    </>
  );
};
export default SingleListing;
