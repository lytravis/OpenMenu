import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./UserProfile.css";
import {
  getEvents,
  removeEvent,
  //   updatedEvent,
} from "../../store/event";

import EventsDetail from "../EventsDetail";

function UserProfile({
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

  const user = useSelector((state) => state.session.user);
  const events = useSelector((state) => Object.values(state.event));
  const images = useSelector((state) => Object.values(state.image));

  // console.log("-----> ****events****", events);
  // console.log("-----> userId", user);
  // console.log("&&&&&&&&&&&&&&&&&&&&> images", images);

  return (
    <div>
      <h1>Reservations</h1>
      <EventsDetail />
    </div>
  );
}

export default UserProfile;
