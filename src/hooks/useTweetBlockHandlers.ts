import { ChangeEvent, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SubmitHandler } from 'react-hook-form';

import { TweetFormType } from '@components/TweetBlock/TweetBlock';

import { addTweetRequest } from '@store/actions/actions';
import { AddTweetRequest } from '@store/saga/tweetSaga';
import type { UserType } from '@store/slices/authSlice';
import type { StoreType } from '@store/index';

import { parseDate } from '@utils/utils';

export const useTweetBlockHandlers = (reset: () => void, setModal?: (value: boolean) => void) => {
  const user = useSelector<StoreType, UserType | null>((state) => state.auth.user);
  const dispatch = useDispatch();
  const [image, setImage] = useState<File | undefined>(undefined);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit: SubmitHandler<TweetFormType> = (data) => {
    const { tweet } = data;
    if (user) {
      const { uid, displayName, email } = user;
      const date = new Date();
      const dateString = parseDate(date);
      const id = `${date.getTime()}`;
      const userTweet: AddTweetRequest = {
        id,
        date: dateString,
        tweet,
        userEmail: email,
        displayName,
        userUid: uid,
        image,
      };
      if (setModal) {
        setModal(false);
      }
      reset();
      setImage(undefined);
      setPreviewUrl('');
      dispatch(addTweetRequest(userTweet));
    }
  };

  const handleAddImage = () => {
    if (inputRef.current !== null) {
      inputRef.current.click();
    }
  };

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileImage = e.target.files[0];
      const url = URL.createObjectURL(fileImage);
      setImage(fileImage);
      setPreviewUrl(url);
    }
  };

  return { previewUrl, inputRef, onSubmit, handleAddImage, handleChangeImage };
};
