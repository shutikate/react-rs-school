import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from './Select';

describe('Testing select', () => {
  it('clicked option', async () => {
    const options = [
      { label: 'Check category', value: 'Check category' },
      { label: 'Concerts', value: 'Concerts' },
      { label: 'For Children', value: 'For children' },
      { label: 'Festivals', value: 'Festivals' },
      { label: 'Sport', value: 'Sport' },
    ];
    render(<Select label="Choose an event" options={options} />);

    const select: HTMLSelectElement = screen.getByLabelText('Choose an event');
    await userEvent.selectOptions(select, 'Concerts');
    expect(select.value).toBe('Concerts');
  });

  it('display all options', () => {
    const options = [
      { label: 'Check category', value: 'Check category' },
      { label: 'Concerts', value: 'Concerts' },
      { label: 'For Children', value: 'For children' },
      { label: 'Festivals', value: 'Festivals' },
      { label: 'Sport', value: 'Sport' },
    ];
    render(<Select label="Choose an event" options={options} />);

    const list = screen.getAllByRole('option');
    expect(list).toHaveLength(5);
  });
});
