import { csrfFetch } from './csrf.js';

const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const UPDATE_USER = 'session/UPDATE_USER';

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user,
});

export const login =
  ({ credential, password }) =>
  async (dispatch) => {
    const response = await csrfFetch('/api/session', {
      method: 'POST',
      body: JSON.stringify({ credential, password }),
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
  };

export const restoreUser = () => async (dispatch) => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const signup = (user) => async (dispatch) => {
  const { firstName, lastName, email, password, profilePic } = user;
  const response = await csrfFetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
      profilePic,
    }),
  });

  // console.log('response---->', response);
  const data = await response.json();
  // console.log('data---->', data);
  dispatch(setUser(data.user));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
  });
  dispatch(removeUser());
  return response;
};

export const updateUserName =
  (userId, firstName, lastName) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/name/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
      }),
    });
    // console.log('$$$$$$$$$$$ response name', response);
    if (response.ok) {
      // console.log('$$$$$$$$$$$ response.ok', response.ok);

      const data = await response.json();
      // console.log('%%%%%%%%%%%%%%% data', data);
      dispatch(updateUser(data));
      return ['Updated'];
    } else if (response.status < 500) {
      const data = await response.json();
      if (data.errors) {
        return ['Error', data.errors];
      }
    } else {
      return ['Error', 'An error occurred. Please try again.'];
    }
  };

export const updateUserEmail = (userId, email) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/email/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
    }),
  });
  // console.log('!!!!!!! response', response);
  if (response.ok) {
    const data = await response.json();
    // console.log('********8 data', data);
    dispatch(updateUser(data));
    return ['Updated'];
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return ['Error', data.errors];
    }
  } else {
    return ['Error', 'email : An error occurred. Please try again.'];
  }
};

export const updateUserPicture = (userId, profilePic) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/image/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      profilePic,
    }),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(updateUser(data));
    return ['Updated'];
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return ['Error', data.errors];
    }
  } else {
    return ['Error', 'profile_pic : An error occurred. Please try again.'];
  }
};

export const updateUserPassword = (userId, password) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/password/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password,
    }),
  });
  if (response.ok) {
    return ['Updated'];
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return ['Error', data.errors];
    }
  } else {
    return ['Error', 'An error occurred. Please try again.'];
  }
};

const initialState = { user: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_USER:
      return { user: action.payload };
    case UPDATE_USER:
      // return { user: action.payload };
      newState = { ...state };
      newState = action.payload;
      return newState;

    case REMOVE_USER:
      return { user: null };
    default:
      return state;
  }
}

export default reducer;
