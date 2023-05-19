import { styled } from 'styled-components';

interface ImageProps {
  text: string;
}

interface SidebarLinkProps {
  bold?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SidebarLink = styled.div<SidebarLinkProps>`
  font-size: 18px;
  line-height: 24px;
  font-weight: ${({ bold }) => (bold ? 700 : 500)};
  transition: font-weight 0.3s;
  &:hover {
    font-weight: 700;
    cursor: pointer;
  }
`;

export const Icon = styled.img.attrs<ImageProps>(({ text }) => ({
  src: `/assets/icons/${text}.svg`,
  alt: text,
}))`
  width: 28px;
  height: 28px;
  margin-right: 20px;
`;
