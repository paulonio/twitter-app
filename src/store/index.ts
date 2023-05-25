import { configureStore } from '@reduxjs/toolkit';
import authReduser from './slices/authSlice';

const store = configureStore({
  reducer: {
    authReduser,
  },
});

export default store;
