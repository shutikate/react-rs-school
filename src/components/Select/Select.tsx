import { Component } from 'react';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label: string;
  options: Array<Option>;
  selectRef: React.RefObject<HTMLSelectElement>;
}

export class Select extends Component<SelectProps> {
  render() {
    return (
      <label>
        {this.props.label}
        <select ref={this.props.selectRef}>
          {this.props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    );
  }
}
