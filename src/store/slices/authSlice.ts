import { createSlice } from '@reduxjs/toolkit';

export type FirebaseError = { code: string; message: string };

export interface Tweet {
  userUid: string;
  text: string;
  UrlToImage?: string;
}

export interface User {
  email: string;
  displayName: string;
  uid: string;
  bio: string;
}

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
    getCurrentUser: (state, action) => {
      state.user = action.payload;
    },
    updateUserBio: (state, action) => {
      state.user!.bio = action.payload;
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
  getCurrentUser,
  updateUserBio,
} = authSlice.actions;
export default authSlice.reducer;
