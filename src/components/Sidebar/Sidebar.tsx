import React, { FC } from 'react';

import SidebarInput from '@src/components/Sidebar/SidebarInput';
import SidebarPosts from '@src/components/Sidebar/SidebarPosts';
import SidebarUsers from '@src/components/Sidebar/SidebarUsers';

import { useSidebarHandlers } from '@src/hooks/useSidebarHandlers';
import { FixedWrapper, Wrapper } from './styled';

interface SidebarProps {
  type: 'profile' | 'feed';
}

const Sidebar: FC<SidebarProps> = ({ type }) => {
  const {
    usersFilterValue,
    tweetsFilterValue,
    filteredUsers,
    filteredTweets,
    handleChangeUsersValue,
    handleChangeTweetsValue,
  } = useSidebarHandlers();

  return (
    <Wrapper>
      <FixedWrapper>
        {type === 'profile' ? (
          <SidebarInput
            value={usersFilterValue}
            onChange={handleChangeUsersValue}
            data={filteredUsers}
          />
        ) : (
          <SidebarInput
            value={tweetsFilterValue}
            onChange={handleChangeTweetsValue}
            data={filteredTweets}
          />
        )}
        <SidebarPosts />
        <SidebarUsers />
      </FixedWrapper>
    </Wrapper>
  );
};

export default Sidebar;
