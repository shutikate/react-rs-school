import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Form } from './Form';

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
    global.URL.createObjectURL = vi.fn().mockImplementation((x) => x);
    const file = new File(['hello'], 'hello.png');
    await userEvent.upload(photo, file);
    await userEvent.click(agreement);

    const user = userEvent.setup();
    const button = screen.getByText('Create card');
    await user.click(button);

    expect(addCard).toHaveBeenCalled();
  });

  it('show errors', async () => {
    const addCard = vi.fn();
    render(<Form addCard={addCard} />);

    const category = screen.getByLabelText('Event category');
    const phone = screen.getByLabelText('Phone:');
    const payment = screen.getByLabelText('Free');
    const minPrice = screen.getByLabelText('Minimum price:');
    const maxPrice = screen.getByLabelText('Maximum price:');

    await userEvent.selectOptions(category, 'Check category');
    await userEvent.type(phone, 'hello');
    await userEvent.click(payment);
    await userEvent.type(minPrice, '10');
    await userEvent.type(maxPrice, '20');

    const user = userEvent.setup();
    const button = screen.getByText('Create card');
    await user.click(button);

    expect(screen.getByText('Please, check category')).toBeInTheDocument();
    expect(screen.getByText('Name of event is required')).toBeInTheDocument();
    expect(screen.getByText('Date of event is required')).toBeInTheDocument();
    expect(screen.getByText('Time of event is required')).toBeInTheDocument();
    expect(screen.getByText('Address of event is required')).toBeInTheDocument();
    expect(screen.getByText('Only numbers allowed')).toBeInTheDocument();
    expect(
      screen.getByText('Your event is free, please leave these fields blank')
    ).toBeInTheDocument();
    expect(screen.getByText('Select file to upload')).toBeInTheDocument();
    expect(screen.getByText('Please, check this')).toBeInTheDocument();
  });
});
