import { render, screen } from '@testing-library/react';
import { Home } from './Home';
import cardData from '../../json/data';

describe('Testing Home', () => {
  it('Featured Events has to be presented', async () => {
    render(<Home />);
    expect(screen.getByText('Featured Events')).toBeInTheDocument();
  });

  it('All cards has to be rendered', async () => {
    render(<Home />);
    cardData.events.map((event) => {
      const cardElement = screen.getByTestId(event.id!);
      expect(cardElement).toBeInTheDocument();
    });
  });
});
