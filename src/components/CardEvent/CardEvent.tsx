import { FC } from 'react';
import { Event } from '../../types';
import style from './CardEvent.module.scss';

export const CardEvent: FC<Event> = ({ ...props }) => {
  return (
    <div data-testid={props.id} className={style.wrapper}>
      <div>
        <img src={props.photoURL} alt={'Photo of the event'} className={style.image}></img>
        <h5>{props.category}</h5>
        <h4>{props.name}</h4>
        <div className={style.infoBlock}>
          <div className={style.infoLine}>
            <p className={style.date}>{props.date}</p>
            <p className={style.time}>{props.time}</p>
          </div>
          <p className={style.place}>{props.address}</p>
          <p className={style.phone}>{props.contact}</p>
        </div>
        <div className={style.infoLine}>
          <p>{props.payment}</p>
          <p>{props.minPrice && props.maxPrice ? `${props.minPrice}$ - ${props.maxPrice}$` : ''}</p>
        </div>
      </div>
    </div>
  );
};
