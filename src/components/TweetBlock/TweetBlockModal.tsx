import React, { FC } from 'react';

import Modal from '@components/Modal/Modal';
import TweetBlock from '@components/TweetBlock/TweetBlock';

import { TweetBlockWrapper } from './styled';

interface TweetBlockModalProps {
  isActive: boolean;
  setActive: (value: boolean) => void;
}

const TweetBlockModal: FC<TweetBlockModalProps> = ({ isActive, setActive }) => {
  return (
    <Modal isActive={isActive} setActive={setActive}>
      <TweetBlockWrapper>
        <TweetBlock setModal={setActive} />
      </TweetBlockWrapper>
    </Modal>
  );
};

export default TweetBlockModal;
