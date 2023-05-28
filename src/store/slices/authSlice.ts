import { createSlice } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

type FirebaseError = { code: string; message: string };

export interface InitialState {
  user: User | null;
  error: FirebaseError | null;
}

const initialState: InitialState = {
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.error = null;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    signUpWithEmailSuccess: (state, action) => {
      state.error = null;
      state.user = action.payload;
    },
    signUpWithEmailFailure: (state, action) => {
      state.error = action.payload;
    },
    signUpWithGoogleSuccess: (state, action) => {
      state.error = null;
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
  loginSuccess,
  loginFailure,
  signUpWithEmailSuccess,
  signUpWithEmailFailure,
  signUpWithGoogleSuccess,
  signUpWithGoogleFailure,
  logout,
} = authSlice.actions;
export default authSlice.reducer;
