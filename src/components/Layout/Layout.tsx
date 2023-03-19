import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import withRouter from '../../hoc/withRouter';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header {...this.props} />
        <div>
          <Outlet />
        </div>
      </div>
    );
  }
}

export default withRouter(Layout);
