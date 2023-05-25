import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  WelcomeContent,
  WelcomeImage,
  WelcomeSubtitle,
  WelcomeText,
  WelcomeTitle,
  WelcomeWrapper,
} from './styled';
import { BorderedButton } from '../ProfileUserHeader/styled';
import { SecondaryButton } from '../SidebarUsers/styled';
import { signInWithGoogle } from '../../../firebase';

const Welcome = () => {
  const navigate = useNavigate();

  const handleNavigateToSignUp = () => {
    navigate('/signup');
  };

  const handleNavigateToLogin = () => {
    navigate('/signin');
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => result.user && navigate('/feed'))
      .catch(() => {});
  };

  return (
    <WelcomeWrapper>
      <WelcomeImage src="/assets/images/BackTwitter.jpg" alt="Twitter image" />
      <WelcomeContent>
        <WelcomeTitle>Happening now</WelcomeTitle>
        <WelcomeSubtitle>Join Twitter today</WelcomeSubtitle>
        <BorderedButton onClick={handleSignInWithGoogle}>Sign up with Google</BorderedButton>
        <BorderedButton onClick={handleNavigateToSignUp}>
          Sign up with phone or email
        </BorderedButton>
        <WelcomeText>
          Already have an account?{' '}
          <SecondaryButton onClick={handleNavigateToLogin}>Log in</SecondaryButton>
        </WelcomeText>
      </WelcomeContent>
    </WelcomeWrapper>
  );
};

export default Welcome;
