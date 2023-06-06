import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Profile from '@components/Profile/Profile';
import CustomProvider from '@components/EditUser/testUtils';

describe('Profile', () => {
  it('should render profile component', () => {
    const { container } = render(
      <CustomProvider>
        <Profile />
      </CustomProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
