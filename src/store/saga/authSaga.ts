import { createAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  EmailAuthCredential,
  EmailAuthProvider,
  UserCredential,
  createUserWithEmailAndPassword,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  updateProfile,
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { DocumentData, DocumentSnapshot } from 'firebase/firestore';

import { auth, signInWithGoogle } from '@src/firebase';

import type { LoginForm } from '@components/Login/Login';
import type { SignUpForm } from '@components/SignUp/SignUp';
import type { EditUserForm } from '@components/EditUser/EditUser';
import type { ChangePasswordForm } from '@components/ChangePassword/ChangePassword';

import {
  loginFailure,
  loginSuccess,
  signUpWithEmailFailure,
  signUpWithEmailSuccess,
  signUpWithGoogleSuccess,
  signUpWithGoogleFailure,
  User,
  logout,
  setAllUsers,
} from '@store/slices/authSlice';
import { TWITTER } from '@store/saga/tweetSaga';

import { getDocument, updateUsers } from '@utils/utils';

export const loginRequest = createAction<LoginForm>('auth/loginRequest');
export const signUpWithEmailRequest = createAction<SignUpForm>('auth/signUpWithEmailRequest');
export const signUpWithGoogleRequest = createAction('auth/signUpWithGoogleRequest');
export const setCurrentUserRequest = createAction('auth/setCurrentUserRequest');
export const updateUserRequest = createAction<EditUserForm>('auth/updateUserRequest');
export const changePasswordRequest = createAction<ChangePasswordForm>('auth/updatePasswordRequest');
export const syncUsers = createAction('auth/syncUsers');

function* loginWorker({ payload }: ReturnType<typeof loginRequest>) {
  const { email, password } = payload;
  try {
    const { user }: UserCredential = yield call(signInWithEmailAndPassword, auth, email, password);
    const userData: User = {
      email: user.email!,
      displayName: user.displayName!,
      uid: user.uid,
      gender: 'male',
      telegram: '',
    };
    yield call(updateUsers, 'twitter', 'users', userData);
    yield put(loginSuccess(userData));
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
    const { user }: UserCredential = yield call(
      createUserWithEmailAndPassword,
      auth,
      email,
      password
    );
    const userData: User = {
      email: user.email!,
      displayName: user.displayName!,
      uid: user.uid,
      gender: 'male',
      telegram: '',
    };
    yield call(updateProfile, user, { displayName: name });
    yield call(updateUsers, 'twitter', 'users', userData);
    yield call(signOut, auth);
    yield put(
      signUpWithEmailSuccess({
        email: user.email,
        displayName: user.displayName,
        uid: user.uid,
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
    const { user }: UserCredential = yield call(signInWithGoogle);
    const userData: User = {
      email: user.email!,
      displayName: user.displayName!,
      uid: user.uid,
      gender: 'male',
      telegram: '',
    };
    yield call(updateUsers, 'twitter', 'users', userData);
    yield put(
      signUpWithGoogleSuccess({
        email: user.email,
        displayName: user.displayName,
        uid: user.uid,
      })
    );
  } catch (error) {
    if (error instanceof FirebaseError) {
      const { code, message } = error;
      yield put(signUpWithGoogleFailure({ code, message }));
    }
  }
}

function* setCurrentUserWorker() {
  const userAuth = auth.currentUser;
  const docSnap: DocumentSnapshot<DocumentData> = yield call(getDocument, 'twitter', 'users');
  const users: User[] = docSnap.exists() && docSnap.data().users;
  const [currentUser] = users.filter((user) => user.uid === userAuth?.uid);
  try {
    if (currentUser) {
      yield put(loginSuccess(currentUser));
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      const { code, message } = error;
      yield put(loginFailure({ code, message }));
    }
  }
}

function* updateUserInfoWorker({ payload }: ReturnType<typeof updateUserRequest>) {
  const { name, lastName, gender, telegram } = payload;
  const userAuth = auth.currentUser;
  const docSnap: DocumentSnapshot<DocumentData> = yield call(getDocument, 'twitter', 'users');
  const users: User[] = docSnap.exists() && docSnap.data().users;
  const [currentUser] = users.filter((user) => user.uid === userAuth?.uid);
  const restUsers = users.filter((user) => user.uid !== userAuth?.uid);
  try {
    if (currentUser && userAuth) {
      const userData: User = {
        email: currentUser.email,
        displayName: `${name} ${lastName}`,
        uid: currentUser.uid,
        gender,
        telegram,
      };
      yield call(updateProfile, userAuth, { displayName: `${name} ${lastName}` });
      yield call(updateUsers, 'twitter', 'users', [...restUsers, userData]);
      yield put(loginSuccess(userData));
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      const { code, message } = error;
      yield put(loginFailure({ code, message }));
    }
  }
}

function* updatePasswordRequest({ payload }: ReturnType<typeof changePasswordRequest>) {
  const user = auth.currentUser;
  const { oldPassword, newPassword } = payload;
  try {
    if (user && user.email) {
      const creds: EmailAuthCredential = yield call(
        EmailAuthProvider.credential,
        user?.email,
        oldPassword
      );
      yield call(reauthenticateWithCredential, user, creds);
      yield call(updatePassword, user, newPassword);
      yield put(logout());
      yield call(auth.signOut);
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      const { code, message } = error;
      yield put(loginFailure({ code, message }));
    }
  }
}

function* getAllUsers() {
  try {
    const docSnap: DocumentSnapshot<DocumentData> = yield call(getDocument, TWITTER, 'users');
    if (docSnap.exists()) {
      const users: User[] = yield call(() => docSnap.data().users);
      yield put(setAllUsers(users));
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      const { code, message } = error;
      yield put(loginFailure({ code, message }));
    }
  }
}

export function* authWatcher() {
  yield takeEvery(loginRequest, loginWorker);
  yield takeEvery(signUpWithEmailRequest, signUpWithEmailWorker);
  yield takeEvery(signUpWithGoogleRequest, signUpWithGoogleWorker);
  yield takeEvery(setCurrentUserRequest, setCurrentUserWorker);
  yield takeEvery(updateUserRequest, updateUserInfoWorker);
  yield takeEvery(changePasswordRequest, updatePasswordRequest);
  yield takeEvery(syncUsers, getAllUsers);
}
