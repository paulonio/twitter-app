import React from 'react';

import { POSTS_DATA } from '@src/constants/constants';

import { Post, PostImage, PostsWrapper } from './styled';

const SidebarPosts = () => {
  return (
    <PostsWrapper>
      {POSTS_DATA.map(({ id, src }) => (
        <Post key={id}>
          <PostImage src={src} alt="Post" />
        </Post>
      ))}
    </PostsWrapper>
  );
};

export default SidebarPosts;
