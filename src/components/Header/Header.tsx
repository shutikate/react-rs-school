import { NavLink, useLocation } from 'react-router-dom';
import style from './Header.module.scss';

const isActive = ({ isActive }: { isActive: boolean }) => (isActive ? style.active : '');

export const Header = () => {
  const location = useLocation();

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
        {location.pathname === '/' ? 'Home' : location.pathname.slice(1).replace('-', ' ')}
      </p>
    </div>
  );
};
