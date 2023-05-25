import { createSlice } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

interface InitialState {
  user: User | null;
}

const initialState: InitialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
