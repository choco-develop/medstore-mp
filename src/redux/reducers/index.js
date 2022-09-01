import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth';
import message from './message';
import userInfo from './user_info';

export default combineReducers({
  auth,
  message,
  userInfo,
});
