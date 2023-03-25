import { Component } from 'react';
import style from './ErrorField.module.scss';

type Error = {
  error: string;
};

export class ErrorField extends Component<Error> {
  render() {
    return <div className={style.errorWrapper}>{this.props.error}</div>;
  }
}
