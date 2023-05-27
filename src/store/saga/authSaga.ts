import {
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { call, put, takeEvery } from 'redux-saga/effects';
import { FirebaseError } from 'firebase/app';
import { auth, signInWithGoogle } from '../../../firebase';
import {
  loginFailure,
  loginSuccess,
  login,
  signUpWithEmail,
  signUpWithEmailFailure,
  signUpWithEmailSuccess,
  signUpWithGoogle,
  signUpWithGoogleSuccess,
  signUpWithGoogleFailure,
} from '../slices/authSlice';

function* loginWorker({ payload }: ReturnType<typeof login>) {
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
        dislayName: userAuth.user.displayName,
        uid: userAuth.user.uid,
      })
    );
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* signUpWithEmailWorker({ payload }: ReturnType<typeof signUpWithEmail>) {
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
        dislayName: userAuth.user.displayName,
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
  yield takeEvery(login, loginWorker);
  yield takeEvery(signUpWithEmail, signUpWithEmailWorker);
  yield takeEvery(signUpWithGoogle, signUpWithGoogleWorker);
}
