import { styled } from 'styled-components';

interface BurgerMenuProps {
  $isActive: boolean;
}

export const BurgerLine = styled.span<BurgerMenuProps>`
  display: inline-block;
  position: absolute;
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text};
  top: calc(50% - 1px);

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const BurgerWrapper = styled.span<BurgerMenuProps>`
  display: none;
  position: relative;
  width: 30px;
  height: 22px;
  transition: transform 0.3s;
  transform: ${({ $isActive }) => ($isActive ? 'rotate(90deg)' : 'rotate(0)')};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.text};
    top: 0;
  }
  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.text};
    bottom: 0;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const BurgerMenu = styled.div<BurgerMenuProps>`
  background-color: ${({ theme }) => theme.colors.backgroundBody};
  width: 100%;
  max-width: 250px;
  padding: 10px;
  height: 100vh;
  position: fixed;
  transition: 0.5s ease-in-out;
  top: 64px;
  right: ${({ $isActive }) => ($isActive ? '0' : '-100%')};
  z-index: 5;
`;
