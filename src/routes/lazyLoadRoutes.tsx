import React, { Suspense, lazy } from 'react';
import Loader from '../components/Loader/Loader';

const lazyLoadRoutes = (element: string) => {
  const LazyElement = lazy(() => import(`../pages/${element}Page.tsx`));

  return (
    <Suspense fallback={<Loader />}>
      <LazyElement />
    </Suspense>
  );
};

export { lazyLoadRoutes };
