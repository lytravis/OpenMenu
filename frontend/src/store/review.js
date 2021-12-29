import { csrfFetch } from "./csrf";

const LOAD_REVIEWS = "reviews/LOAD_REVIEWS";
const ADD_REVIEWS = "reviews/ADD_REVIEWS";
const EDIT_REVIEW = "reviews/EDIT_REVIEW";
const DELETE_REVIEW = "reviews/DELETE_REVIEW";

const loadReviews = (data) => ({
  type: LOAD_REVIEWS,
  data,
});

const newReview = (payload) => ({
  type: ADD_REVIEWS,
  payload,
});

const editReview = (data) => ({
  type: EDIT_REVIEW,
  data,
});

const deleteReview = (reviewId) => ({
  DELETE_REVIEW,
  reviewId,
});

export const getReviews = () => async (dispatch) => {
  const response = await fetch("/api/reviews");
  if (response.ok) {
    const types = await response.json();
    dispatch(loadReviews(types));
    return types;
  }
};

export const addReview = (review) => async (dispatch) => {
  const response = await csrfFetch("/api/reviews", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(review),
  });
  // console.log("xxxxxxxxxx> response", response);
  if (response.ok) {
    const data = await response.json();
    // console.log("xxxxxxxxxxxxx> data", data);
    dispatch(newReview(data));
    return data;
  }
};

export const removeReview = (reviewId) => async (dispatch) => {
  console.log("!!!! store reviewId", reviewId);
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
  });
  console.log("@@@@@@@@@@ STORE response for DELETE", response);
  if (response.ok) {
    dispatch(deleteReview(reviewId));
  }
};

export const updateReview = (data, reviewId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  console.log("xxxxxxxxxxxxx> edit response", response);
  if (response.ok) {
    const review = await response.json();
    console.log("yyyyyyyyyyyyyyy> edit review", review);
    dispatch(editReview(review));
    return review;
  }
};

export default function reducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case LOAD_REVIEWS:
      newState = {};
      action.data.forEach((event) => (newState[event.id] = event));
      return newState;
    case ADD_REVIEWS:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    // case EDIT_REVIEWS: {
    //   // console.log(action.event);
    //   return {
    //     ...state,
    //     [action.review.event.id]: action.review.event,
    //   };
    // }
    case EDIT_REVIEW: {
      console.log("DDDAAAAADADA action.data", action.data);
      newState = { ...state };
      newState[action.data.eventId] = action.data;
      return newState;
    }
    case DELETE_REVIEW: {
      const newState = { ...state };
      delete newState[action.reviewId];
      return newState;
    }

    default:
      return state;
  }
}
