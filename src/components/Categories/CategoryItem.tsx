import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import IconArrowRight from '@/assets/images/icon-arrow-right.svg';

interface CategoryItemInterface {
  data: {
    name: string;
    imageDesktop: {
      data: {
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
  };
}

const CategoryItem = ({ data }: CategoryItemInterface) => {
  return (
    <div className='flex-1 w-full'>
      <Link href={`/category/${data.name}`} className='w-full'>
        <div className='group bg-gray flex-1 w-full text-center pt-28 pb-7 rounded-lg relative shadow shadow-black/20 transition-shadow hover:shadow-black/5'>
          <div className='absolute -top-8 w-1/3 mx-auto left-1/2 -translate-x-1/2 sm:w-2/3 lg:-top-20'>
            <Image
              alt={`${data.name} image`}
              src={`${process.env.STRAPI_API_URL}${data.imageDesktop.data.attributes.url}`}
              width={data.imageDesktop.data.attributes.height}
              height={data.imageDesktop.data.attributes.width}
            />
          </div>
          <div className=''>
            <p className='uppercase font-bold text-lg mb-4'>{data.name}</p>

            <span className='flex items-center justify-center gap-4'>
              <p className='uppercase font-bold text-black/50 text-sm transition-colors group-hover:text-primary'>
                Shop
              </p>
              <Image alt='arrow right' src={IconArrowRight} />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
