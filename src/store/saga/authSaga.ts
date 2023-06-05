import { call, put, takeEvery } from 'redux-saga/effects';
import { updateProfile } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { DocumentData, DocumentSnapshot } from 'firebase/firestore';

import { auth } from '@src/firebase';

import {
  loginFailure,
  loginSuccess,
  signUpWithEmailFailure,
  signUpWithEmailSuccess,
  signUpWithGoogleSuccess,
  signUpWithGoogleFailure,
  logout,
  setAllUsers,
  UserType,
} from '@store/slices/authSlice';
import {
  loginRequest,
  signUpWithEmailRequest,
  updateUserRequest,
  changePasswordRequest,
  signUpWithGoogleRequest,
  setCurrentUserRequest,
  syncUsers,
} from '@store/actions/actions';
import { TWITTER, USERS } from '@constants/constants';

import {
  getDocument,
  signInWithEmail,
  signUpWithEmail,
  signUpWithGoogle,
  updateUserPassword,
  updateUsers,
} from '@utils/utils';

function* loginWorker({ payload }: ReturnType<typeof loginRequest>) {
  const { email, password } = payload;
  try {
    const userData: UserType = yield call(signInWithEmail, email, password);
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
    const { uid }: UserType = yield call(signUpWithEmail, email, password, name);
    yield put(signUpWithEmailSuccess({ email, displayName: name, uid }));
  } catch (error) {
    if (error instanceof FirebaseError) {
      const { code, message } = error;
      yield put(signUpWithEmailFailure({ code, message }));
    }
  }
}

function* signUpWithGoogleWorker() {
  try {
    const { email, displayName, uid }: UserType = yield call(signUpWithGoogle);
    yield put(signUpWithGoogleSuccess({ email, displayName, uid }));
  } catch (error) {
    if (error instanceof FirebaseError) {
      const { code, message } = error;
      yield put(signUpWithGoogleFailure({ code, message }));
    }
  }
}

function* setCurrentUserWorker() {
  const userAuth = auth.currentUser;
  const docSnap: DocumentSnapshot<DocumentData> = yield call(getDocument, TWITTER, USERS);
  const users: UserType[] = docSnap.exists() && docSnap.data().users;
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
  const docSnap: DocumentSnapshot<DocumentData> = yield call(getDocument, 'twitter', USERS);
  const users: UserType[] = docSnap.exists() && docSnap.data().users;
  const [currentUser] = users.filter((user) => user.uid === userAuth?.uid);
  const restUsers = users.filter((user) => user.uid !== userAuth?.uid);
  try {
    if (currentUser && userAuth) {
      const userData: UserType = {
        email: currentUser.email,
        displayName: `${name} ${lastName}`,
        uid: currentUser.uid,
        gender,
        telegram,
      };
      yield call(updateProfile, userAuth, { displayName: `${name} ${lastName}` });
      yield call(updateUsers, TWITTER, USERS, [...restUsers, userData]);
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
      yield call(updateUserPassword, oldPassword, newPassword, user);
      yield put(logout());
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
    const docSnap: DocumentSnapshot<DocumentData> = yield call(getDocument, TWITTER, USERS);
    if (docSnap.exists()) {
      const users: UserType[] = yield call(() => docSnap.data().users);
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
