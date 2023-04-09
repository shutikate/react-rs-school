import { vi } from 'vitest';
import { render, screen, waitFor, act } from '@testing-library/react';
import { Home } from './Home';

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
  getEvents: vi.fn().mockImplementation(() => Promise.resolve(mockEvents)),
}));

describe('Testing Home', () => {
  it('Featured Events has to be presented', async () => {
    await act(async () => render(<Home />));
    expect(screen.getByText('Featured Events')).toBeInTheDocument();
  });

  // it('Show loading', async () => {
  //   await act(async () => render(<Home />));
  //   expect(screen.getByTestId('oval-loading')).toBeInTheDocument();
  // });

  it('All cards has to be rendered', async () => {
    await act(async () => render(<Home />));
    await waitFor(() => {
      mockEvents.map((event) => {
        const cardElement = screen.getByTestId(event.id);
        expect(cardElement).toBeInTheDocument();
      });
    });
  });
});
