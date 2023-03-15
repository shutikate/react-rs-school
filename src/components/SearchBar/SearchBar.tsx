import { Component } from 'react';
import style from './SearchBar.module.scss';
import { Button } from '../Button/Button';

export class SearchBar extends Component {
  render() {
    return (
      <div className={style.container}>
        <input type="text" placeholder="Search" className={style.input}></input>
        <Button text={'Search'} />
      </div>
    );
  }
}
