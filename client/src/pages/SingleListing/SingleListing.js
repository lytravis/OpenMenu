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

  // console.log('hello-----> images', event?.Images[0].url);
  console.log('````````````````````````', event?.User.profilePic);
  // console.log('$$ EVENT REVIEWS', eventReviews);
  return (
    <>
      {isLoaded && (
        <div className="sl-container">
          <div className="sl-header">
            <h2> {event.name}</h2>
          </div>
          <div className="sl-photogrid-container">
            <div
              className="sl-main-img"
              style={{
                backgroundImage: `url(${event?.Images[0]?.url}), url("https://cdn.discordapp.com/attachments/920377762068447282/939220064979271700/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg")`,
              }}
            ></div>
            <div
              className="sl-tm-img"
              style={{
                backgroundImage: `url(${event?.Images[1]?.url}), url("https://cdn.discordapp.com/attachments/920377762068447282/939220064979271700/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg")`,
              }}
            ></div>
            <div
              className="sl-tr-img"
              style={{
                backgroundImage: `url(${event?.Images[2]?.url}), url("https://cdn.discordapp.com/attachments/920377762068447282/939220064979271700/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg")`,
              }}
            ></div>
            <div
              className="sl-bm-img"
              style={{
                backgroundImage: `url(${event?.Images[3]?.url}), url("https://cdn.discordapp.com/attachments/920377762068447282/939220064979271700/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg")`,
              }}
            ></div>
            <div
              className="sl-br-img"
              style={{
                backgroundImage: `url(${event?.Images[4]?.url}), url("https://cdn.discordapp.com/attachments/920377762068447282/939220064979271700/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg")`,
              }}
            ></div>
          </div>
          <div className="sl-description">
            <div className="sl-hostInfo">
              <h3>
                {`Experience hosted by ${event?.User.firstName} ${event?.User.lastName}`}{' '}
              </h3>
              <p>
                Top Tags:{' '}
                <span>
                  <button className="sl-button">Great For Brunch</button>
                  <button className="sl-button">
                    Great For Outdoor Dining
                  </button>
                  <button className="sl-button">Fit For Foodies</button>
                </span>
              </p>

              {event?.User.profilePic ? (
                <div
                  className="ownerIcon"
                  style={{ backgroundImage: `url(${event?.User.profilePic})` }}
                ></div>
              ) : (
                <div
                  className="ownerIcon"
                  style={{
                    backgroundImage:
                      'url(https://cdn.discordapp.com/attachments/920377762068447282/991505531703410698/664742.png',
                  }}
                ></div>
              )}
            </div>
            <div className="sl-eventInfo">
              <div className="sl-eventInfoContainer">
                <div className="event-icon">
                  <i class="fab fa-accessible-icon"></i>
                </div>
                <div className="event-text">
                  <div className="event-header"></div>
                  <div className="event-info">
                    Credit Cards, Google Pay, Apple Pay Accepted
                  </div>
                </div>
              </div>
              <div className="sl-eventInfoContainer">
                <div className="event-icon">
                  <i class="fab fa-accessible-icon"></i>
                </div>
                <div className="event-text">
                  <div className="event-header"></div>
                  <div className="event-info">Handicap accessible</div>
                </div>
              </div>
              <div className="sl-eventInfoContainer">
                <div className="event-icon">
                  <i class="fab fa-accessible-icon"></i>
                </div>
                <div className="event-text">
                  <div className="event-header"></div>
                  <div className="event-info">
                    Many vegetarian options provided
                  </div>
                </div>
              </div>
              <div className="sl-eventInfoContainer">
                <div className="event-icon">
                  <i class="fab fa-accessible-icon"></i>
                </div>
                <div className="event-text">
                  <div className="event-header"></div>
                  <div className="event-info">Full bar</div>
                </div>
              </div>
            </div>
          </div>
          <div className="sl-review">Review</div>
          <div className="sl-checkinfo">Check in info</div>
        </div>
      )}
    </>
  );
};
export default SingleListing;
