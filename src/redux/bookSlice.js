import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'book',
  initialState: {
    books: [
      {
        title: 'book1',
        author: 'author1',
      },
      {
        title: 'book2',
        author: 'author2',
      },
      {
        title: 'book3',
        author: 'author3',
      },
      {
        title: 'book4',
        author: 'author4',
      },
    ],
  },
  reducers: {
    addBook(state, { payload }) {
      return {
        ...state,
        payload,
      };
    },
    removeBook(state, { payload }) {
      return {
        ...state.slice(0, payload),
        ...state.slice(payload + 1, state.length),
      };
    },
  },
});

export const { addBook, removeBook } = slice.actions;

export default slice.reducer;
