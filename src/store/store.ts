import { combineReducers, configureStore } from '@reduxjs/toolkit';
import eventsReducer from './reducers/eventsSlice';

const rootReducer = combineReducers({
  eventsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
