import React, { Suspense, lazy } from 'react';

const lazyLoadRoutes = (element: string) => {
  const LazyElement = lazy(() => import(`../pages/${element}Page.tsx`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyElement />
    </Suspense>
  );
};

export { lazyLoadRoutes };
