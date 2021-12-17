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
  const handleDelete = (id) => {
    dispatch(removeEvent(id));
  };
  const handleUpdate = (id) => {
    dispatch(updateEvent(id));
  };

  return (
    <div className="event-detail">
      <span className="event-title">{name}</span>
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
