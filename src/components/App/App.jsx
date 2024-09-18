import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from '../../redux/contacts/contactsOps';
import { selectContacts, selectLoading, selectError } from '../../redux/contacts/contactsSlice';
import { refreshUser } from '../../redux/auth/operations';
// import ContactForm from '../ContactForm/ContactForm';
// import ContactList from '../ContactList/ContactList';
// import SearchBox from '../SearchBox/SearchBox';
// import css from './App.module.css';
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage')); 
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage')); 
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));

import Navigation from '../Navigation/Navigation';
import Layout from '../Layout/Layout';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  console.log("Contacts in App:", contacts);
  const isRefreshing = useSelector((state) => state.auth.isRefresh);
  
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  if (isRefreshing) {
    return <p>Loading...</p>;
  }

  // const handleAddContact = (newContact) => {
  //   dispatch(addContact(newContact)); 
  // };

  // const handleDeleteContact = (id) => {
  //   dispatch(deleteContact(id)); 
  // };

  return (
    <div>
      <Navigation />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </Suspense>
      {/* <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} /> */}
    </div>
  );
};

export default App;
