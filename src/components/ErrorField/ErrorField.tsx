import { FC } from 'react';
import style from './ErrorField.module.scss';

type Error = {
  error: string | undefined;
};

export const ErrorField: FC<Error> = ({ error }) => {
  return (
    <div className={style.errorWrapper}>
      {error ? <span data-cy="error-field">{error}</span> : ''}
    </div>
  );
};
