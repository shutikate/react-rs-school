import { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <NavLink to="/">Main</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </div>
      </div>
    );
  }
}
