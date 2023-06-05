import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '@src/firebase';

import { UserType, logout } from '@store/slices/authSlice';
import { syncTweetsRequest, setCurrentUserRequest, syncUsers } from '@store/actions/actions';
import type { StoreType } from '@store/index';

import Global from '@styles/Global';

import RouterElement from '@routes/index';

const App = () => {
  const user = useSelector<StoreType, UserType | null>((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(syncTweetsRequest(user));
      navigate('/feed');
    } else {
      navigate('/');
    }
  }, [user]);

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // dispatch(setCurrentUserRequest());
        dispatch(syncUsers());
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <>
      <Global />
      <RouterElement />
    </>
  );
};

export default App;
