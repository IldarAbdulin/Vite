import { combineReducers } from '@reduxjs/toolkit';
import { usersSlice } from './slices/users-slice';

export const reducers = combineReducers({
  users: usersSlice.reducer,
});
