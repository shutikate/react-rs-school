import { combineReducers, configureStore } from '@reduxjs/toolkit';
import eventsReducer from './slices/eventsSlice';
import searchValueReducer from './slices/searchSlice';
import formCardsReducer from './slices/formCardsSlice';

export const rootReducer = combineReducers({
  eventsReducer,
  searchValueReducer,
  formCardsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
