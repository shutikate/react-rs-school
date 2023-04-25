import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../src/store/store';
import { App } from '../src/App';
import { fetchEvents } from '../src/store/thunks/fetchEvents';

export const render = (url: string, options: RenderToPipeableStreamOptions) => {
  const store = configureStore({
    reducer: rootReducer,
  });
  console.log(store.getState());
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
