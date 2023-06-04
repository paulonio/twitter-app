import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import BookmarksIcon from '../../icons/BookmarksIcon';
import HomeIcon from '../../icons/HomeIcon';
import ExploreIcon from '../../icons/ExploreIcon';
import ListsIcon from '../../icons/ListsIcon';
import MessagesIcon from '../../icons/MessagesIcon';
import MoreIcon from '../../icons/MoreIcon';
import NotificationsIcon from '../../icons/NotificationsIcon';
import ProfileIcon from '../../icons/ProfileIcon';

export const Navigation = styled.nav`
  width: 100%;
  max-width: 230px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const NavigationLink = styled(NavLink)`
  margin-top: 30px;
  display: flex;
  align-items: center;
  text-decoration: none;
  list-style: none;
  color: ${({ theme }) => theme.colors.text};
  gap: 20px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  &:first-child {
    margin-top: 0;
  }
  &:hover {
    font-weight: 700;
    cursor: pointer;
  }
  &.active {
    font-weight: 700;
  }
`;

export const Home = styled(HomeIcon)`
  fill: ${({ theme }) => theme.colors.text};
`;
export const Explore = styled(ExploreIcon)`
  fill: ${({ theme }) => theme.colors.text};
`;
export const Notifications = styled(NotificationsIcon)`
  fill: ${({ theme }) => theme.colors.text};
`;
export const Messages = styled(MessagesIcon)`
  fill: ${({ theme }) => theme.colors.text};
`;
export const Bookmarks = styled(BookmarksIcon)`
  fill: ${({ theme }) => theme.colors.text};
`;
export const Lists = styled(ListsIcon)`
  fill: ${({ theme }) => theme.colors.text};
`;
export const Profile = styled(ProfileIcon)`
  fill: ${({ theme }) => theme.colors.text};
`;
export const More = styled(MoreIcon)`
  fill: ${({ theme }) => theme.colors.text};
`;
