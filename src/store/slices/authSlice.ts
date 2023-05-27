import { createSlice } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

interface InitialState {
  user: User | null;
  error: Error | null;
}

const initialState: InitialState = {
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.error = action.payload;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    signUpWithEmail: (state, action) => {
      state.error = action.payload;
    },
    signUpWithEmailSuccess: (state, action) => {
      state.user = action.payload;
    },
    signUpWithEmailFailure: (state, action) => {
      state.error = action.payload;
    },
    signUpWithGoogle: (state) => {
      return state;
    },
    signUpWithGoogleSuccess: (state, action) => {
      state.user = action.payload;
    },
    signUpWithGoogleFailure: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const {
  login,
  loginSuccess,
  logout,
  loginFailure,
  signUpWithEmail,
  signUpWithEmailSuccess,
  signUpWithEmailFailure,
  signUpWithGoogle,
  signUpWithGoogleSuccess,
  signUpWithGoogleFailure,
} = authSlice.actions;
export default authSlice.reducer;
