import { styled } from 'styled-components';

export const UserWrapper = styled.div`
  width: 100%;
  max-width: 910px;
  padding: 0 25px 48px 25px;
  transform: translateY(-15%);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  @media screen and (max-width: 470px) {
    padding: 0 8px 24px 8px;
  }
`;

export const Username = styled.h2`
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (max-width: 470px) {
    font-size: 16px;
    line-height: 21px;
  }
`;

export const Nickname = styled.div`
  font-size: 16px;
  line-height: 21px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
`;

export const UserBio = styled.p`
  margin-top: 15px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
`;
