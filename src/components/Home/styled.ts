import styled from 'styled-components';

export const HomeWrapper = styled.section`
  width: 57.5%;
  max-width: 910px;
  min-height: 100vh;
  border-left: solid 1px ${({ theme }) => theme.colors.border};
  border-right: solid 1px ${({ theme }) => theme.colors.border};

  @media screen and (max-width: 1480px) {
    width: 70%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const HeaderSpace = styled.div`
  width: 100%;
  height: 58px;
`;
