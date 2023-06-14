import styled from 'styled-components';

export const FallbackWrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 910px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
`;
