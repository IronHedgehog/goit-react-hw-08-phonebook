import { getFilter } from '../../redux/phonebook/phonebook-selector';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/phonebook/phonebook-actions';
const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label>
      <span>filter by name</span>
      <input
        type="text"
        name="name"
        value={filter}
        onChange={e => dispatch(actions.filterValue(e.target.value))}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        autoComplete="off"
      />
    </label>
  );
};

export default Filter;
