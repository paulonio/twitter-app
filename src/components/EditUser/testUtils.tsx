import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from '@src/store';

import Theme from '@components/Theme/Theme';
import { BrowserRouter } from 'react-router-dom';

interface CustomProviderProps {
  children: JSX.Element | JSX.Element[] | string | string[];
}

const CustomProvider: FC<CustomProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Theme>{children}</Theme>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default CustomProvider;
