import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Event } from '../../types';

interface FormCardsState {
  formCards: Event[];
}

const initialState: FormCardsState = {
  formCards: [],
};

export const formCardsSlice = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    createCard(state, action: PayloadAction<Event>) {
      state.formCards.push(action.payload);
    },
  },
});

export const { createCard } = formCardsSlice.actions;

export default formCardsSlice.reducer;
