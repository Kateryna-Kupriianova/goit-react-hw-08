import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from '../../redux/contacts/contactsOps';
import { selectContacts, selectLoading, selectError } from '../../redux/contacts/contactsSlice';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css';
const HomePage = lazy(() => import('../../pages/HomePage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage')); 
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage')); 
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));

import Navigation from '../Navigation/Navigation';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  console.log("Contacts in App:", contacts);
  
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact)); 
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id)); 
  };

  return (
    <div>
      <Navigation />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </Suspense>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
