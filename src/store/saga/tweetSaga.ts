import { FirebaseError } from 'firebase/app';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  DocumentData,
  DocumentSnapshot,
  arrayUnion,
  collection,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import { createAction } from '@reduxjs/toolkit';
import {
  TweetType,
  addTweetFailure,
  addTweetSuccess,
  setProfileTweets,
  syncTweetsFailure,
  syncTweetsSuccess,
} from '../slices/tweetSlice';
import { db } from '../../../firebase';
import type { User } from '../slices/authSlice';

const TWITTER = 'twitter';
const TWEETS = 'tweets';

export const addTweetRequest = createAction<TweetType>('tweet/addTweetRequest');
export const syncTweetsRequest = createAction<User>('tweet/syncTweetsRequest');

function* addTweetWorker({ payload }: ReturnType<typeof addTweetRequest>) {
  try {
    const twitterRef = collection(db, TWITTER);
    const docRef = doc(db, TWITTER, TWEETS);
    yield call(() => updateDoc(doc(twitterRef, TWEETS), { tweets: arrayUnion(payload) }));
    const docSnap: DocumentSnapshot<DocumentData> = yield call(() => getDoc(docRef));
    if (docSnap.exists()) {
      const result: TweetType[] = yield call(() => docSnap.data().tweets);
      const profileTweets = result.filter((tweet) => tweet.userEmail === payload.userEmail);
      yield put(setProfileTweets(profileTweets));
      yield put(addTweetSuccess(result));
    } else {
      yield put(addTweetSuccess([]));
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      const { code, message } = error;
      yield put(addTweetFailure({ code, message }));
    }
  }
}

function* syncTweetsWorker({ payload }: ReturnType<typeof syncTweetsRequest>) {
  try {
    const docRef = doc(db, TWITTER, TWEETS);
    const docSnap: DocumentSnapshot<DocumentData> = yield call(() => getDoc(docRef));
    if (docSnap.exists()) {
      const result: TweetType[] = yield call(() => docSnap.data().tweets);
      const profileTweets = result.filter((tweet) => tweet.userEmail === payload.email);
      yield put(setProfileTweets(profileTweets));
      yield put(syncTweetsSuccess(result));
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      const { code, message } = error;
      yield put(syncTweetsFailure({ code, message }));
    }
  }
}

export function* tweetWatcher() {
  yield takeEvery(addTweetRequest, addTweetWorker);
  yield takeEvery(syncTweetsRequest, syncTweetsWorker);
}
