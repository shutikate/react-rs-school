import { useState, useEffect, FC } from 'react';
import { Event } from '../../types';
import { getEvent } from '../../api/events';
import { Loader } from '../Loader/Loader';
import style from './Modal.module.scss';

interface Modal {
  id: string;
  onClose: () => void;
}

export const Modal: FC<Modal> = ({ id, onClose }) => {
  const [card, setCard] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    setIsLoading(true);
    getEvent(id)
      .then((event) => {
        setIsLoading(false);
        setCard(event);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [id]);

  return (
    <div className={style.modal} onClick={onClose}>
      <div className={style.wrapper} onClick={(event) => event.stopPropagation()}>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <p data-cy="modal-card-error">{error}</p>
        ) : (
          <>
            <div data-cy="modal-card">
              <div className={style.closeIcon} onClick={onClose} role="button"></div>
              <h4>{card?.category}</h4>
              <h3>{card?.name}</h3>
            </div>
            <div>
              <img src={card?.photoURL} alt={'Photo of the event'} className={style.image}></img>
              <div className={style.infoBlock}>
                <div className={style.infoLine}>
                  <p className={style.date}>{card?.date}</p>
                  <p className={style.time}>{card?.time}</p>
                </div>
                <p className={style.place}>{card?.address}</p>
                <p className={style.phone}>{card?.contact}</p>
              </div>
              <div className={style.infoLine}>
                <p>{card?.payment}</p>
                <p>
                  {card?.minPrice && card?.maxPrice
                    ? `${card?.minPrice}$ - ${card?.maxPrice}$`
                    : ''}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
