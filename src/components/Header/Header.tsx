import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

interface Location {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: Record<string, never> | null;
}

type Props = Record<string, Location>;

export class Header extends Component<Props> {
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.links}>
          <NavLink to="/home" className={({ isActive }) => (isActive ? style.active : '')}>
            Home
          </NavLink>
          <NavLink to="/about-us" className={({ isActive }) => (isActive ? style.active : '')}>
            About Us
          </NavLink>
        </div>
        <p className={style.namePage}>{this.props.location.pathname.slice(1).replace('-', ' ')}</p>
      </div>
    );
  }
}
