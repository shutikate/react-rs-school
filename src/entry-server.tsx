import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './store/store';
import { App } from './App';

export const render = (url: string) => {
  const store = configureStore({
    reducer: rootReducer,
  });
  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>
  );
  const preloadedState = store.getState();
  return { stream, preloadedState };
};
