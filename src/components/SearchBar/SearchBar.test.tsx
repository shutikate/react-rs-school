import { it } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rootReducer } from '../../store/store';
import { SearchBar } from './SearchBar';

const testStore = configureStore({
  reducer: rootReducer,
});

describe('Testing search bar', () => {
  it('save value to store', async () => {
    render(
      <Provider store={testStore}>
        <SearchBar />
      </Provider>
    );

    const input = screen.getByRole('textbox', { name: /search/i });
    await userEvent.type(input, 'Hello');

    const user = userEvent.setup();
    const button = screen.getByText('Search');
    await user.click(button);

    expect(testStore.getState().searchValueReducer.searchValue).toEqual('Hello');
  });
});
