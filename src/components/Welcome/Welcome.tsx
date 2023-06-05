import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { StyledButton } from '@components/Button/styled';

import { signUpWithGoogleRequest } from '@store/actions/actions';
import {
  ButtonsWrapper,
  WelcomeContent,
  WelcomeImage,
  WelcomeSubtitle,
  WelcomeText,
  WelcomeTitle,
  WelcomeWrapper,
} from './styled';

const Welcome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        <WelcomeTitle>Happening now</WelcomeTitle>
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
