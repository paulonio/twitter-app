import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { StoreType } from '../../store';
import { changeTheme } from '../../store/slices/themeSlice';
import { StyledButton } from '../Button/styled';

const ThemeSwitcher = () => {
  const theme = useSelector<StoreType, 'light' | 'dark'>((state) => state.theme.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    if (theme === 'light') {
      dispatch(changeTheme({ theme: 'dark' }));
    } else {
      dispatch(changeTheme({ theme: 'light' }));
    }
  };

  return (
    <StyledButton $buttonType="link" onClick={toggleTheme}>
      Switch theme
    </StyledButton>
  );
};

export default ThemeSwitcher;
