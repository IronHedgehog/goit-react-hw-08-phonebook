import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactList from '../components/contactList/ContactList';
import Filter from '../components/Filter/Filter';
import Form from '../components/form/Form';
import { buildContacts } from '../redux/phonebook/phonebook-operation';

const PhoneBookPage = () => {
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

export default PhoneBookPage;
