import { createSlice } from '@reduxjs/toolkit';
import { FirebaseError } from './authSlice';

export interface TweetType {
  text: string;
  userUid: string;
  UrlToImage?: string;
}

export type InitialState = { tweets: TweetType[]; error: FirebaseError | null };

const initialState: InitialState = {
  tweets: [],
  error: null,
};

const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
    addTweetSuccess: (state, action) => {
      state.tweets = action.payload;
    },
    addTweetFailure: (state, action) => {
      state.error = action.payload;
    },
    syncTweetsSuccess: (state, action) => {
      state.tweets = action.payload;
    },
    syncTweetsFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addTweetSuccess, addTweetFailure, syncTweetsSuccess, syncTweetsFailure } =
  tweetSlice.actions;

export default tweetSlice.reducer;
