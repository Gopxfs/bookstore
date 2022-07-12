import { combineReducers, configureStore } from '@reduxjs/toolkit';
import * as reducers from '../redux';


const rootReducer = combineReducers(reducers);
const store = configureStore({
  reducer: rootReducer,
});