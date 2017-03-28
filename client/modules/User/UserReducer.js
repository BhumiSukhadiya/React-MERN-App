import { SET_ACTIVE_USER } from './UserActions';

const AuthenticationReducer = (state = null, action) => {
  switch (action.type) {
    case SET_ACTIVE_USER :
      return action.user;
    default:
      return state;
  }
};

// Export Reducer
export default AuthenticationReducer;
