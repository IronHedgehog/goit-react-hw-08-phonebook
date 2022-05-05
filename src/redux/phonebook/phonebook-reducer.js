import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContacts,
  buildContacts,
} from './phonebook-operation';
import actions from './phonebook-actions';

const contacts = createReducer([], {
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
