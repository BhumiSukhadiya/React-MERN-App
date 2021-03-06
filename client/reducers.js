/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import authentication from './modules/Authentication/AuthenticationReducer';
import user from './modules/User/UserReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  authentication,
  user,
});
