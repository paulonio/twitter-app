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
  margin-top: 57px;
  font-size: 84px;
  line-height: 98px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const WelcomeSubtitle = styled.h2`
  margin-top: 46px;
  margin-bottom: 31px;
  font-size: 42px;
  line-height: 49px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
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
