import { styled } from 'styled-components';

interface ModalProps {
  $isActive: boolean;
}

export const Overlay = styled.div<ModalProps>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  z-index: 100;
  opacity: ${({ $isActive }) => ($isActive ? '1' : '0')};
  pointer-events: ${({ $isActive }) => ($isActive ? 'all' : 'none')};
  transition: opacity 0.5s;
`;

export const ModalWindow = styled.div<ModalProps>`
  width: 90%;
  max-width: 840px;
  background-color: rgba(255, 255, 255, 1);
  padding: 12px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.backgroundBody};
  border-radius: 8px;
  transform: ${({ $isActive }) => ($isActive ? 'scale(1)' : 'scale(0.3)')};
  transition: transform 0.5s;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    border-radius: 0;
    overflow-y: scroll;
  }
`;
