import { styled } from 'styled-components';

interface PostImageProps {
  id: string;
}

export const Wrapper = styled.div`
  width: 373px;
  margin-top: 31px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 10px;
  overflow: hidden;
`;

export const Post = styled.div`
  width: 33%;
  height: 88px;
`;

export const PostImage = styled.img.attrs<PostImageProps>(({ id }) => ({
  src: `/assets/images/post-${id}.jpg`,
  alt: 'Post image',
}))`
  width: 100%;
  height: 100%;
  background-color: black;
`;
