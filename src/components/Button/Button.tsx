import { Component } from 'react';
import style from './Button.module.scss';

interface Props {
  text: string;
}

export class Button extends Component<Props> {
  render() {
    return <button className={style.button}>{this.props.text}</button>;
  }
}
