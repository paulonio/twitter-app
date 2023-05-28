import { createSlice } from '@reduxjs/toolkit';

type FirebaseError = { code: string; message: string };

export interface Tweet {
  userUid: string;
  text: string;
  UrlToImage?: string;
}

export interface User {
  email: string;
  displayName: string;
  uid: string;
  tweets: Tweet[];
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
    addTweet: (state, action) => {
      if (state.user && !state.user.tweets) {
        state.user.tweets = [action.payload];
      } else if (state.user) {
        state.user.tweets.push(action.payload);
      }
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
  addTweet,
} = authSlice.actions;
export default authSlice.reducer;
