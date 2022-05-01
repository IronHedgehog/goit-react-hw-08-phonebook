import { useEffect } from 'react';
import './App.css';
import ContactList from './components/contactList/ContactList';
import Filter from './components/Filter/Filter';
import Form from './components/form/Form';
import { getContacts } from './redux/phonebook/phonebook-selector';
import { useDispatch, useSelector } from 'react-redux';
import { buildContacts } from './redux/phonebook/phonebook-operation';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(buildContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
