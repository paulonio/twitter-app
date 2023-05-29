import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import Global from './styles/Global';
import RouterElement from './routes';
import { InitialState, User, getCurrentUser } from './store/slices/authSlice';
import { syncTweetsRequest } from './store/saga/tweetSaga';
import { auth } from '../firebase';

const App = () => {
  const user = useSelector<{ auth: InitialState }>((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      navigate('/feed');
    } else {
      navigate('/signin');
    }
  }, [user]);

  useEffect(() => {
    dispatch(syncTweetsRequest());
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        const userData: User = {
          email: userAuth.email!,
          displayName: userAuth.displayName!,
          uid: userAuth.uid,
        };
        dispatch(getCurrentUser(userData));
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
