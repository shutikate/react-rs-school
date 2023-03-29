import { FC } from 'react';
import style from './ErrorField.module.scss';

type Error = {
  error: string;
};

export const ErrorField: FC<Error> = ({ error }) => {
  return <div className={style.errorWrapper}>{error}</div>;
};
