import { Component } from 'react';
import style from './SearchBar.module.scss';
import { Button } from '../Button/Button';

type Props = Record<string, never>;
type State = { searchValue: string };

export class SearchBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { searchValue: localStorage.getItem('sk-search-value') || '' };
  }

  changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: event.target.value });
  };

  componentWillUnmount(): void {
    localStorage.setItem('sk-search-value', this.state.searchValue);
  }

  render() {
    return (
      <div className={style.container}>
        <input
          type="text"
          placeholder="Search"
          className={style.input}
          value={this.state.searchValue}
          onChange={this.changeInputValue}
        ></input>
        <Button text={'Search'} />
      </div>
    );
  }
}
