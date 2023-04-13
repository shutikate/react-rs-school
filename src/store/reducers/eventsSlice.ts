import { createSlice } from '@reduxjs/toolkit';
import { Event } from '../../types';

interface EventState {
  events: Event[];
  isLoading: boolean;
  error: string;
}

const initialState = {
  events: [],
  isLoading: false,
  error: '',
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
});

export default eventsSlice.reducer;
