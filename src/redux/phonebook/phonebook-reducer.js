import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContacts,
  buildContacts,
} from './phonebook-operation';
import actions from './phonebook-actions';

const test = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contacts = createReducer(test, {
  [buildContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContacts.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.filterValue]: (_, { payload }) => payload,
});

const error = createReducer('', {
  [deleteContacts.rejected]: (_, { payload }) => payload,
  [deleteContacts.pending]: () => null,
});

const isLoading = createReducer('', {
  [buildContacts.pending]: () => true,
  [buildContacts.fulfilled]: () => false,
  [buildContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContacts.pending]: () => true,
  [deleteContacts.fulfilled]: () => false,
  [deleteContacts.rejected]: () => false,
});

export default combineReducers({
  contacts,
  filter,
  error,
  isLoading,
});
