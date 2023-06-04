import { all } from 'redux-saga/effects';

import { authWatcher } from './authSaga';
import { tweetWatcher } from './tweetSaga';

export function* rootWatcher() {
  yield all([authWatcher(), tweetWatcher()]);
}
