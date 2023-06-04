import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import authReducer from '@store/slices/authSlice';
import tweetReducer from '@store/slices/tweetSlice';
import themeReducer from '@store/slices/themeSlice';
import { rootWatcher } from '@store/saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
    tweet: tweetReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootWatcher);

export type StoreType = ReturnType<typeof store.getState>;

export default store;
