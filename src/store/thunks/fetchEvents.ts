import { createAsyncThunk } from '@reduxjs/toolkit';
import { getEvents } from '../../api/events';

export const fetchEvents = createAsyncThunk(
  'event/fetchEvents',
  async (value: string, thunkAPI) => {
    try {
      const events = await getEvents(value);
      return events;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
