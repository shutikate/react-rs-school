import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

export class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <NavLink to="/" className={({ isActive }) => (isActive ? style.active : '')}>
            Main
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? style.active : '')}>
            About Us
          </NavLink>
        </div>
        <p></p>
      </div>
    );
  }
}
