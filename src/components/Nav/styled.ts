import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Navigation = styled.nav`
  width: 100%;
  max-width: 230px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const NavigationLink = styled(NavLink)`
  margin-top: 30px;
  display: flex;
  align-items: center;
  text-decoration: none;
  list-style: none;
  color: #000000;
  gap: 20px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  &:first-child {
    margin-top: 0;
  }
  &:hover {
    font-weight: 700;
    cursor: pointer;
  }
  &.active {
    font-weight: 700;
  }
`;
