import { createSlice } from '@reduxjs/toolkit';
import { registration, login, logOut, refreshedUser } from './auth-operation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registration.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshedUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [refreshedUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [refreshedUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
