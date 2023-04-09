import { useState, useEffect, FC } from 'react';
import { Event } from '../../types';
import { getEvent } from '../../api/events';
import style from './Modal.module.scss';
import { Oval } from 'react-loader-spinner';

interface Modal {
  id: string;
  onClose: () => void;
}

export const Modal: FC<Modal> = ({ id, onClose }) => {
  const [card, setCard] = useState<Event>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getEvent(id).then((event) => {
      setIsLoading(false);
      setCard(event);
    });
  }, [id]);

  return (
    <div className={style.modal} onClick={onClose}>
      <div className={style.wrapper} onClick={(event) => event.stopPropagation()}>
        {isLoading ? (
          <div className={style.spinner}>
            <Oval height={80} width={80} color="#4fa94d" />
          </div>
        ) : (
          <>
            <div>
              <div className={style.closeIcon} onClick={onClose}></div>
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
