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
    reducers: {
      addBook(state, { book }) {
        return [
          ...state,
          book,
        ];
      },
      removeBook(state, { index }) {
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1, state.length),
        ];
      },
    },
  },
});

export const { addBook, removeBook } = slice.actions;

export const selectBook = (state) => state.book;

export default slice.reducer;
