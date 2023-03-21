import { Component } from 'react';
import style from './Button.module.scss';

interface Props {
  text: string;
  type: 'submit' | 'button';
}

export class Button extends Component<Props> {
  render() {
    return (
      <button type={this.props.type} className={style.button}>
        {this.props.text}
      </button>
    );
  }
}
