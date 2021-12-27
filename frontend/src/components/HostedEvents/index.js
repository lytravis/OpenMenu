import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./HostedEvents.css";
import { getEvents } from "../../store/event";
import EventsDetail from "../EventsDetail";

function HostedEvents({
  id,
  name,
  description,
  address,
  city,
  state,
  zipCode,
  latitude,
  longitude,
  userId,
  typeId,
}) {
  const dispatch = useDispatch();
  // const [loaded, setLoaded] = useState(false);

  const events = useSelector((state) => Object.values(state.event));
  const images = useSelector((state) => Object.values(state.image));
  const hostId = useSelector((state) => state.session.user.id);

  const hostedEvents = events.filter((event) => event.userId == hostId);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  console.log("$$$$$$$$$>>> hostedEvents", hostedEvents);

  console.log("xxxxxxxxx> hostId", hostId);

  console.log("-----> ****events****", events);

  console.log("&&&&&&&&&&&&&&&&&&&&> images", images);

  return (
    <div>
      {hostedEvents.map((hostedEvent) => (
        <div key={hostedEvent.id}>
          <EventsDetail key={hostedEvent.id} {...hostedEvent} />
          {/*
          <button
            type="button"
            onClick={() => handleDelete(rsvp.eventId)}
            className="delete-button"
          >
            Cancel RSVP
          </button> */}

          <hr />
        </div>
      ))}
    </div>
  );
}

export default HostedEvents;
