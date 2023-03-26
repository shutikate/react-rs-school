import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Input } from './Input';

describe('Testing input', () => {
  it('input render', () => {
    render(<Input label="Football" type="text" />);
    expect(screen.getByText('Football')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');
  });

  it('test ref', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Input label="Football" type="text" ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
