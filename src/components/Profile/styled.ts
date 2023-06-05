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
