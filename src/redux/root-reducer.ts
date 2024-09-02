import { combineReducers } from '@reduxjs/toolkit';
import authReducer from 'src/redux/auth-slice';

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;
