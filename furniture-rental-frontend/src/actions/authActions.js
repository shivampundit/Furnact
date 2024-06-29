import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
// import { setAlert } from './alertActions';

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');

    dispatch({
      type: 'USER_LOADED',
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: 'AUTH_ERROR',
    });
  }
};

// Register User
export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('/api/auth/register', body, config);

    dispatch({
      type: 'REGISTER_SUCCESS',
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: 'REGISTER_FAIL',
    });
  }
};

// Login User
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth/login', body, config);

    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: 'LOGIN_FAIL',
    });
  }
};

// Logout / Clear Profile
export const logout = () => dispatch => {
  dispatch({ type: 'LOGOUT' });
};
