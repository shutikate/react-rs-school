import style from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={style.loader} data-testid="loader">
      <span></span>
    </div>
  );
};
