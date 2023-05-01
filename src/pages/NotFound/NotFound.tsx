import { Link } from 'react-router-dom';
import notFound from '../../assets/images/404.avif';
import style from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <div data-cy="not-found-page" className={style.wrapper}>
      <img src={notFound} alt={'Image page not found'} className={style.image} />
      <p className={style.errorText}>This page does not exist</p>
      <Link to="/" className={style.link}>
        Go Home
      </Link>
    </div>
  );
};
