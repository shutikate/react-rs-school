import { Component } from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/images/404.webp';
import style from './NotFound.module.scss';

export class NotFound extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <img src={notFound} alt={'Image page not found'} className={style.image} />
        <Link to="/" className={style.link}>
          Go Home
        </Link>
      </div>
    );
  }
}
