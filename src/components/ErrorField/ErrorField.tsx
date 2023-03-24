import { Component } from 'react';

type Error = {
  error: string;
};

export class ErrorField extends Component<Error> {
  render() {
    return <div>{this.props.error}</div>;
  }
}
