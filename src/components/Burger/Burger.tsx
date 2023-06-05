import React, { FC } from 'react';

import { BurgerLine, BurgerWrapper } from './styled';

interface BurgerProps {
  $isActive: boolean;
  onClick: () => void;
}

const Burger: FC<BurgerProps> = ({ $isActive, onClick }) => {
  return (
    <BurgerWrapper $isActive={$isActive} onClick={onClick}>
      <BurgerLine $isActive={$isActive} />
    </BurgerWrapper>
  );
};

export default Burger;
