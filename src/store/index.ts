import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import authReducer from '@store/slices/authSlice';
import tweetReducer from '@store/slices/tweetSlice';
import themeReducer from '@store/slices/themeSlice';
import { rootWatcher } from '@store/saga';

const rootReducer = combineReducers({
  auth: authReducer,
  tweet: tweetReducer,
  theme: themeReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootWatcher);

export type StoreType = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

export default store;
