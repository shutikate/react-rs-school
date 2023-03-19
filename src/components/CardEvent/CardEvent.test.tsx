import { it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardEvent } from './CardEvent';

it('Click the about-us link', async () => {
  const data = {
    id: 1,
    category: 'Concerts',
    photo: '',
    name: 'Fall Out Boy',
    date: '17.10.2023',
    timeStart: '21:00',
    address: 'Warsaw',
    contact: '+48 784563723',
    payment: 'Pay online',
  };
  render(<CardEvent {...data} />);
  expect(screen.getByAltText('Photo of the event')).toBeInTheDocument();
});
