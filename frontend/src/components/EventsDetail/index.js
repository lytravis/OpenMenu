import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEvents, removeEvent, updateEvent } from "../../store/event";
import EditEventForm from "../UpdateEvent";

const EventsDetail = ({
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
}) => {
  const dispatch = useDispatch();
  const events = useSelector((state) => Object.values(state.event));
  const hostId = useSelector((state) => state.session.user.id);

  const hostedEvents = events.filter((event) => event.userId == hostId);

  console.log("$$$$$$$$$>>> hostedEvents", hostedEvents);

  console.log("xxxxxxxxx> hostId", hostId);

  const handleDelete = (id) => {
    dispatch(removeEvent(id));
  };
  const handleUpdate = (id) => {
    dispatch(updateEvent(id));
  };

  return (
    <div className="event-detail">
      <span className="event-title">{name}</span>
      <div>{description}</div>
      <div>
        {address}
        {city} {state}, {zipCode}{" "}
      </div>
      <div className="button">
        <button onClick={() => handleDelete(id)} className="delete-button">
          Delete
        </button>
        <button onClick={() => handleUpdate(id)} className="delete-button">
          Update
        </button>
      </div>
    </div>
  );
};

export default EventsDetail;
