import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from '../../redux/auth/operations'; 
import { selectIsRefreshing } from '../../redux/auth/selectors'; 
import Layout from '../Layout/Layout';
import HomePage from '../../pages/HomePage/HomePage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing); 

  useEffect(() => {
    dispatch(refreshUser()); 
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Loading...</p>; 
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<RestrictedRoute component={LoginPage} />} />
          <Route path="register" element={<RestrictedRoute component={RegistrationPage}/>} />
          <Route path="contacts" element={<PrivateRoute component={ContactsPage} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
