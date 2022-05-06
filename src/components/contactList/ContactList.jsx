import { useSelector } from 'react-redux';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selector';
import ContactItem from './contactsItem/ContactsItem';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);

  return (
    <ul>
      {contacts.length
        ? contacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))
        : null}
    </ul>
  );
};
export default ContactList;
