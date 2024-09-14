import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          

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
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navigation