import { csrfFetch } from "./csrf";

const LOAD_ALL_RSVPS = "rsvp/LOAD_ALL_RSVPS";
const LOAD_RSVPS = "rsvp/LOAD_RSVPS";
const ADD_RSVP = "rsvp/ADD_RSVP";
const DELETE_RSVP = "rsvp/DELETE_RSVP";

const allRsvps = (data) => ({
  type: LOAD_ALL_RSVPS,
  data,
});

const loadRsvp = (data) => ({
  type: LOAD_RSVPS,
  data,
});

const addRsvp = (data) => ({
  type: ADD_RSVP,
  data,
});

const deleteRsvp = (userId) => ({
  type: DELETE_RSVP,
  userId,
});

export const getRSVP = (userId) => async (dispatch) => {
  const response = await fetch(`/api/reservations/${userId}`);
  // console.log("**** RSVP response", response);
  if (response.ok) {
    const reservations = await response.json();
    // console.log("$$$$$ reservations", reservations);
    dispatch(loadRsvp(reservations));
    return reservations;
  }
};

export const getAllRsvps = () => async (dispatch) => {
  const response = await fetch("/api/reservations");
  // console.log("------> response", response);
  if (response.ok) {
    const reservations = await response.json();
    // console.log("---------->reservations", reservations);
    dispatch(allRsvps(reservations));
    return reservations;
  }
};

export const addRSVP = (reservation) => async (dispatch) => {
  const { userId, eventId, startDate, endDate } = reservation;
  const response = await csrfFetch("/api/reservations", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, eventId, startDate, endDate }),
  });

  if (response.ok) {
    const rsvp = await response.json();
    dispatch(addRsvp(rsvp));
    return rsvp;
  }
};

export const removeRSVP = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reservations/${userId}`, {
    method: "DELETE",
  });
  console.log("THIS IS THE RESPONSE", response);
  if (response.ok) {
    console.log("-----------> response.ok", response.ok);
    console.log("^^^^^^^^^^^^^^^^ dispatch", deleteRsvp(userId));
    dispatch(deleteRsvp(userId));
  }
};

export default function reducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case LOAD_ALL_RSVPS:
      newState = {};
      action.data.forEach(
        (reservation) => (newState[reservation.id] = reservation)
      );
      return newState;
    case LOAD_RSVPS:
      newState = { ...state };
      newState = action.data;
      // console.log("@@@@newState", newState);
      // console.log("@@@@### action", action.data);
      return newState;

    case ADD_RSVP:
      newState = { ...state };
      newState[action.data.id] = action.data;
      return newState;

    case DELETE_RSVP: {
      newState = { ...state };
      delete newState[action.userId];
      return newState;
    }
    default:
      return state;
  }
}

// case ADD_RSVP: {
//     return [...state, action.data];
//   }
