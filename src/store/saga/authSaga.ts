import { createAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { auth, signInWithGoogle } from '../../../firebase';
import {
  loginFailure,
  loginSuccess,
  signUpWithEmailFailure,
  signUpWithEmailSuccess,
  signUpWithGoogleSuccess,
  signUpWithGoogleFailure,
} from '../slices/authSlice';
import type { LoginForm } from '../../components/Login/Login';
import type { SignUpForm } from '../../components/SignUp/SignUp';

export const loginRequest = createAction<LoginForm>('auth/loginRequest');
export const signUpWithEmailRequest = createAction<SignUpForm>('auth/signUpWithEmailRequest');
export const signUpWithGoogleRequest = createAction('auth/signUpWithGoogleRequest');

function* loginWorker({ payload }: ReturnType<typeof loginRequest>) {
  try {
    const userAuth: UserCredential = yield call(
      signInWithEmailAndPassword,
      auth,
      payload.email,
      payload.password
    );
    yield put(
      loginSuccess({
        email: userAuth.user.email,
        displayName: userAuth.user.displayName,
        uid: userAuth.user.uid,
      })
    );
  } catch (error) {
    if (error instanceof FirebaseError) {
      const { code, message } = error;
      yield put(loginFailure({ code, message }));
    }
  }
}

function* signUpWithEmailWorker({ payload }: ReturnType<typeof signUpWithEmailRequest>) {
  const { email, password, name } = payload;
  try {
    const userAuth: UserCredential = yield call(
      createUserWithEmailAndPassword,
      auth,
      email,
      password
    );
    yield call(updateProfile, userAuth.user, { displayName: name });
    yield call(signOut, auth);
    yield put(
      signUpWithEmailSuccess({
        email: userAuth.user.email,
        displayName: userAuth.user.displayName,
        uid: userAuth.user.uid,
      })
    );
  } catch (error) {
    if (error instanceof FirebaseError) {
      const { code, message } = error;
      yield put(signUpWithEmailFailure({ code, message }));
    }
  }
}

function* signUpWithGoogleWorker() {
  try {
    const userAuth: UserCredential = yield call(signInWithGoogle);
    yield put(
      signUpWithGoogleSuccess({
        email: userAuth.user.email,
        displayName: userAuth.user.displayName,
        uid: userAuth.user.uid,
      })
    );
  } catch (error) {
    if (error instanceof FirebaseError) {
      const { code, message } = error;
      yield put(signUpWithGoogleFailure({ code, message }));
    }
  }
}

export function* authWatcher() {
  yield takeEvery(loginRequest, loginWorker);
  yield takeEvery(signUpWithEmailRequest, signUpWithEmailWorker);
  yield takeEvery(signUpWithGoogleRequest, signUpWithGoogleWorker);
}
