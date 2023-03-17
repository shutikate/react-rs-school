import { Component } from 'react';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { CardEvent } from '../../components/CardEvent/CardEvent';
import cardData from '../../json/data';
import style from './Main.module.scss';

export class Home extends Component {
  render() {
    return (
      <>
        <SearchBar />
        <h2>Featured Events</h2>
        <div className={style.cardWrapper}>
          {cardData.events.map((card) => (
            <CardEvent key={card.id} {...card} />
          ))}
        </div>
      </>
    );
  }
}
