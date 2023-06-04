import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  ButtonsWrapper,
  WelcomeContent,
  WelcomeImage,
  WelcomeSubtitle,
  WelcomeText,
  WelcomeTitle,
  WelcomeWrapper,
} from './styled';
import { signUpWithGoogleRequest } from '../../store/saga/authSaga';
import { changeTheme } from '../../store/slices/themeSlice';
import type { StoreType } from '../../store';
import { StyledButton } from '../Button/styled';

const Welcome = () => {
  const theme = useSelector<StoreType, 'light' | 'dark'>((state) => state.theme.theme);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleTheme = () => {
    if (theme === 'light') {
      dispatch(changeTheme({ theme: 'dark' }));
    } else {
      dispatch(changeTheme({ theme: 'light' }));
    }
  };

  const handleNavigateToSignUp = () => {
    navigate('/signup');
  };

  const handleNavigateToLogin = () => {
    navigate('/signin');
  };

  const handleSignInWithGoogle = () => {
    dispatch(signUpWithGoogleRequest());
  };

  return (
    <WelcomeWrapper>
      <WelcomeImage src="/assets/images/BackTwitter.jpg" alt="Twitter image" />
      <WelcomeContent>
        <WelcomeTitle onClick={toggleTheme}>Happening now</WelcomeTitle>
        <WelcomeSubtitle>Join Twitter today</WelcomeSubtitle>
        <ButtonsWrapper>
          <StyledButton $buttonType="bordered" onClick={handleSignInWithGoogle}>
            Sign up with Google
          </StyledButton>
          <StyledButton $buttonType="bordered" onClick={handleNavigateToSignUp}>
            Sign up with phone or email
          </StyledButton>
        </ButtonsWrapper>
        <WelcomeText>
          Already have an account?
          <StyledButton $buttonType="link" onClick={handleNavigateToLogin}>
            Log in
          </StyledButton>
        </WelcomeText>
      </WelcomeContent>
    </WelcomeWrapper>
  );
};

export default Welcome;
