import React from 'react';

import { Post, PostImage, Wrapper } from './styled';

const SidebarPosts = () => {
  return (
    <Wrapper>
      <Post>
        <PostImage id="1" />
      </Post>
      <Post>
        <PostImage id="2" />
      </Post>
      <Post>
        <PostImage id="3" />
      </Post>
      <Post>
        <PostImage id="4" />
      </Post>
      <Post>
        <PostImage id="5" />
      </Post>
      <Post>
        <PostImage id="6" />
      </Post>
    </Wrapper>
  );
};

export default SidebarPosts;
