import React from 'react';
import { InnerLoader, OuterLoader } from './styled';

const Loader = () => {
  return (
    <OuterLoader>
      <InnerLoader />
    </OuterLoader>
  );
};

export default Loader;
