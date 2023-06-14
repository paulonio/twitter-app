import { styled } from 'styled-components';

export const WelcomeWrapper = styled.section`
  width: 100%;
  height: calc(100vh - 56px);
  display: flex;

  @media screen and (max-width: 1180px) {
    justify-content: center;
  }
`;

export const FooterLinks = styled.section`
  width: 100%;
  height: 56px;
`;

export const WelcomeImage = styled.img`
  width: 58%;
  max-width: 1121px;
  height: auto;

  @media screen and (max-width: 1180px) {
    display: none;
  }
`;

export const WelcomeContent = styled.div`
  width: 42%;
  max-width: 807px;
  height: 100%;
  padding: 10px 50px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  @media screen and (max-width: 1180px) {
    width: 70%;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 10px 20px;
    align-items: center;
  }
`;

export const WelcomeTitle = styled.h1`
  font-size: 84px;
  line-height: 98px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (max-width: 1180px) {
    font-size: 54px;
    line-height: 64px;
  }

  @media screen and (max-width: 470px) {
    font-size: 25px;
    line-height: 29px;
  }
`;

export const WelcomeSubtitle = styled.h2`
  margin-top: 46px;
  margin-bottom: 31px;
  font-size: 42px;
  line-height: 49px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (max-width: 1180px) {
    font-size: 35px;
    line-height: 42px;
  }

  @media screen and (max-width: 470px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const WelcomeText = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 21px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
`;

export const ButtonsWrapper = styled.div`
  max-width: 403px;
  display: flex;
  flex-direction: column;
  row-gap: 21px;
`;
