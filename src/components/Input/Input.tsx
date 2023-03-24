import { forwardRef } from 'react';

interface Props {
  label: string;
  type: string;
}

type InputProps = Props & React.HTMLProps<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>((InputProps, ref) => {
  const { label, type, ...props } = InputProps;
  return (
    <>
      <label>
        {label}
        <input {...props} type={type} ref={ref} />
      </label>
    </>
  );
});
