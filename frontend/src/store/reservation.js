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

export const getRSVP = (userId) => async (dispatch) => {
  const response = await fetch(`/api/reservations/${userId}`);
  console.log("**** RSVP response", response);
  if (response.ok) {
    const reservations = await response.json();
    console.log("$$$$$ reservations", reservations);
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
    //   console.log("@@@@newState", newState);
    //   console.log("@@@@### action", action.data);
      return newState;
    default:
      return state;
  }
}
