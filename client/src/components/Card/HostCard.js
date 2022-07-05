import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
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

  // console.log('***************** eventId', eventId);

  const showChangeDatePopUp = async (e) => {
    e.preventDefault();
    // await dispatch(loadWalkDogsWalks(walk.dog.id));
    setShowUpdate(true);
  };

  const showDeleteConfirmation = (e) => {
    e.preventDefault();
    setShowDelete(true);
  };

  const [date, setDate] = useState(null);

  const cleanUpCalendarClose = () => {
    setDate(null);
    setShowError(false);
    setShowUpdate(false);
  };

  const deleteEvent = () => {
    dispatch(removeEvent(event.id));
    setShowDelete(false);
  };

  const updateEvent = async () => {};

  // console.log('**************event', event?.Images[0]?.url);
  // console.log('**************event IMAGES', event.Images);

  return (
    <div className="outerEventCardContainer">
      <Link to={`/events/${event.id}`} style={{ textDecoration: 'none' }}>
        <div className="m-eventCard ">
          {/* <div className="eventDate"> `fix this!!!!`</div> */}
          <div className="m-event-container">
            <div
              className="eventPic"
              style={{
                backgroundImage: `url(${event?.Images[0]?.url}), url("https://cdn.discordapp.com/attachments/920377762068447282/939220064979271700/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg")`,
              }}
            >
              {/* <ImageSlider event={event} /> */}
            </div>
            <div className="m-eventInfo">
              <div>
                <div className="eventConfirmDetails">
                  <div className="eventConfirmDetailHeader">Event Name:</div>
                  <div className="eventConfirmeDetailInfo">{event?.name}</div>
                </div>
                <div
                  className="eventConfirmDetails"
                  id="eventLocationContainer"
                >
                  <div className="eventConfirmDetailHeader" id="eventLocation">
                    Location:
                  </div>
                  <div className="walkConfirmeDetailInfo">{`${event?.address}, ${event?.city}, ${event?.state}`}</div>
                </div>
              </div>

              <div
                className="editDeleteEventButtons"
                id="editDeleteEventButtons"
              >
                {/* <div id="editEventButton">
                </div> */}
                <Link
                  to={`/events/${event.id}/edit`}
                  style={{ textDecoration: 'none' }}
                >
                  <div>Edit</div>
                </Link>
                <div id="deleteEventButton" onClick={showDeleteConfirmation}>
                  Cancel Event
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
            <div className="m-deleteConfirm">{`Are you sure you want to cancel your event ?`}</div>
            <div
              className="deleteConfirmButtons"
              id="eventDeleteConfirmButtons"
            >
              <div id="confirmWalkDeletionCancelButton" onClick={deleteEvent}>
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
export default HostCard;
