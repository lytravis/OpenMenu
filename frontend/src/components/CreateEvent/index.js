import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getEvents,
  addEvent,
  removeEvent,
  updatedEvent,
} from "../../store/event";

function Events() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  const userId = useSelector((state) => state.session.user.id);
  const events = useSelector((state) => Object.values(state.event));

  useEffect(() => {
    dispatch(getEvents());
    dispatch(addEvent());
    dispatch(removeEvent());
    dispatch(updatedEvent());
  }, [dispatch]);

  console.log("-----> ****events****", events);
  console.log("-----> userId", userId);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default Events;
