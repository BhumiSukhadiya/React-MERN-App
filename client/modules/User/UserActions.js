import axios from 'axios';
import { browserHistory } from 'react-router';
export const SET_ACTIVE_USER = 'SET_ACTIVE_USER';
export function setUser(user) {
  return {
    type: SET_ACTIVE_USER,
    user,
  };
}
export function setActiveUser(token) {
  return (dispatch) => {
    const url = 'https://lb-blog-api.herokuapp.com/api/users/me?access_token=';
    return axios.get(url + token)
      .then((response) => {
        console.log(response);
        localStorage.setItem('user', response.data);
        dispatch(setUser(response.data));
      });
  };
}

export function changePasswordRequest(token, data) {
  return () => {
    const url = 'https://lb-blog-api.herokuapp.com/api/users/change-password?access_token=';
    return axios.put(url + token, data)
      .then((response) => {
        console.log(response);
        alert(response.data.data.message);
        browserHistory.push('/logout');
      });
  };
}
