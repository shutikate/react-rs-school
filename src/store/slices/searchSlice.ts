import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
};

export const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState:
    typeof window !== 'undefined' && window.__PRELOADED_STATE__
      ? window.__PRELOADED_STATE__.searchValueReducer
      : initialState,
  reducers: {
    changeValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { changeValue } = searchValueSlice.actions;

export default searchValueSlice.reducer;
