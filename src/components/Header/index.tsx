import { NavLink } from 'react-router-dom';
import { parseCookies } from 'nookies';
import style from './header.module.scss';

import { TestBuild } from '../TestBuild';

const Header = () => (
  <div className={style.header}>
    <TestBuild />
    <NavLink exact activeClassName={style.linkActive} to="/">
      <h1 className={style.headerName}>Jack&apos;s Warehouse</h1>
    </NavLink>

  </div>
);

export { Header };
