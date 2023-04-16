import { it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NotFound } from './NotFound';
import { MemoryRouter } from 'react-router-dom';

describe('Testing page NotFound', () => {
  it('Should render correctly', () => {
    render(
      <MemoryRouter initialEntries={['/404']}>
        <NotFound />
      </MemoryRouter>
    );
    expect(screen.getByAltText('Image page not found')).toBeInTheDocument();
    expect(screen.getByText('This page does not exist')).toBeInTheDocument();
    const linkElement = screen.getByRole('link', { name: /go home/i });
    expect(linkElement).toBeInTheDocument();
  });
});
