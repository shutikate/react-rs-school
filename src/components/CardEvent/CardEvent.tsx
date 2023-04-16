import { FC } from 'react';
import { Event } from '../../types';
import style from './CardEvent.module.scss';

interface Props {
  card: Event;
  onClick?: () => void;
}

export const CardEvent: FC<Props> = ({ card, onClick }) => {
  const { id, photoURL, category, name, date } = { ...card };
  return (
    <div data-testid={id} className={style.wrapper} onClick={onClick}>
      <div>
        <img src={photoURL} alt={'Photo of the event'} className={style.image}></img>
        <h5>{category}</h5>
        <h4>{name}</h4>
        <div className={style.infoLine}>
          <p className={style.date}>{date}</p>
          <p className={style.time}>{card?.time}</p>
        </div>
        <div className={style.infoLine}>
          <p>{card?.payment}</p>
          <p>{card?.minPrice && card?.maxPrice ? `${card?.minPrice}$ - ${card?.maxPrice}$` : ''}</p>
        </div>
      </div>
    </div>
  );
};
