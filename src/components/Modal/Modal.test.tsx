import { vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Modal } from './Modal';

const mockEvents = [
  {
    id: '1',
    category: 'Concerts',
    photoURL: 'https://allaboutmusic.pl/wp-content/uploads/2018/08/fall-out-boy.jpg',
    name: 'Fall Out Boy',
    date: '17.10.2023',
    time: '21:00',
    address: 'Warsaw Łazienkowska 6A',
    contact: '+48 784563723',
    payment: 'Pay online',
    minPrice: '32',
    maxPrice: '810',
  },
  {
    id: '2',
    category: 'For Children',
    photoURL:
      'https://cs5.livemaster.ru/storage/65/1a/3d4d18adaa758e0c2771f38ed2xg--aktivnyj-otdyh-i-razvlecheniya-alisa-tenevoj-teatr-tenej-igro.jpg',
    name: 'Alice in Wonderland',
    date: '25.03.2023',
    time: '10:00',
    address: 'Krakow, al.Pokoju 6B',
    contact: '+48 675980786',
    payment: 'Pay online',
    minPrice: '7',
    maxPrice: '12',
  },
];

vi.mock('../../api/events', () => ({
  getEvent: vi
    .fn()
    .mockImplementation((id) => Promise.resolve(mockEvents.find((event) => event.id === id))),
}));

describe('Testing Modal', () => {
  it('rendering correct card', async () => {
    const onClose = vi.fn();

    render(<Modal id={'1'} onClose={onClose} />);

    expect(screen.getByTestId('oval-loading')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Concerts')).toBeInTheDocument();
      expect(screen.getByText('Fall Out Boy')).toBeInTheDocument();
      expect(screen.queryByText('For Children')).not.toBeInTheDocument();
      expect(screen.getByText('+48 784563723')).toBeInTheDocument();
      expect(screen.getByText('Warsaw Łazienkowska 6A')).toBeInTheDocument();
      expect(screen.getByText('17.10.2023')).toBeInTheDocument();
      expect(screen.getByText('Pay online')).toBeInTheDocument();
    });
  });
});
