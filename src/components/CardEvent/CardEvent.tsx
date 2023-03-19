import { Component } from 'react';
import { Event } from '../../json/data';
import style from './CardEvent.module.scss';

export class CardEvent extends Component<Event> {
  render() {
    return (
      <div data-testid={this.props.id} className={style.wrapper}>
        <div>
          <img src={this.props.photo} alt={'Photo of the event'} className={style.image}></img>
          <h5>{this.props.category}</h5>
          <h4>{this.props.name}</h4>
          <div className={style.infoBlock}>
            <div className={style.infoLine}>
              <p className={style.date}>{this.props.date}</p>
              <p className={style.time}>{this.props.timeStart}</p>
            </div>
            <p className={style.place}>{this.props.address}</p>
            <p className={style.phone}>{this.props.contact}</p>
          </div>
          <div className={style.infoLine}>
            <p>{this.props.payment}</p>
            <p>
              {this.props.minPrice && this.props.maxPrice
                ? `${this.props.minPrice}$ - ${this.props.maxPrice}$`
                : ''}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
