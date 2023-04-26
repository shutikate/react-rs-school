declare interface Window {
  __PRELOADED_STATE__: {
    eventsReducer: {
      events: {
        id?: string;
        category: string;
        photo?: FileList;
        photoURL: string;
        name: string;
        date: string;
        time: string;
        address: string;
        contact: string;
        payment: string;
        minPrice?: string;
        maxPrice?: string;
        checkBox?: boolean;
      }[];
      isLoading: boolean;
      error: string;
    };
    searchValueReducer: { searchValue: string };
    formCardsReducer: {
      formCards: {
        id?: string;
        category: string;
        photo?: FileList;
        photoURL: string;
        name: string;
        date: string;
        time: string;
        address: string;
        contact: string;
        payment: string;
        minPrice?: string;
        maxPrice?: string;
        checkBox?: boolean;
      }[];
    };
  };
}
