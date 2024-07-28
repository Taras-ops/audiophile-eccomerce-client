import React from 'react';

const MaxWidth = ({ children }: { children: JSX.Element }) => {
  return <div className='mx-auto container'>{children}</div>;
};

export default MaxWidth;
