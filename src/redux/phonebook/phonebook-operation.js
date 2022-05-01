import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContacts, fetchContacts, deleteContact } from '../../utils/Api';

export const buildContacts = createAsyncThunk(
  'contacts/get',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, { rejectWithValue }) => {
    try {
      const contacts = await addContacts(contact);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// export const deleteContacts = createAsyncThunk(
//   'contacts/delete',
//   async (id, thunkApi) => {
//     try {
//       await deleteContact(id);
//       return id;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   },
// );
export const deleteContacts = createAsyncThunk(
  'contacts/remove',
  async (id, thunkApi) => {
    try {
      await deleteContact(id);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
