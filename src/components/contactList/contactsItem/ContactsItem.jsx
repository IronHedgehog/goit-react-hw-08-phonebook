import PropTypes from 'prop-types';
import {
  getVisibleContacts,
  getIsLoading,
} from '../../../redux/phonebook/phonebook-selector';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from '../../../redux/phonebook/phonebook-operation';

const ContactItem = () => {
  const loader = useSelector(getIsLoading);
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  return (
    <>
      {contacts.length
        ? contacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <p name={name}>
                  {name}: {number}
                </p>
                <button
                  type="button"
                  onClick={() => dispatch(deleteContacts(id))}
                >
                  {loader ? <p>Loading</p> : 'Delete'}
                </button>
              </li>
            );
          })
        : null}
    </>
  );
};
export default ContactItem;
