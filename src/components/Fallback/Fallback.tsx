import React, { FC } from 'react';

import { Message, FallbackWrapper } from './styled';

interface FallbackProps {
  message: string;
}

const Fallback: FC<FallbackProps> = ({ message }) => {
  return (
    <FallbackWrapper>
      <Message>{message}</Message>
    </FallbackWrapper>
  );
};

export default Fallback;
