import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTypes } from "../../store/type";
import EventsDetail from "../EventsDetail";
import { useParams, useHistory } from "react-router-dom";
import { getEvents } from "../../store/event";
// import EditEventForm from "../UpdateEvent";
import { getImages } from "../../store/image";
import "./Events.css";

function Events() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoaded, setIsLoaded] = useState(false);
  const { eventId, reviewId } = useParams();
  const userId = useSelector((state) => state.session.user.id);
  const events = useSelector((state) => Object.values(state.event));
  const images = useSelector((state) => Object.values(state.image));
  const event = useSelector((state) => state?.event[eventId]);
  // const eventImages = images.filter((image) => image.eventId == event.id);
  const eventImg = useSelector((state) => state?.image[eventId]);
  useEffect(() => {
    // dispatch(getEvent(eventId));
    dispatch(getEvents());
    dispatch(getImages());
    dispatch(getTypes()).then(() => setIsLoaded(true));
  }, [dispatch]);

  // const handleDelete = (id) => {
  //   dispatch(removeEvent(id));
  // };

  // console.log("-----> ****events****", events);
  // console.log("-----> userId", userId);
  console.log("&&&&&&&&&&&&&&&&&&&&> images", images);
  console.log("$$$$ EVENT IMAGES", eventImg);
  console.log("************** events", events[0]?.Images[0].url);

  const goToEvent = (e, eventId) => {
    e.preventDefault();
    history.push(`/events/${eventId}`);
  };

  return (
    <>
      {isLoaded && (
        <div className="events-container">
          <div className="events-header">
            <h1>Find Your Next Adventure</h1>
          </div>
          {events?.map((event) => (
            <div
              className="event-holder"
              key={event.id}
              onClick={(e) => goToEvent(e, event.id)}
            >
              <div className="events-image">
                <img className="img1" src={event?.Images[0]?.url} alt="event" />
              </div>
              <div className="events-info">
                <div className="events-words">
                <h2>{event.name}</h2>
                <p>{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
export default Events;
