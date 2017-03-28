import axios from 'axios';
import { setActiveUser } from '../User/UserActions';
import { browserHistory } from 'react-router';
export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const REMOVE_AUTH_TOKEN = 'REMOVE_AUTH_TOKEN';

export function registerUser(user) {
  return {
    type: REGISTER_USER,
    user,
  };
}

export function registerUserRequest(user) {
  return (dispatch) => {
    return axios.post('https://lb-blog-api.herokuapp.com/api/users', user)
      .then((res, err) => {
        console.log(res);
        if (res.status === 200) {
          alert('Registration done successfully');
        }
        if (err) {
          alert('Error in registration');
        }
        dispatch(registerUser(res.data));
      });
  };
}

export function loginSuccess(success) {
  return {
    type: LOGIN_SUCCESS,
    success,
  };
}
export function setToken(token) {
  return {
    type: SET_AUTH_TOKEN,
    token,
  };
}
export function loginUserRequest(user) {
  return (dispatch) => {
    return axios.post('https://lb-blog-api.herokuapp.com/api/users/login', user)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert('Login done successfully');
        }
        dispatch(setToken(res.data.id));
        dispatch(loginSuccess(true));

        const token = res.data.id;
        localStorage.setItem('token', token);
        dispatch(setActiveUser(localStorage.getItem('token')));
        browserHistory.push('/userhome');
      }).catch(() => {
        alert('Login failed!Please try again.');
        dispatch(loginSuccess(false));
      });
  };
}


export function removeToken() {
  localStorage.removeItem('token');
  return {
    type: REMOVE_AUTH_TOKEN,
  };
}
