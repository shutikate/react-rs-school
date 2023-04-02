import { forwardRef } from 'react';
import style from './Input.module.scss';

interface Props {
  label: string;
  type: string;
}

type InputProps = Props & React.HTMLProps<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>((InputProps: InputProps, ref) => {
  const { label, type, ...props } = InputProps;
  return (
    <div className={style.wrapper}>
      <label className={style.label}>
        {label}
        <input {...props} ref={ref} type={type} className={style.input} />
      </label>
    </div>
  );
});
