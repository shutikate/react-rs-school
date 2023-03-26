import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Form } from './Form';

interface Url {
  createObjectURL: (obj: Blob | MediaSource) => string;
}

describe('Testing Form', () => {
  it('submit form', async () => {
    const addCard = vi.fn();
    render(<Form addCard={addCard} />);

    const category = screen.getByLabelText('Event category');
    const name = screen.getByLabelText('Event name:');
    const date = screen.getByLabelText('Date:');
    const time = screen.getByLabelText('Time:');
    const address = screen.getByLabelText('Address:');
    const phone = screen.getByLabelText('Phone:');
    const payment = screen.getByLabelText('Pay Online');
    const minPrice = screen.getByLabelText('Minimum price:');
    const maxPrice = screen.getByLabelText('Maximum price:');
    const photo = screen.getByLabelText('Photo:');
    const agreement = screen.getByLabelText('I agree with the rules of the site');

    await userEvent.selectOptions(category, 'Concerts');
    await userEvent.type(name, 'Pink');
    await userEvent.type(date, '2023-04-30');
    await userEvent.type(time, '21:00');
    await userEvent.type(address, 'Main Arena');
    await userEvent.type(phone, '+456765678');
    await userEvent.click(payment);
    await userEvent.type(minPrice, '10');
    await userEvent.type(maxPrice, '20');
    const url: Url = {
      createObjectURL: vi.fn().mockImplementationOnce((x) => x),
    };
    (global.URL as Url) = url;
    const file = new File(['hello'], 'hello.png');
    await userEvent.upload(photo, file);
    await userEvent.click(agreement);

    const user = userEvent.setup();
    const button = screen.getByText('Create card');
    await user.click(button);

    expect(addCard).toHaveBeenCalled();
  });
});
