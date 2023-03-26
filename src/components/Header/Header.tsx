import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

interface Location {
  pathname: string;
}

type Props = Record<string, Location>;

const isActive = ({ isActive }: { isActive: boolean }) => (isActive ? style.active : '');

export class Header extends Component<Props> {
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.links}>
          <NavLink to="/" className={isActive}>
            Home
          </NavLink>
          <NavLink to="/about-us" className={isActive}>
            About Us
          </NavLink>
          <NavLink to="/form" className={isActive}>
            Form
          </NavLink>
        </div>
        <p className={style.namePage}>
          {this.props.location.pathname === '/'
            ? 'Home'
            : this.props.location.pathname.slice(1).replace('-', ' ')}
        </p>
      </div>
    );
  }
}
