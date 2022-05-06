import axios from 'axios';

export const fetchContacts = () =>
  axios
    .get('contacts')
    .then(({ data }) => data)
    .catch(error => error.message);

export const addContacts = contacts =>
  axios
    .post('contacts', contacts)
    .then(({ data }) => data)
    .catch(error => error.message);

export const deleteContact = id =>
  axios
    .delete(`contacts/${id}`)
    .then(() => id)
    .catch(error => error);
