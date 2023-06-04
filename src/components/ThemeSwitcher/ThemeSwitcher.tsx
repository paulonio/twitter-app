import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StyledButton } from '@components/Button/styled';

import type { StoreType } from '@store/index.ts';
import { changeTheme } from '@store/slices/themeSlice';

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
