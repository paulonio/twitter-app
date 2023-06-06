import React from 'react';
import { render } from '@testing-library/react';

import Header from '@components/Header/Header';
import CustomProvider from '../EditUser/testUtils';

describe('Header', () => {
  it('should render header', () => {
    const { container } = render(
      <CustomProvider>
        <Header>Home</Header>
      </CustomProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
