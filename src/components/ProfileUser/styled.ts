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
`;

export const Username = styled.h2`
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
`;

export const Nickname = styled.div`
  font-size: 16px;
  line-height: 21px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
`;

export const UserBio = styled.div`
  margin-top: 15px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
`;
