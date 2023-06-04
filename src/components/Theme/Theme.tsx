import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../styles/theme';
import { StoreType } from '../../store';

interface ThemeProps {
  children: JSX.Element | JSX.Element[] | string | string[];
}

const Theme: FC<ThemeProps> = ({ children }) => {
  const theme = useSelector<StoreType, 'light' | 'dark'>((state) => state.theme.theme);
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

export default Theme;
