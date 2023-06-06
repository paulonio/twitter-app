import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Nav from '@components/Nav/Nav';
import CustomProvider from '../EditUser/testUtils';

describe('Nav', () => {
  it('should render nav component', () => {
    const { container } = render(
      <CustomProvider>
        <Nav />
      </CustomProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render correct amount of links', () => {
    render(
      <CustomProvider>
        <Nav />
      </CustomProvider>
    );

    const links = screen.getAllByTestId('nav-link');
    expect(links).toHaveLength(8);
  });
});
