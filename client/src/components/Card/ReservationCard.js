import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './ReservationCard.css';

import { getImages } from '../../store/image';
import { getEvents, removeEvent } from '../../store/event';
import {  removeRSVP } from '../../store/reservation';




const ReservationCard = ({ event, hosted }) => {
  const dispatch = useDispatch();
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showError, setShowError] = useState(false);

  const userId = useSelector((state) => state.session.user?.id);

  // console.log('***************** eventId', eventId);

  const showDeleteConfirmation = (e) => {
    e.preventDefault();
    setShowDelete(true);
  };

  console.log('!!!!!!!!!!!!!!!! event', event);

  const [date, setDate] = useState(null);

  const deleteRSVP = () => {
    dispatch(removeRSVP(event.id));
    setShowDelete(false);
  };

  const images = useSelector((state) => Object.values(state.image));
  const eventImages = images.filter((image) => image.eventId == event.id);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <div className="outerEventCardContainer">
      <Link to={`/events/${event.id}`} style={{ textDecoration: 'none' }}>
        <div className="m-eventCard ">
          {/* <div className="eventDate"> `fix this!!!!`</div> */}
          <div className="m-event-container">
            <div
              className="eventPic"
              style={{
                backgroundImage: `url(${eventImages[0]?.url}), url("https://cdn.discordapp.com/attachments/920377762068447282/939220064979271700/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg")`,
              }}
            >
              {/* <ImageSlider event={event} /> */}
            </div>
            <div className="m-eventInfo">
              <div>
                <div className="eventConfirmDetails">
                  <div className="eventConfirmDetailHeader">Event Name:</div>
                  <div className="eventConfirmeDetailInfo">
                    {event.Event.name}
                  </div>
                </div>
                <div
                  className="eventConfirmDetails"
                  id="eventLocationContainer"
                >
                  <div className="eventConfirmDetailHeader" id="eventLocation">
                    Location:
                  </div>
                  <div className="eventConfirmeDetailInfo">{`${event.Event?.address}, ${event.Event?.city}, ${event.Event?.state}`}</div>
                </div>
              </div>

              <div
                className="editDeleteEventButtons"
                id="editDeleteEventButtons"
              >
                <div id="deleteEventButton" onClick={showDeleteConfirmation}>
                  Cancel Reservation
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      {showDelete && (
        <div className="loginModal">
          <div className="deleteEventForm">
            <div className="xToClose" onClick={() => setShowDelete(false)}>
              <i className="fas fa-times"></i>
            </div>
            <div className="m-deleteConfirm">{`Are you sure you want to cancel your reservation ?`}</div>
            <div
              className="deleteConfirmButtons"
              id="eventDeleteConfirmButtons"
            >
              <div id="confirmWalkDeletionCancelButton" onClick={deleteRSVP}>
                Cancel event
              </div>
              <div id="cancelEventDelete" onClick={() => setShowDelete(false)}>
                Go Back
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ReservationCard;

// const ReservationCard = ({ event, hosted }) => {
//   const dispatch = useDispatch();
//   const [showUpdate, setShowUpdate] = useState(false);
//   const [showDelete, setShowDelete] = useState(false);
//   const [showError, setShowError] = useState(false);

//   const images = useSelector((state) => Object.values(state.image));
//   const eventImages = images.filter((image) => image.eventId == event.id);

//   console.log('&&&&&&&&&&&&&&&&&&&&> images', images);
//   console.log('%%%%%%%%%%%%%>> eventImages', eventImages);

//   const eventYear = event.createdAt.slice(0, 4);

//   const eventMonth = event.createdAt.slice(5, 10);

//   const [isLoaded, setIsLoaded] = useState(true);
//   // const [showDelete, setShowDelete] = useState(false);

//   const userId = useSelector((state) => state.session.user.id);

//   console.log('**************event', event);
//   // console.log('**************event IMAGES', event);

//   useEffect(() => {
//     dispatch(getImages());
//   }, [dispatch]);

//   return (
//     <div className="card">
//       <div><ReservationSlider eventImages={eventImages} /></div>
//       <div className="card__info">
//         <h2>{event.Event.name}</h2>
//         {/* <h4>{event.description}</h4> */}
//         {/* <h3>{event.Event.Type.name}</h3> */}
//       </div>
//     </div>
//   );
// };
