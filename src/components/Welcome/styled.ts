import { styled } from 'styled-components';

export const WelcomeWrapper = styled.section`
  width: 100%;
  height: calc(100vh - 56px);
  display: flex;
`;

export const FooterLinks = styled.section`
  width: 100%;
  height: 56px;
`;

export const WelcomeImage = styled.img`
  width: 58%;
  max-width: 1121px;
  height: auto;
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
`;

export const WelcomeTitle = styled.h1`
  font-size: 84px;
  line-height: 98px;
  font-weight: 700;
  margin-top: 57px;
`;

export const WelcomeSubtitle = styled.h2`
  margin-top: 46px;
  font-size: 42px;
  line-height: 49px;
  font-weight: 700;
`;

export const WelcomeText = styled.div`
  margin-top: 21px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
`;
