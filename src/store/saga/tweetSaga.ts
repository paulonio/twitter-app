import { FirebaseError } from 'firebase/app';
import { call, put, takeEvery } from 'redux-saga/effects';
import { DocumentData, DocumentSnapshot } from 'firebase/firestore';

import {
  TweetType,
  addTweetFailure,
  addTweetSuccess,
  setProfileTweets,
  syncTweetsFailure,
  syncTweetsSuccess,
} from '@store/slices/tweetSlice';
import { addTweetRequest, syncTweetsRequest } from '@store/actions/actions';

import { TWITTER, TWEETS } from '@constants/constants';

import { getDocument, updateDocument, uploadImage } from '@utils/utils';

export interface AddTweetRequest extends Omit<TweetType, 'urlToImage'> {
  image?: File;
}

export function* addTweetWorker({ payload }: ReturnType<typeof addTweetRequest>) {
  try {
    const urlToImage: string | undefined = yield call(uploadImage, payload.image);
    delete payload.image;

    const data: TweetType = { ...payload, urlToImage };
    const result: TweetType[] = yield call(updateDocument, TWITTER, TWEETS, data);
    const profileTweets = result.filter((tweet) => tweet.userEmail === data.userEmail);

    yield put(setProfileTweets(profileTweets));
    yield put(addTweetSuccess(result));
  } catch (error) {
    if (error instanceof FirebaseError) {
      const { code, message } = error;
      yield put(addTweetFailure({ code, message }));
    }
  }
}

function* syncTweetsWorker({ payload }: ReturnType<typeof syncTweetsRequest>) {
  try {
    const docSnap: DocumentSnapshot<DocumentData> = yield call(getDocument, TWITTER, TWEETS);
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
