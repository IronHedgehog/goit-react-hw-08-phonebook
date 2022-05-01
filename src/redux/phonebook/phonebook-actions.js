import { createAction } from '@reduxjs/toolkit';

const filterValue = createAction('phonebook/filterValue');

const phoneBookActions = {
  filterValue,
};
export default phoneBookActions;
