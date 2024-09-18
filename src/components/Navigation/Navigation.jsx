import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Navigation.module.css';
import UserMenu from '../UserMenu/UserMenu';
import { selectIsLoggedIn } from '../../redux/auth/selectors'; // Селектор для статусу авторизації

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn); // Отримуємо статус логіну

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : styles.link)}
            >
              Home
            </NavLink>
          </li>
          {!isLoggedIn && ( // Показуємо Login і Registration, якщо користувач не залогінений
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? styles.active : styles.link)}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) => (isActive ? styles.active : styles.link)}
                >
                  Registration
                </NavLink>
              </li>
            </>
          )}
          {isLoggedIn && ( // Показуємо Contacts, якщо користувач залогінений
            <>
              <li>
                <NavLink
                  to="/contacts"
                  className={({ isActive }) => (isActive ? styles.active : styles.link)}
                >
                  Contacts
                </NavLink>
              </li>
              <li>
                <UserMenu /> {/* Відображаємо меню користувача (логін, лог-аут) */}
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
