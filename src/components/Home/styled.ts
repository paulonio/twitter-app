import styled from 'styled-components';

export const HomeWrapper = styled.section`
  width: 57.5%;
  max-width: 910px;
  border-left: solid 1px ${({ theme }) => theme.colors.border};
  border-right: solid 1px ${({ theme }) => theme.colors.border};
`;

export const HeaderSpace = styled.div`
  width: 100%;
  height: 58px;
`;
