import React from 'react';
import { render } from '@testing-library/react';

import Home from '@components/Home/Home';
import CustomProvider from '../EditUser/testUtils';

describe('Home', () => {
  it('should render home component', () => {
    const { container } = render(
      <CustomProvider>
        <Home />
      </CustomProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
