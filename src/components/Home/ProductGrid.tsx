import React from 'react';
import { ImageType, ProductType } from '@/types';
import { MaxWidth, Button } from '@/components';
import Link from 'next/link';

interface ProductGridProps {
  data: {
    product: { data: ProductType };
    ImagePreview: ImageType;
  };
}

const getShortProductName = (name: string): string => {
  let arr = name?.split(' ');
  return arr[0] + ' ' + arr[arr.length - 1];
};

const ProductGrid = ({ data }: ProductGridProps) => {
  const imageUrl =
    process.env.STRAPI_API_URL + data.ImagePreview.data.attributes.url;

  return (
    <section className='my-6'>
      <MaxWidth>
        <div className='flex justify-between flex-col gap-6 md:flex-row lg:gap-8 md:gap-3'>
          <div
            style={{ backgroundImage: `url(${imageUrl})` }}
            className='flex-1 rounded-lg bg-cover bg-center bg-no-repeat min-h-52 shadow'></div>
          <div className='flex-1 bg-gray rounded-lg py-10 flex flex-col justify-center pl-[10%] sm:py-24 shadow'>
            <h3 className='mb-8 font-bold uppercase text-3xl'>
              {getShortProductName(data.product.data.attributes.name)}
            </h3>
            <Link href={`/product/${data.product.data.attributes.slug}`}>
              <Button variant={'outline'}>See Product</Button>
            </Link>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default ProductGrid;
