import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEvents, removeEvent, updateEvent } from "../../store/event";
import EditEvent from "../EditEvent";

import { Modal } from "../../context/Modal";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  const [showModal, setShowModal] = useState(false);
  const events = useSelector((state) => Object.values(state.event));
  const hostId = useSelector((state) => state.session.user.id);

  const hostedToEvent = events.filter((event) => event.userId == hostId);

  // console.log("$$$$$$$$$>>> hostedEvents", hostedEvents);

  // console.log("xxxxxxxxx> hostId", hostId);

  const handleDelete = (id) => {
    dispatch(removeEvent(id));
  };

  const goToEvent = (e, eventId) => {
    e.preventDefault();
    history.push(`/events/${eventId}`);
  };

  // const handleUpdate = (id) => {
  //   dispatch(updateEvent(id));
  // };

  return (
    <div className="event-detail" onClick={(e) => goToEvent(e, id)}>
      <span className="event-title">{name}</span>
      <div>{description}</div>
      <div>
        {address}
        {city} {state}, {zipCode}{" "}
      </div>
      {/* <div className="button">
        <button onClick={() => handleDelete(id)} className="delete-button">
          Delete
        </button> */}
      {/* <div>
          <button onClick={() => setShowModal(true)} className="update-button">
            Update
          </button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <EditEvent
                key={id}
                id={id}
                name={name}
                description={description}
                address={address}
                city={city}
                state={state}
                zipCode={zipCode}
                latitude={latitude}
                longitude={longitude}
                typeId={typeId}
              />
            </Modal>
          )}
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default EventsDetail;
