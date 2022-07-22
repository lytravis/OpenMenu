import { csrfFetch } from './csrf';

const SEARCH_TYPES = 'search/SEARCH_TYPES';
const SEARCH_EVENTS = 'search/SEARCH_EVENTS';

const searchType = (results) => ({
  type: SEARCH_TYPES,
  results,
});
const searchEvents = (results) => ({
  type: SEARCH_EVENTS,
  results,
});

export const searchResultsType = (searchTerm) => async (dispatch) => {
  const response = await csrfFetch(`/api/types/search/${searchTerm}`);
  // console.log('%%%%%%%%%%%% response ', response);
  if (response.ok) {
    const results = await response.json();
    // console.log('@@@@@@@@@@@@@@@@@@@ results', results);
    dispatch(searchType(results));
    return results;
  }
};
export const searchResultsEvents = (searchTerm) => async (dispatch) => {
  const response = await csrfFetch(`/api/events/search/${searchTerm}`);
  // console.log('%%%%%%%%%%%% response ', response);
  if (response.ok) {
    const results = await response.json();
    // console.log('@@@@@@@@@@@@@@@@@@@ results', results);
    dispatch(searchEvents(results));
    return results;
  }
};




export default function reducer(state = {}, action) {
  let newState;

  switch (action.type) {
    case SEARCH_TYPES: {
      newState = { ...action?.results };
      return newState;
    }
    case SEARCH_EVENTS: {
      newState = { ...action?.results };
      return newState;
    }
    default:
      return state;
  }
}
