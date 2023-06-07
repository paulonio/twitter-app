import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import authReducer from '@store/slices/authSlice';
import tweetReducer from '@store/slices/tweetSlice';
import themeReducer from '@store/slices/themeSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  tweet: tweetReducer,
  theme: themeReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
