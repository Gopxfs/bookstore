import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './bookSlice';
import categoriesReducer from './categoriesSlice';
import { addBookToAPI, removeBookFromAPI, getBookListFromAPI } from '../api/apiConsume';

const store = configureStore({
  reducer: {
    book: bookReducer,
    categories: categoriesReducer,
  },
});

export default store;

getBookListFromAPI();