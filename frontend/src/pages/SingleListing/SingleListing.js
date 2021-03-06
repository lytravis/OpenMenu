import React, { useState, useEffect } from 'react';
import './SingleListing.css';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Modal } from '../../context/Modal';

import { getEvents } from '../../store/event';
import { getReviews } from '../../store/review';
import AirCover from '../../components/AirCover/AirCover';
import Reviews from '../../components/Reviews/Reviews';

import ReservationForm from '../../components/Reservation/ReservationForm';

const SingleListing = () => {
  const dispatch = useDispatch();
  const { eventId } = useParams();

  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const event = useSelector((state) => state?.event[eventId]);
  const reviews = useSelector((state) => Object.values(state.review));
  const eventReviews = reviews.filter((review) => review?.eventId == event?.id);
  const user = useSelector((state) => state.session.user);
  const userId = useSelector((state) => state.session.user?.id);

  useEffect(() => {
    dispatch(getEvents());
    dispatch(getReviews()).then(() => setIsLoaded(true));
    return () => {
      setIsLoaded();
    };
  }, [dispatch]);

  const hasReviewed =
    eventReviews.filter((x) => x.userId === userId).length > 0;
  const isHost = userId === event?.userId;

  // const toTitleCase = (phrase) => {
  //   return phrase
  //     .toLowerCase()
  //     .split(' ')
  //     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  //     .join(' ');
  // };

  // console.log('testtttter#####  ', toTitleCase(event.name));

  return (
    <>
      {isLoaded && (
        <div className="sl-container">
          <div className="sl-header">
            <h2> {event?.name}</h2>
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
                  <i class="fas fa-credit-card"></i>
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
                  <i class="fas fa-seedling"></i>
                </div>
                <div className="event-text">
                  <div className="event-header"></div>
                  <div className="event-info">
                    Plant-based options available
                  </div>
                </div>
              </div>
              <div className="sl-eventInfoContainer borderBot">
                <div className="event-icon">
                  <i class="fas fa-glass-martini-alt"></i>
                </div>
                <div className="event-text">
                  <div className="event-header"></div>
                  <div className="event-info">Full bar</div>
                </div>
              </div>
              <div className="airCover">
                <h2>opencover</h2>
                <p>
                  Every booking includes free protection from Host
                  cancellations, listing inaccuracies, and other issues like
                  trouble checking in.
                </p>
                <div
                  className="learnMore borderBot"
                  onClick={() => setShowModal(true)}
                >
                  Learn More
                </div>
              </div>
              {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                  <AirCover setShowModal={setShowModal} />
                </Modal>
              )}
              <div className="sl-description">{event?.description}</div>
            </div>
          </div>
          <div className="sl-review">
            <Reviews
              eventReviews={eventReviews}
              user={user}
              userId={userId}
              hasReviewed={hasReviewed}
              isHost={isHost}
            />
          </div>
          <div className="sl-checkinfo">
            <ReservationForm />
          </div>
        </div>
      )}
    </>
  );
};
export default SingleListing;
