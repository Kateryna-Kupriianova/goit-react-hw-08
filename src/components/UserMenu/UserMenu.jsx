import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations'; // Імпортуємо операцію logout
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user); // Отримуємо дані користувача з redux

  const handleLogout = () => {
    dispatch(logOut()); // Викликаємо операцію logout при кліку на кнопку "Вийти"
  };

  return (
    <div className={css.userMenu}>
      <p className={css.userName}>Welcome, {user.name}</p>
      <button className={css.logoutButton} onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
