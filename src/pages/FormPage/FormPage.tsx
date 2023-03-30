import { useState } from 'react';
import { Form } from '../../components/Form/Form';
import { Event } from '../../types';
import { CardEvent } from '../../components/CardEvent/CardEvent';
import style from './FormPage.module.scss';

type Cards = Array<Event>;

export const FormPage = () => {
  const [cards, setCards] = useState<Cards>([]);
  console.log(cards);

  const addCard = (card: Event) => {
    setCards([...cards, card]);
  };

  return (
    <div>
      <Form addCard={addCard} />
      <div className={style.cardWrapper}>
        {cards.map((card) => (
          <CardEvent key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};
