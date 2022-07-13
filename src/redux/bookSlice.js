import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'book',
  initialState: {
    books: [
      {
        title: 'book1',
        author: 'author1',
        id: 1,
      },
      {
        title: 'book2',
        author: 'author2',
        id: 2,
      },
      {
        title: 'book3',
        author: 'author3',
        id: 3,
      },
      {
        title: 'book4',
        author: 'author4',
        id: 4,
      },
    ],
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
        if (state.books[i].id === payload) {
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
});

export const { addBook, removeBook } = slice.actions;

export default slice.reducer;
