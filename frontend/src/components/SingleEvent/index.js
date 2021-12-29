import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getEvents } from "../../store/event";
import { getImages } from "../../store/image";
import { getReviews } from "../../store/review";
import { getTypes } from "../../store/type";
import ReviewForm from "../Reviews/ReviewForm";
import Reviews from "../Reviews/Reviews";

function SingleEvent() {
  const dispatch = useDispatch();

  const { eventId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const userId = useSelector((state) => state.session.user.id);
  const events = useSelector((state) => Object.values(state.event));
  const images = useSelector((state) => Object.values(state.image));
  const event = useSelector((state) => state?.event[eventId]);
  const eventImages = images.filter((image) => image.eventId == event.id);

  const reviews = useSelector((state) => Object.values(state.review));
  const eventReviews = reviews.filter((review) => review.eventId == event.id);

  
  // console.log("REVIEWS", reviews);
  // console.log("$$ EVENT REVIEWS", eventReviews);
  // console.log("$$$$ EVENT IMAGES", eventImages);
  // console.log("-----> ****events****", events);
  // console.log("mmmmmmmmm EVENTID", eventId);
  // //   console.log("-----> userId", userId);
  // //   console.log("&&&&&&&&&&&&&&&&&&&&> images", images);

  // console.log("oooooooooooo>>> event", event);

  const eventTypes = useSelector((state) => Object.values(state.event));

  // console.log("---------> eventTypes", eventTypes);

  useEffect(() => {
    // dispatch(getEvent(eventId));
    dispatch(getEvents());
    dispatch(getImages());
    dispatch(getReviews());
    dispatch(getTypes()).then(() => setIsLoaded(true));
  }, [dispatch]);

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
                  userId,
                  food,
                  experience,
                  cleanliness,
                  accuracy,
                  value,
                  communication,
                }) => (
                  <>
                    <h3 key={id}>{comment}</h3>
                    {/* <span>{eventReviews.User.firstName}</span> */}
                  </>
                )
              )}
            </div>
            <div>
              {/* {reviews.map((review) => (
                <span>{review.User.firstName}</span>
              ))} */}
            </div>
            <div>
              <ReviewForm />
            </div>
            <Reviews />
          </div>
        </div>
      )}
    </>
  );
}

export default SingleEvent;
