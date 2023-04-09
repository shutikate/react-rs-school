import { useEffect, useState } from 'react';
import { getEvents } from '../../api/events';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { CardEvent } from '../../components/CardEvent/CardEvent';
import { Modal } from '../../components/Modal/Modal';
import { Event } from '../../types';
import style from './Home.module.scss';
import { Oval } from 'react-loader-spinner';

export const Home = () => {
  const [cards, setCards] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [idForModal, setIdForModal] = useState('');

  useEffect(() => {
    const value = localStorage.getItem('sk-search-value') || '';
    updateCards(value);
  }, []);

  const updateCards = (value: string) => {
    setIsLoading(true);
    getEvents(value)
      .then((events) => {
        setIsLoading(false);
        setError(null);
        setCards(events);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  };

  const openModal = (id: string) => {
    setIdForModal(id);
  };

  return (
    <>
      <SearchBar updateCards={updateCards} />
      <h2>Featured Events</h2>
      {isLoading ? (
        <div className={style.spinner}>
          <Oval height="80" width="80" color="#4fa94d" />
        </div>
      ) : error ? (
        <p className={style.error}>{error}</p>
      ) : (
        <div className={style.cardWrapper}>
          {cards.map((card) => (
            <CardEvent
              key={card.id}
              card={card}
              onClick={() => {
                openModal(card.id || '');
              }}
            />
          ))}
        </div>
      )}
      {!!idForModal && <Modal id={idForModal} onClose={() => setIdForModal('')} />}
    </>
  );
};
