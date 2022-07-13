import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: '',
  },
  reducers: {
    checkStatus() {
      return {
        status: 'Under Construction',
      };
    },
  },
});

export const { checkStatus } = slice.actions;

export default slice.reducer;
