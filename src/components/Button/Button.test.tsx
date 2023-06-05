import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from '@components/Button/Button';

describe('Button component', () => {
  it('should render a button', () => {
    const { container } = render(<Button $buttonType="primary" />);

    expect(container).toMatchSnapshot();
  });
});
