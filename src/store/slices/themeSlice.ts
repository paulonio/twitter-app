import { createSlice } from '@reduxjs/toolkit';

export interface Theme {
  theme: 'light' | 'dark';
}

const initialState: Theme = { theme: 'light' };

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => ({
      ...state,
      theme: action.payload.theme,
    }),
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
