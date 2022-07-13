import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {
    checkStatus() {
      return ('under construction');
    },
  },
});

export const { checkStatus } = slice.actions;

export const selectCategories = (state) => state.categories;

export default slice.reducer;
