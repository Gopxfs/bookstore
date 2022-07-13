import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './bookSlice';
import categoriesReducer from './categoriesSlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    categories: categoriesReducer,
  },
});

export default store;
