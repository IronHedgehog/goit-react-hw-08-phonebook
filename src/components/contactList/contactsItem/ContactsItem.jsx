import { getIsLoading } from '../../../redux/phonebook/phonebook-selector';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from '../../../redux/phonebook/phonebook-operation';
import { ThreeDots } from 'react-loader-spinner';

const ContactItem = ({ id, name, number }) => {
  const isLoading = useSelector(getIsLoading);

  const dispatch = useDispatch();
  return (
    <li>
      <p name={name}>
        {name}: {number}
      </p>
      <button onClick={() => dispatch(deleteContacts(id))} disabled={isLoading}>
        {isLoading ? (
          <ThreeDots color="#ff0000" height={20} width={20} />
        ) : (
          'Delete'
        )}
      </button>
    </li>
  );
};

export default ContactItem;
