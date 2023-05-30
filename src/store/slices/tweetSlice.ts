import { createSlice } from '@reduxjs/toolkit';
import { FirebaseError } from './authSlice';

export interface TweetType {
  tweet: string;
  urlToImage?: string;
  userEmail: string;
  displayName: string;
  urlToAvatar?: string;
  userUid: string;
}

export type InitialState = {
  tweets: TweetType[];
  profileTweets: TweetType[];
  error: FirebaseError | null;
};

const initialState: InitialState = {
  tweets: [],
  profileTweets: [],
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
    setProfileTweets: (state, action) => {
      state.profileTweets = action.payload;
    },
  },
});

export const {
  addTweetSuccess,
  addTweetFailure,
  syncTweetsSuccess,
  syncTweetsFailure,
  setProfileTweets,
} = tweetSlice.actions;

export default tweetSlice.reducer;
