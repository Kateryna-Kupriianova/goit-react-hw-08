import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations'; // Операція логауту
import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors'; // Селектор для отримання інформації про користувача

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser); // Отримуємо дані користувача

  const handleLogout = () => {
    dispatch(logOut()); // Викликаємо операцію логауту
  };

  return (
    <div className={css.userMenu}>
      <p className={css.userName}>Welcome, {user.name}</p>
      <button className={css.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
