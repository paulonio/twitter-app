import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Avatar from '@components/Avatar/Avatar';
import Button from '@components/Button/Button';

import ImageIcon from '@icons/ImageIcon';

import { useTweetBlockHandlers } from '@hooks/useTweetBlockHandlers';

import {
  AvatarWrapper,
  ButtonWrapper,
  FileInput,
  ImageControlsWrapper,
  PreviewImage,
  TweetForm,
  TweetFooter,
  TweetInput,
  TweetWrapper,
} from './styled';

interface TweetBlockProps {
  setModal?: (value: boolean) => void;
}

export interface TweetFormType {
  tweet: string;
}

const schema = yup
  .object({
    tweet: yup.string().trim().min(3).required(),
  })
  .required();

const TweetBlock: FC<TweetBlockProps> = ({ setModal }) => {
  const { register, handleSubmit, reset } = useForm<TweetFormType>({
    resolver: yupResolver(schema),
  });

  const { previewUrl, inputRef, onSubmit, handleAddImage, handleChangeImage } =
    useTweetBlockHandlers(reset, setModal);

  return (
    <TweetWrapper>
      <AvatarWrapper>
        <Avatar />
      </AvatarWrapper>
      <TweetForm onSubmit={handleSubmit(onSubmit)}>
        <TweetInput {...register('tweet')} data-testid="tweet-input" />
        <TweetFooter>
          <ImageControlsWrapper>
            <ImageIcon onClick={handleAddImage} />
            <FileInput ref={inputRef} onChange={handleChangeImage} data-testid="image-input" />
            {previewUrl && <PreviewImage src={previewUrl} alt="Preview" />}
          </ImageControlsWrapper>
          <ButtonWrapper>
            <Button $buttonType="primary" data-testid="tweet-button">
              Tweet
            </Button>
          </ButtonWrapper>
        </TweetFooter>
      </TweetForm>
    </TweetWrapper>
  );
};

export default TweetBlock;
