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

export const AvatarRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AvatarWrapper = styled.div`
  height: 150px;
  width: 150px;
`;

export const BorderedButton = styled.button`
  transform: translateY(50%);
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  background-color: #ffffff;
  border: solid 1px rgba(0, 0, 0, 0.4);
  border-radius: 50px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  transition: background-color 0.3s;
  &:hover {
    background-color: bisque;
    cursor: pointer;
  }
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

export const FollowersWrapper = styled.div`
  margin-top: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Followers = styled.div`
  margin-left: 30px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  &:first-child {
    margin-left: 0;
  }
`;

export const Amount = styled.span`
  color: #000000;
  font-weight: 700;
`;
