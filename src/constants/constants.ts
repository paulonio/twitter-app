import {
  Bookmarks,
  Explore,
  Home,
  Lists,
  Messages,
  More,
  Notifications,
  Profile,
} from '@components/Nav/styled';

export const TWITTER = 'twitter';
export const TWEETS = 'tweets';
export const USERS = 'users';

export const MONTH_MAP = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const SELECT_DATE_DATA = [
  'Date',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
];

export const SELECT_MONTH_DATA = ['Month', ...MONTH_MAP];

export const SELECT_YEAR_DATA = [
  'Year',
  '1990',
  '1991',
  '1992',
  '1993',
  '1994',
  '1995',
  '1996',
  '1997',
  '1998',
  '1999',
  '2000',
  '2001',
  '2002',
  '2003',
  '2004',
  '2005',
  '2006',
  '2007',
  '2008',
  '2009',
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
  '2015',
];

export const NAVIGATION = [
  { to: '/feed', text: 'Home', Component: Home },
  { to: '/feed', text: 'Explore', Component: Explore },
  { to: '/feed', text: 'Notifications', Component: Notifications },
  { to: '/feed', text: 'Messages', Component: Messages },
  { to: '/feed', text: 'Bookmarks', Component: Bookmarks },
  { to: '/feed', text: 'Lists', Component: Lists },
  { to: '/profile', text: 'Profile', Component: Profile },
  { to: '/feed', text: 'More', Component: More },
];

export const POSTS_DATA = [
  { id: '1', src: '/assets/images/post-1.jpg' },
  { id: '2', src: '/assets/images/post-2.jpg' },
  { id: '3', src: '/assets/images/post-3.jpg' },
  { id: '4', src: '/assets/images/post-4.jpg' },
  { id: '5', src: '/assets/images/post-5.jpg' },
  { id: '6', src: '/assets/images/post-6.jpg' },
];
