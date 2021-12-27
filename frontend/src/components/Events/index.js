import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import EventsDetail from "../EventsDetail";
import {
  getEvents,
  removeEvent,
  //   updatedEvent,
} from "../../store/event";
// import EditEventForm from "../UpdateEvent";
import { getImages } from "../../store/image";

function Events() {
  const dispatch = useDispatch();
  // const [loaded, setLoaded] = useState(false);

  const userId = useSelector((state) => state.session.user.id);
  const events = useSelector((state) => Object.values(state.event));
  const images = useSelector((state) => Object.values(state.image));

  useEffect(() => {
    dispatch(getEvents());
    dispatch(getImages());
  }, [dispatch]);

  // const handleDelete = (id) => {
  //   dispatch(removeEvent(id));
  // };

  // console.log("-----> ****events****", events);
  // console.log("-----> userId", userId);
  // console.log("&&&&&&&&&&&&&&&&&&&&> images", images);

  return (
    <div>
      <div className="products">
        {events?.map(
          ({
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
          }) => (
            <EventsDetail
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
              userId={userId}
              typeId={typeId}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Events;
