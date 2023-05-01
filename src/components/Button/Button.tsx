import { FC } from 'react';
import style from './Button.module.scss';

interface Props {
  text: string;
  type: 'submit' | 'button';
}

export const Button: FC<Props> = ({ text, type, ...rest }) => {
  return (
    <button type={type} className={style.button} {...rest}>
      {text}
    </button>
  );
};
