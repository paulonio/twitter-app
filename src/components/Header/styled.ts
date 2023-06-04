import { styled } from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 2px);
  max-width: 910px;
  padding: 22px 16px 15px;
  background-color: ${({ theme }) => theme.colors.backgroundBody};
`;

export const HeaderTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
