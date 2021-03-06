import { csrfFetch } from './csrf';

const LOAD_IMAGE = 'events/LOAD_IMAGE';
const ADD_IMAGE = 'events/ADD_IMAGE';
const DELETE_IMAGE = 'events/DELETE_IMAGE';
const UPDATE_IMAGE = 'events/UPDATE_NAME';

const loadImages = (data) => ({
  type: LOAD_IMAGE,
  data,
});

const newImage = (payload) => ({
  type: ADD_IMAGE,
  payload,
});

const deleteImage = (id) => ({
  type: DELETE_IMAGE,
  id,
});

const updateImage = (image) => ({
  type: UPDATE_IMAGE,
  payload: image,
});

export const getImages = () => async (dispatch) => {
  const response = await fetch('/api/images');
  // console.log("%%%%%%%%%%%%%%------> response", response);
  if (response.ok) {
    const images = await response.json();
    // console.log("---------->images", images);
    dispatch(loadImages(images));
    return images;
  }
};

export const addImage = (image) => async (dispatch) => {
  const response = await csrfFetch('/api/images', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(image),
  });
  // console.log('----------------->', response);
  if (response.ok) {
    const data = await response.json();
    dispatch(newImage(data));
    return data;
  }
};

export const removeImage = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/images/${id}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    dispatch(deleteImage(id));
  }
};

export const updateEventImage = (imageId, url) => async (dispatch) => {
  const response = await csrfFetch(`/api/images/${imageId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url,
    }),
  });

  // console.log('this is the response !!!!', response);
  if (response.ok) {
    const data = await response.json();
    // console.log('this is the data !!!!', data);
    dispatch(updateImage(data));
  }
};

export default function reducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case LOAD_IMAGE:
      newState = {};
      action.data.forEach((image) => (newState[image.id] = image));
      return newState;
    case ADD_IMAGE:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_IMAGE: {
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    }
    case UPDATE_IMAGE:
      return { image: action.payload };
    default:
      return state;
  }
}
