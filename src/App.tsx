import React from 'react';

import Global from '@styles/Global';

import { useAuthObserver } from '@hooks/useAuthObserver';

import RouterElement from '@routes/index';

const App = () => {
  useAuthObserver();

  return (
    <>
      <Global />
      <RouterElement />
    </>
  );
};

export default App;
