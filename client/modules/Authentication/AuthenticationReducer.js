import { LOGIN_SUCCESS, SET_AUTH_TOKEN, REMOVE_AUTH_TOKEN, SET_ACTIVE_USER } from './AuthenticationAction';

const AuthenticationReducer = (state = null, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN :
      return {
        token: action.token,
      };
    case REMOVE_AUTH_TOKEN :
      return {
      };
    case SET_ACTIVE_USER :
      return {
        user: action.user,
      };
    case LOGIN_SUCCESS :
      return {
        success: action.success,
      };

    default:
      return state;
  }
};


// Export Reducer
export default AuthenticationReducer;
