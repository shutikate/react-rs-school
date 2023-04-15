import { Form } from '../../components/Form/Form';
import { CardEvent } from '../../components/CardEvent/CardEvent';
import { useAppSelector } from '../../hooks/redux';
import style from './FormPage.module.scss';

export const FormPage = () => {
  const formCards = useAppSelector((state) => state.formCardsReducer.formCards);

  return (
    <div>
      <Form />
      <div className={style.cardWrapper}>
        {formCards.map((card) => (
          <CardEvent key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};
