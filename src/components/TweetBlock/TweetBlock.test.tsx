import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import TweetBlock from '@components/TweetBlock/TweetBlock';
import CustomProvider from '../EditUser/testUtils';

Object.defineProperty(URL, 'createObjectURL', {
  writable: true,
  value: jest.fn(),
});

describe('TweetBlock', () => {
  it('should render tweet block component', () => {
    const { container } = render(
      <CustomProvider>
        <TweetBlock />
      </CustomProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it('should change tweet input', () => {
    render(
      <CustomProvider>
        <TweetBlock />
      </CustomProvider>
    );

    const tweetInput: HTMLInputElement = screen.getByTestId('tweet-input');
    fireEvent.change(tweetInput, { target: { value: 'test' } });
    expect(tweetInput.value).toEqual('test');
  });

  it('should change image input', async () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });

    render(
      <CustomProvider>
        <TweetBlock />
      </CustomProvider>
    );

    const imageInput: HTMLInputElement = screen.getByTestId('image-input');
    await userEvent.upload(imageInput, file);

    expect(imageInput.files![0]).toStrictEqual(file);
    expect(imageInput.files!.item(0)).toStrictEqual(file);
    expect(imageInput.files).toHaveLength(1);
  });
});
