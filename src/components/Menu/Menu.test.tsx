import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Menu from '@components/Menu/Menu';
import CustomProvider from '../EditUser/testUtils';

describe('Menu', () => {
  it('should render Menu component', () => {
    const { container } = render(
      <CustomProvider>
        <Menu />
      </CustomProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it('should open modal on button click', () => {
    render(
      <CustomProvider>
        <Menu />
      </CustomProvider>
    );

    const button: HTMLButtonElement = screen.getByTestId('menu-button');
    fireEvent.click(button);
    const input: HTMLInputElement = screen.getByTestId('tweet-input');

    expect(input).toBeInTheDocument();
  });
});
