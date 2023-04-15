import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Event } from '../../types';

interface EventState {
  events: Event[];
  isLoading: boolean;
  error: string;
}

const initialState: EventState = {
  events: [],
  isLoading: false,
  error: '',
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    eventsFetching(state) {
      state.isLoading = true;
    },
    eventsFetchingSuccess(state, action: PayloadAction<Event[]>) {
      state.isLoading = false;
      state.error = '';
      state.events = action.payload;
    },
    eventsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { eventsFetching, eventsFetchingSuccess, eventsFetchingError } = eventsSlice.actions;

export default eventsSlice.reducer;
