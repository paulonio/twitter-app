import { createSlice } from '@reduxjs/toolkit';

export type FirebaseError = { code: string; message: string };

export interface Tweet {
  userUid: string;
  text: string;
  UrlToImage?: string;
}

export interface UserType {
  email: string;
  displayName: string;
  uid: string;
  gender?: 'male' | 'female';
  telegram?: string;
}

export interface InitialState {
  user: UserType | null;
  allUsers: UserType[];
  error: FirebaseError | null;
}

const initialState: InitialState = {
  user: null,
  allUsers: [],
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
      state.error = null;
    },
    getCurrentUser: (state, action) => {
      state.user = action.payload;
    },
    setAllUsers: (state, action) => {
      state.allUsers = action.payload;
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
  setAllUsers,
} = authSlice.actions;
export default authSlice.reducer;
