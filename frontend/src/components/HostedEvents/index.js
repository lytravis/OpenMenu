import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./HostedEvents.css";
import { getEvents } from "../../store/event";
import EventsDetail from "../EventsDetail";
import { Modal } from "../../context/Modal";
import EditEvent from "../EditEvent";
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
  const [showModal, setShowModal] = useState(false);
  const events = useSelector((state) => Object.values(state.event));
  const images = useSelector((state) => Object.values(state.image));
  const hostId = useSelector((state) => state.session.user.id);

  const hostedEvents = events.filter((event) => event.userId == hostId);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  //   console.log("$$$$$$$$$>>> hostedEvents", hostedEvents);

  //   console.log("xxxxxxxxx> hostId", hostId);

  //   console.log("-----> ****events****", events);

  //   console.log("&&&&&&&&&&&&&&&&&&&&> images", images);

  return (
    <div>
      {hostedEvents.map((hostedEvent) => (
        <div key={hostedEvent.id}>
          <EventsDetail key={hostedEvent.id} {...hostedEvent} />
          <div>
            <button
              onClick={() => setShowModal(true)}
              className="update-button"
            >
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
          </div>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default HostedEvents;
