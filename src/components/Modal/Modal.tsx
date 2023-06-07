import React, { FC, MouseEvent } from 'react';
import { createPortal } from 'react-dom';

import { Close, CloseButton, CloseButtonWrapper, ModalWindow, Overlay } from './styled';

interface ModalProps {
  children: JSX.Element | JSX.Element[] | string | string[];
  isActive: boolean;
  setActive: (value: boolean) => void;
}

const Modal: FC<ModalProps> = ({ children, isActive, setActive }) => {
  const handleCloseModal = () => {
    setActive(false);
  };

  const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      {createPortal(
        <Overlay $isActive={isActive} onClick={handleCloseModal}>
          <ModalWindow $isActive={isActive} onClick={handleModalClick}>
            <CloseButtonWrapper>
              <CloseButton onClick={handleCloseModal}>
                <Close />
              </CloseButton>
            </CloseButtonWrapper>
            {children}
          </ModalWindow>
        </Overlay>,
        document.body
      )}
    </>
  );
};

export default Modal;
