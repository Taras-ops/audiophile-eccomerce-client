import React from 'react';
import Image from 'next/image';

import LoaderImage from '@/assets/images/loading.png';

const Loader = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-black'>
      <Image
        src={LoaderImage}
        alt='loading icon'
        width={80}
        height={80}
        className='animate-spin'
      />
    </div>
  );
};

export default Loader;
