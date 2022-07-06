import { csrfFetch } from './csrf';

const SEARCH_RESULTS = 'search/SEARCH_RESULTS';



const searchResults = (results) => ({
  type: SEARCH_RESULTS,
  results,
});


export const searchResultsType = (searchTerm) => async (dispatch) => {
  const response = await csrfFetch(`/api/types/search/${searchTerm}`);
  // console.log('%%%%%%%%%%%% response ', response);
  if (response.ok) {
    const results = await response.json();
    // console.log('@@@@@@@@@@@@@@@@@@@ results', results);
    dispatch(searchResults(results));
    return results;
  }
};

export default function reducer(state = {}, action) {
  let newState;

  switch (action.type) {
    case SEARCH_RESULTS: {
      newState = { ...action?.results };
      return newState;
    }
    default:
      return state;
  }
}
