import { call, put } from 'redux-saga/effects';

import { loginRequest, signUpWithEmailRequest } from '@store/actions/actions';
import {
  loginWorker,
  logoutWorker,
  signUpWithEmailWorker,
  signUpWithGoogleWorker,
} from '@store/saga/authSaga';
import {
  loginSuccess,
  logoutSuccess,
  signUpWithEmailSuccess,
  signUpWithGoogleSuccess,
  UserType,
} from '@store/slices/authSlice';

import { logoutUser, signInWithEmail, signUpWithEmail, signUpWithGoogle } from '@utils/utils';

const userDataMock: UserType = {
  email: 'test@test.com',
  displayName: 'test',
  uid: '000000000',
};

describe('Test auth saga', () => {
  it('should login user and dispatch success action', () => {
    const action: ReturnType<typeof loginRequest> = {
      type: 'auth/loginRequest',
      payload: { email: 'test@test.com', password: '111111' },
    };

    const gen = loginWorker(action);

    expect(gen.next().value).toEqual(call(signInWithEmail, 'test@test.com', '111111'));
    expect(gen.next(userDataMock).value).toEqual(put(loginSuccess(userDataMock)));
    expect(gen.next().done).toEqual(true);
  });

  it('should sign up with email user and dispatch success action', () => {
    const action: ReturnType<typeof signUpWithEmailRequest> = {
      type: 'auth/signUpWithEmailRequest',
      payload: { email: 'test@test.com', password: '111111', name: 'test' },
    };

    const gen = signUpWithEmailWorker(action);

    expect(gen.next().value).toEqual(call(signUpWithEmail, 'test@test.com', '111111', 'test'));
    expect(gen.next(userDataMock).value).toEqual(put(signUpWithEmailSuccess(userDataMock)));
    expect(gen.next().done).toEqual(true);
  });

  it('should sign in with google user and dispatch success action', () => {
    const gen = signUpWithGoogleWorker();

    expect(gen.next().value).toEqual(call(signUpWithGoogle));
    expect(gen.next(userDataMock).value).toEqual(put(signUpWithGoogleSuccess(userDataMock)));
    expect(gen.next().done).toEqual(true);
  });

  it('should logout user and dispatch success action', () => {
    const gen = logoutWorker();

    expect(gen.next().value).toEqual(call(logoutUser));
    expect(gen.next().value).toEqual(put(logoutSuccess()));
    expect(gen.next().done).toEqual(true);
  });
});
