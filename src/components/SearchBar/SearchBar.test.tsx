import { it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar } from './SearchBar';

describe('Testing search bar', () => {
  it('save value to local storage', async () => {
    const updateCards = vi.fn();
    render(<SearchBar updateCards={updateCards} />);

    const input = screen.getByRole('textbox', { name: /search/i });
    await userEvent.type(input, 'Hello');

    const user = userEvent.setup();
    const button = screen.getByText('Search');
    await user.click(button);

    expect(localStorage.getItem('sk-search-value') || '').toEqual('Hello');
  });
});
