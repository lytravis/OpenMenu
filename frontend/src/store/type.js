import { csrfFetch } from './csrf';

const LOAD_TYPES = 'events/LOAD_TYPES';
const SEARCH_RESULTS = 'search/SEARCH_RESULTS';

const loadTypes = (data) => ({
  type: LOAD_TYPES,
  data,
});

const searchResults = (results) => ({
  type: SEARCH_RESULTS,
  results,
});

export const getTypes = () => async (dispatch) => {
  const response = await fetch('/api/types');
  if (response.ok) {
    const types = await response.json();
    dispatch(loadTypes(types));
    return types;
  }
};




export default function reducer(state = {}, action) {
  let newState;

  switch (action.type) {
    case LOAD_TYPES:
      newState = {};
      action.data.forEach((type) => (newState[type.id] = type));
      return newState;
    case SEARCH_RESULTS: {
      newState = { ...action?.results };
      return newState;
    }
    default:
      return state;
  }
}
