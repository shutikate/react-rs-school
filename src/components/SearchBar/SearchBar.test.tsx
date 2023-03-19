import { it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar } from './SearchBar';

describe('Testing search bar', () => {
  it('save value to local storage', async () => {
    const { unmount } = render(<SearchBar />);
    const input = screen.getByRole('textbox', { name: /search/i });
    await userEvent.type(input, 'Hello');
    unmount();
    expect(localStorage.getItem('sk-search-value') || '').toEqual('Hello');
  });
});
