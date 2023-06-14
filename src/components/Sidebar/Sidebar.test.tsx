import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Sidebar from '@components/Sidebar/Sidebar';
import CustomProvider from '@components/EditUser/testUtils';

describe('Profile', () => {
  it('should render profile component', () => {
    const { container } = render(
      <CustomProvider>
        <Sidebar type="profile" />
      </CustomProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it('should change search correctly', () => {
    render(
      <CustomProvider>
        <Sidebar type="profile" />
      </CustomProvider>
    );

    const search: HTMLInputElement = screen.getByTestId('search');
    fireEvent.change(search, { target: { value: 'Test' } });
    expect(search.value).toEqual('Test');
  });
});
