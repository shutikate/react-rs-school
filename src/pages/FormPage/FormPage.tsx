import { Component } from 'react';
import { Form } from '../../components/Form/Form';

type Props = Record<string, never>;
type State = { cards: [] };

export class FormPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { cards: [] };
  }

  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}
