import { render, screen } from '@testing-library/react';
import { Home } from './Home';

it('Home', async () => {
  render(<Home />);
  expect(screen.getByText('Featured Events')).toBeInTheDocument();
});
