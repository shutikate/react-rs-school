import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

export class Header extends Component {
  state = { page: 'Main' };
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.links}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? style.active : '')}
            onClick={() => this.setState({ page: 'Main' })}
          >
            Main
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? style.active : '')}
            onClick={() => this.setState({ page: 'About Us' })}
          >
            About Us
          </NavLink>
        </div>
        <p className={style.namePage}>{this.state.page}</p>
      </div>
    );
  }
}
