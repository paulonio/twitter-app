import { styled } from 'styled-components';

export const TweetsWrapper = styled.section`
  width: 100%;
  max-width: 910px;
`;

export const TweetsHeader = styled.div`
  width: 100%;
  padding: 19px 90px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (max-width: 470px) {
    padding: 16px 24px;
  }
`;
