import { useEffect, useState } from 'react';
import { getEvents } from '../../api/events';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { CardEvent } from '../../components/CardEvent/CardEvent';
import { Event } from '../../types';
import style from './Home.module.scss';

export const Home = () => {
  const [cards, setCards] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem('sk-search-value') || '';
    updateCards(value);
  }, []);

  const updateCards = (value: string) => {
    setIsLoading(true);
    getEvents(value).then((events) => {
      setIsLoading(false);
      setCards(events);
    });
  };

  return (
    <>
      <SearchBar updateCards={updateCards} />
      <h2>Featured Events</h2>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div className={style.cardWrapper}>
          {cards.map((card) => (
            <CardEvent key={card.id} {...card} />
          ))}
        </div>
      )}
    </>
  );
};
