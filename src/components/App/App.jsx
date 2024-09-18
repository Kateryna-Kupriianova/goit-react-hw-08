import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from '../../redux/auth/operations'; // Операція для оновлення користувача
import { selectIsRefreshing } from '../../redux/auth/selectors'; // Селектор для перевірки статусу оновлення
import Layout from '../Layout/Layout';
import HomePage from '../../pages/HomePage/HomePage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing); // Перевіряємо статус оновлення

  useEffect(() => {
    dispatch(refreshUser()); // Оновлюємо дані користувача при першому завантаженні
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Loading...</p>; // Показуємо індикатор завантаження під час оновлення
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
