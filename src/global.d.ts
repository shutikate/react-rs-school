declare interface Window {
  __PRELOADED_STATE__: {
    eventsReducer: EventState;
    searchValueReducer: { searchValue: string };
    formCardsReducer: FormCardsState;
  };
}
