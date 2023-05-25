import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import Global from './styles/Global';
import RouterElement from './routes';
import { auth } from '../firebase';
import { login, logout } from './store/slices/authSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            phoneNumber: user.phoneNumber,
            uid: user.uid,
            dispayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
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
