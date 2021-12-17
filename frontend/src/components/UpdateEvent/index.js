import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getEvents,
  addEvent,
  removeEvent,
  updatedEvent,
} from "../../store/event";

const EditEventForm = ({ eventId }) => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.session.user.id);
  const events = useSelector((state) => Object.values(state.event));
};

export default EditEventForm;
