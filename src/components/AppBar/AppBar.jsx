import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { selectIsLoggedIn } from '../../redux/auth/selectors'; // Імпортуємо селектор для перевірки авторизації

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn); // Отримуємо статус авторизації

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />} {/* Показуємо або AuthNav, або UserMenu */}
    </header>
  );
};

export default AppBar;
