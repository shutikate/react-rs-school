import { Component } from 'react';
import { Form } from '../../components/Form/Form';
import { Event } from '../../types';
import { CardEvent } from '../../components/CardEvent/CardEvent';
import style from './FormPage.module.scss';

type Props = Record<string, never>;
type State = { cards: Array<Event> };

export class FormPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { cards: [] };
  }

  addCard = (card: Event) => {
    this.setState({ cards: [...this.state.cards, card] });
  };

  render() {
    return (
      <div>
        <Form addCard={this.addCard} />
        <div className={style.cardWrapper}>
          {this.state.cards.map((card) => (
            <CardEvent key={card.id} {...card} />
          ))}
        </div>
      </div>
    );
  }
}
