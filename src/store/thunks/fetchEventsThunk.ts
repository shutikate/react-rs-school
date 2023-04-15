import { AppDispatch } from '../store';
import { eventsFetching, eventsFetchingError, eventsFetchingSuccess } from '../slices/eventsSlice';
import { getEvents } from '../../api/events';

export const fetchEventsThunk = (value: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(eventsFetching());
    const events = await getEvents(value);
    dispatch(eventsFetchingSuccess(events));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(eventsFetchingError(error.message));
    }
  }
};
