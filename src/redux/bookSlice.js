import { createSlice } from '@reduxjs/toolkit';
import { getBookListThunk } from './apiThunks';

export const slice = createSlice({
  name: 'book',
  initialState: {
    books: [],
  },
  reducers: {
    addBook(state, { payload }) {
      return {
        books: [...state.books, payload],
      };
    },
    removeBook(state, { payload }) {
      let index = -1;
      for (let i = 0; i < state.books.length; i += 1) {
        if (state.books[i].item_id === payload) {
          index = i;
          break;
        }
      }
      return {
        books: [
          ...state.books.slice(0, index),
          ...state.books.slice(index + 1, state.books.length),
        ],
      };
    },
  },
  extraReducers: {
    [getBookListThunk.fulfilled]: (state, { payload }) => ({
      books: payload,
    }),
  },
});

export const { addBook, removeBook } = slice.actions;

export default slice.reducer;
