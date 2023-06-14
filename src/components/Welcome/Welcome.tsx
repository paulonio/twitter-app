import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '@components/Button/Button';
import { Logo } from '@components/Menu/styled';

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
        <Logo />
        <WelcomeTitle>Happening now</WelcomeTitle>
        <WelcomeSubtitle>Join Twitter today</WelcomeSubtitle>
        <ButtonsWrapper>
          <Button $buttonType="bordered" onClick={handleSignInWithGoogle}>
            Sign up with Google
          </Button>
          <Button $buttonType="bordered" onClick={handleNavigateToSignUp}>
            Sign up with phone or email
          </Button>
        </ButtonsWrapper>
        <WelcomeText>
          Already have an account?
          <Button $buttonType="link" onClick={handleNavigateToLogin}>
            Log in
          </Button>
        </WelcomeText>
      </WelcomeContent>
    </WelcomeWrapper>
  );
};

export default Welcome;
