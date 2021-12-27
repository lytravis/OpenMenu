import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import {
  getEvent,
  getEvents,
  removeEvent,
  //   updatedEvent,
} from "../../store/event";
import { getImages } from "../../store/image";
import { getReviews } from "../../store/review";
import { getTypes } from "../../store/event";
import ReviewForm from "../Reviews/ReviewForm";

function SingleEvent() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { eventId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const userId = useSelector((state) => state.session.user.id);
  const events = useSelector((state) => Object.values(state.event));
  const images = useSelector((state) => Object.values(state.image));
  const event = useSelector((state) => state?.event[eventId]);
  const eventImages = images.filter((image) => image.eventId == event.id);

  const reviews = useSelector((state) => Object.values(state.review));
  const eventReviews = reviews.filter((review) => review.eventId == event.id);

  console.log("REVIEWS", reviews);
  console.log("$$ EVENT REVIEWS", eventReviews);
  console.log("$$$$ EVENT IMAGES", eventImages);
  console.log("-----> ****events****", events);
  console.log("mmmmmmmmm EVENTID", eventId);
  //   console.log("-----> userId", userId);
  //   console.log("&&&&&&&&&&&&&&&&&&&&> images", images);

  console.log("oooooooooooo>>> event", event);

  const eventTypes = useSelector((state) => Object.values(state.event));

  console.log("---------> eventTypes", eventTypes);

  useEffect(() => {
    // dispatch(getEvent(eventId));
    dispatch(getEvents()).then(() => setIsLoaded(true));
    dispatch(getImages());
    dispatch(getReviews());
    // dispatch(getTypes());
  }, [dispatch]);

  //   useEffect(() => {
  //     dispatch(getTypes());
  //   });

  return (
    <>
      {isLoaded && (
        <div>
          <div className="event-container">
            <div>
              <h1>{event.name}</h1>
            </div>
            <div>
              <h2>{event.typeId}</h2>
            </div>

            <div className="event-images-container">
              <div className="event-images">
                {eventImages?.map(({ id, url }) => (
                  <img key={id} src={url} alt="img[i]" />
                ))}
              </div>
            </div>
            <div>
              <h3>{event.description}</h3>
            </div>
            <div>
              {event.address} {event.city} {event.state} {event.zipCode}{" "}
            </div>
          </div>

          <div className="reviews-container">
            <div>
              <h2>Reviews</h2>
            </div>
            <div>
              {eventReviews?.map(
                ({
                  id,
                  comment,
                  food,
                  experience,
                  cleanliness,
                  accuracy,
                  value,
                  communication,
                }) => (
                  <h3 key={id}>{comment}</h3>
                )
              )}
            </div>
            <div>
              <ReviewForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleEvent;
