import { csrfFetch } from "./csrf";

const LOAD_EVENTS = "events/LOAD_EVENTS";
const ADD_EVENT = "events/ADD_EVENT";
const EDIT_EVENT = "events/EDIT_EVENT";
const DELETE_EVENT = "events/DELETE_EVENT";

const loadEvents = (data) => ({
  type: LOAD_EVENTS,
  data,
});

const newEvent = (payload) => ({
  type: ADD_EVENT,
  payload,
});

const editEvent = (event) => ({
  type: EDIT_EVENT,
  event,
});

const deleteEvent = (id) => ({
  type: DELETE_EVENT,
  id,
});

export const getEvents = () => async (dispatch) => {
  const response = await fetch("/api/events");
  console.log("------> response", response);
  if (response.ok) {
    const events = await response.json();
    console.log("---------->events", events);
    dispatch(loadEvents(events));
    return events;
  }
};

export const addEvent = (event) => async (dispatch) => {
  const response = await csrfFetch("/api/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event),
  });
console.log()
  if (response.ok) {
    const data = await response.json();
    dispatch(newEvent(data));
    return data;
  }
};

export const removeEvent = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/events/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(deleteEvent(id));
  }
};

export const updateEvent = (data) => async (dispatch) => {
  const response = await csrfFetch(`/api/events/${data.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const event = await response.json();
    dispatch(editEvent(event));
    return event;
  }
};

export default function reducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case LOAD_EVENTS:
      newState = {};
      action.data.forEach((event) => (newState[event.id] = event));
      return newState;
    case ADD_EVENT:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case EDIT_EVENT: {
      // console.log(action.event);
      return {
        ...state,
        [action.event.event.id]: action.event.event,
      };
    }
    case DELETE_EVENT: {
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    }
    default:
      return state;
  }
}
