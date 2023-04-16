import { useEffect, useState } from 'react';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { CardEvent } from '../../components/CardEvent/CardEvent';
import { Modal } from '../../components/Modal/Modal';
import { Loader } from '../../components/Loader/Loader';
import style from './Home.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
// import { fetchEventsThunk } from '../../store/thunks/fetchEventsThunk';
import { fetchEvents } from '../../store/thunks/fetchEventsThunk';

export const Home = () => {
  const searchValue = useAppSelector((state) => state.searchValueReducer.searchValue);
  const dispatch = useAppDispatch();
  const { events, isLoading, error } = useAppSelector((state) => state.eventsReducer);
  const [idForModal, setIdForModal] = useState('');

  useEffect(() => {
    dispatch(fetchEvents(searchValue));
  }, [dispatch, searchValue]);

  const openModal = (id: string) => {
    setIdForModal(id);
  };

  return (
    <>
      <SearchBar />
      <h2>Featured Events</h2>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p className={style.error}>{error}</p>
      ) : (
        <div className={style.cardWrapper}>
          {events.map((event) => (
            <CardEvent
              key={event.id}
              card={event}
              onClick={() => {
                openModal(event.id || '');
              }}
            />
          ))}
        </div>
      )}
      {!!idForModal && <Modal id={idForModal} onClose={() => setIdForModal('')} />}
    </>
  );
};
