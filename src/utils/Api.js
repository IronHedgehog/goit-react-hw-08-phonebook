import axios from 'axios';

axios.defaults.baseURL = 'https://6214c5a789fad53b1f1e70c1.mockapi.io/';

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
