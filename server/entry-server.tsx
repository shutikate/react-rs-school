import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import { rootReducer } from '../src/store/store';
import { App } from '../src/App';

const URL = 'https://react-json-api.vercel.app';

export const render = async (url: string, options: RenderToPipeableStreamOptions) => {
  const data = (await axios.get(`${URL}/events`)).data;
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: {
      eventsReducer: {
        events: data,
        isLoading: false,
        error: '',
      },
    },
  });
  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  );
  const preloadedState = store.getState();
  return { stream, preloadedState };
};
