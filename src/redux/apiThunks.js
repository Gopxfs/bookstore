import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/8jPJscW2sY5rPxOZDiOs/books';

export const getBookListThunk = createAsyncThunk(
  'bookstore/getBookListThunk',
  async () => {
    const response = await fetch(baseURL, {});
    return response.json();
  },
);

export default getBookListThunk();
