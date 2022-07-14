import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/8jPJscW2sY5rPxOZDiOs/books';

const createBookList = (data) => {
  const entries = Object.entries(data);
  const bookList = [];
  for (let i = 0; i < entries.length; i += 1) {
    const book = entries[i][1][0];
    const key = entries[i][0];
    book.item_id = key;
    bookList.push(book);
  }
  return bookList;
};

export const getBookListThunk = createAsyncThunk(
  'bookstore/getBookListThunk',
  async () => {
    const response = await fetch(baseURL, {});
    const data = await response.json();
    return createBookList(data);
  },
);

export const addBookThunk = createAsyncThunk(
  'bookstore/addBookThunk',
  async (book) => {
    const response = await fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-type': 'application/json',
      },
    });
    return response.json();
  },
);

export const removeBookThunk = createAsyncThunk(
  'bookstore/removeBookThunk',
  async (id) => {
    const response = await fetch(`${baseURL}/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    return response.json();
  },
);

export default getBookListThunk();
