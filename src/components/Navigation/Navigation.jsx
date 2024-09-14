import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
// import { useSelector } from 'react-redux';

import UserMenu from '../UserMenu/UserMenu';
// import { selectIsLoggedIn } from '../../redux/auth/selectors';

export const Navigation = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          {/* <nav>
      <NavLink className={styles.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={styles.link} to="/tasks">
          Tasks
        </NavLink>
      )}
    </nav> */}

          <nav>
            <ul className={styles.nav}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Register
                </NavLink>
              </li>
            </ul>
            <UserMenu />
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navigation