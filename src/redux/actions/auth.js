import axios from 'axios';
import { setAlert } from './alert';
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_HR,
  CLEAR_ADMIN
} from './types';

import setAuthToken from '../../utils/setAuthToken';

// Load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
};
// Login User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/hr/login', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res,
    });

    dispatch(loadUser());
  } catch (err) {
    console.log(err);
};
}
//'LOGOUT' / CLEAR PROFILE
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

