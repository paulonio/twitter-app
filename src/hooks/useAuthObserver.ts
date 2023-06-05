import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '@src/firebase';

import type { UserType } from '@store/slices/authSlice';
import {
  syncTweetsRequest,
  setCurrentUserRequest,
  syncUsers,
  logoutRequest,
} from '@store/actions/actions';
import type { StoreType } from '@store/index';

export const useAuthObserver = () => {
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
        dispatch(setCurrentUserRequest());
        dispatch(syncUsers());
      } else {
        dispatch(logoutRequest());
      }
    });
  }, []);
};
