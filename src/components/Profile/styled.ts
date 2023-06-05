import { styled } from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  max-width: 1580px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1480px) {
    justify-content: center;
    gap: 24px;
  }
`;

export const ProfileWrapper = styled.section`
  width: 57.5%;
  max-width: 910px;
  border-left: solid 1px ${({ theme }) => theme.colors.border};
  border-right: solid 1px ${({ theme }) => theme.colors.border};

  @media screen and (max-width: 1480px) {
    width: 70%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow: hidden;
  }
`;

export const HeaderTitle = styled.div`
  font-size: 20px;
  line-height: 27px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const HeaderSubtitle = styled.div`
  font-size: 16px;
  line-height: 21px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
`;

export const ProfileImage = styled.img.attrs({
  src: '/assets/images/Profile-image.jpg',
  alt: 'Profile image',
})`
  width: 100%;
  height: auto;
  margin-top: 85px;
`;

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

export const AvatarRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AvatarWrapper = styled.div`
  height: 150px;
  width: 150px;

  @media screen and (max-width: 768px) {
    width: 75px;
    height: 75px;
  }
`;

export const ButtonWrapper = styled.div`
  transform: translateY(50%);
`;

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
