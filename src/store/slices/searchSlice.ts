import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState: {
    searchValue: '',
  },
  reducers: {
    changeValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { changeValue } = searchValueSlice.actions;

export default searchValueSlice.reducer;
