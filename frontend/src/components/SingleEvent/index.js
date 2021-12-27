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

function SingleEvent() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { eventId } = useParams();
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
  //   console.log("-----> userId", userId);
  //   console.log("&&&&&&&&&&&&&&&&&&&&> images", images);

  console.log("oooooooooooo>>> event", event);

  useEffect(() => {
    // dispatch(getEvent(eventId));
    dispatch(getEvents());
    dispatch(getImages());
    dispatch(getReviews());
  }, [dispatch]);

  return (
    <div>
      <h1>Single Event</h1>
    </div>
  );
}

export default SingleEvent;
