import { lazyLoadRoutes } from '@routes/lazyLoadRoutes';

export interface Route {
  path: string;
  element: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', element: lazyLoadRoutes('Welcome') },
  { path: '/profile', element: lazyLoadRoutes('Profile') },
  { path: '/signin', element: lazyLoadRoutes('SignIn') },
  { path: '/signup', element: lazyLoadRoutes('SignUp') },
  { path: '/feed', element: lazyLoadRoutes('Home') },
  { path: '/feed/:id', element: lazyLoadRoutes('Tweet') },
];
