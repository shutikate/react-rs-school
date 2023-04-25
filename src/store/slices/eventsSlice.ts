import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Event } from '../../types';
import { fetchEvents } from '../thunks/fetchEvents';

import { FormCardsState } from '../slices/formCardsSlice';

export interface EventState {
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
  initialState:
    typeof window !== 'undefined' ? window.__PRELOADED_STATE__.eventsReducer : initialState,
  // initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.fulfilled.type, (state, action: PayloadAction<Event[]>) => {
        state.isLoading = false;
        state.error = '';
        state.events = action.payload;
      })
      .addCase(fetchEvents.pending.type, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchEvents.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default eventsSlice.reducer;
