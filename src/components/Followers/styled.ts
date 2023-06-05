import { styled } from 'styled-components';

export const FollowersWrapper = styled.div`
  margin-top: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FollowersItem = styled.div`
  margin-left: 30px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
  &:first-child {
    margin-left: 0;
  }

  @media screen and (max-width: 470px) {
    font-size: 16px;
    line-height: 21px;
  }
`;

export const Amount = styled.span`
  color: ${({ theme }) => theme.colors.text};
  opacity: 1;
  font-weight: 700;
`;
