import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/8jPJscW2sY5rPxOZDiOs/books';

const createBookList = (data) => {
  const bookList = [];
  Object.values(data).forEach((value) => bookList.push(value[0]));
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
    const newBook = JSON.stringify(book);
    const response = await fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-type': 'application/json',
      },
    });
    console.log(newBook);
    return response.json();
  },
);

export default getBookListThunk();
