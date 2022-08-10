import { parseCookies } from 'nookies';
import { NavLink, useHistory } from 'react-router-dom';
import style from './navigator.module.scss';

const Navigator = () => {
  const { 'nextauth.roles': cookieRoles } = parseCookies();

  const decd: string = cookieRoles || '';
  const roles = decd.split(',') as string[];

  return (
    <nav className={style.navigator}>
      <ul>

        <li>
          <NavLink exact activeClassName={style.linkActive} to="/">Home</NavLink>
          <NavLink exact activeClassName={style.linkActive} to="/storage">Storage</NavLink>
        </li>

      </ul>
    </nav>
  );
};

export { Navigator };
