import { createAction } from '@reduxjs/toolkit';

import type { ChangePasswordForm } from '@src/components/EditUser/ChangePassword';
import type { EditUserForm } from '@src/components/EditUser/EditUser';
import type { LoginForm } from '@src/components/Login/Login';
import type { SignUpForm } from '@src/components/SignUp/SignUp';
import type { AddTweetRequest } from '../saga/tweetSaga';
import type { UserType } from '../slices/authSlice';

export const loginRequest = createAction<LoginForm>('auth/loginRequest');
export const signUpWithEmailRequest = createAction<SignUpForm>('auth/signUpWithEmailRequest');
export const signUpWithGoogleRequest = createAction('auth/signUpWithGoogleRequest');
export const setCurrentUserRequest = createAction('auth/setCurrentUserRequest');
export const updateUserRequest = createAction<EditUserForm>('auth/updateUserRequest');
export const changePasswordRequest = createAction<ChangePasswordForm>('auth/updatePasswordRequest');
export const syncUsers = createAction('auth/syncUsers');
export const logoutRequest = createAction('auth/logoutRequest');
export const addTweetRequest = createAction<AddTweetRequest>('tweet/addTweetRequest');
export const syncTweetsRequest = createAction<UserType>('tweet/syncTweetsRequest');
