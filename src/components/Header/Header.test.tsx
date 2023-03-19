import { it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

it('Click the about-us link', async () => {
  render(
    <BrowserRouter>
      <Header location={{ pathname: '/about-us' }} />
    </BrowserRouter>
  );
  expect(screen.getByText('about us')).toBeInTheDocument();

  const user = userEvent.setup();
  const click = vi.spyOn(user, 'click');
  const link = screen.getByText('About Us');
  if (link instanceof Element) {
    await user.click(link);
  }
  expect(click).toBeCalledTimes(1);
});
