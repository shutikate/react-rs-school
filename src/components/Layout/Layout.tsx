import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

export class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Outlet />
        </div>
      </div>
    );
  }
}
