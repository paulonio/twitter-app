import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Global from './styles/Global';
import RouterElement from './routes';
import type { InitialState } from './store/slices/authSlice';

const App = () => {
  const navigate = useNavigate();
  const user = useSelector<{ auth: InitialState }>((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      navigate('/feed');
    } else {
      navigate('/signin');
    }
  }, [user]);

  return (
    <>
      <Global />
      <RouterElement />
    </>
  );
};

export default App;
