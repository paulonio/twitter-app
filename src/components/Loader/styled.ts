import { keyframes, styled } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg)
    scale(0.8);
  }
  50% {
    transform: rotate(360deg)
    scale(1.2);
  }
  100% {
    transform: rotate(720deg)
    scale(0.8);
  }
`;

const firstBall = keyframes`
  0% {
    box-shadow: 30px 0 0 #FFA200;
  }
  50% {
    box-shadow: 0 0 0 #FFA200;
    margin-bottom: 0;
    transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 #FFA200;
    margin-bottom: 10px;
  }
`;

const secondBall = keyframes`
0% {
    box-shadow: 30px 0 0 #134611;
  }
  50% {
    box-shadow: 0 0 0 #134611;
    margin-top: -20px;
    transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 #134611;
    margin-top: 0;
  }
`;

export const OuterLoader = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerLoader = styled.div`
  animation: ${rotate} 1s infinite;
  height: 50px;
  width: 50px;
  &::before,
  &::after {
    border-radius: 50%;
    content: '';
    display: block;
    height: 20px;
    width: 20px;
  }
  &::before {
    animation: ${firstBall} 1s infinite;
    background-color: #540b0e;
    box-shadow: 30px 0 0 #ffa200;
    margin-bottom: 10px;
  }
  &::after {
    animation: ${secondBall} 1s infinite;
    background-color: #0f4c5c;
    box-shadow: 30px 0 0 #134611;
  }
`;
