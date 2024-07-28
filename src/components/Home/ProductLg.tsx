'use client';
import React from 'react';
import Link from 'next/link';
import { ProductType, ImageType } from '@/types';
import { MaxWidth, Button } from '@/components';

interface ProductLgProps {
  data: {
    product: {
      data: ProductType;
    };
    ImagePreview: ImageType;
  };
}

const ProductLg = ({ data }: ProductLgProps) => {
  const imageUrl =
    process.env.STRAPI_API_URL + data.ImagePreview.data.attributes?.url;

  return (
    <section className='my-6'>
      <MaxWidth>
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className='py-24 pl-16 rounded-lg bg-bottom bg-cover bg-no-repeat shadow md:pl-24'>
          <h3 className='mb-8 font-bold uppercase text-3xl'>
            {data.product.data.attributes.name}
          </h3>
          <Link href={`/product/${data.product.data.attributes.slug}`}>
            <Button variant='outline'>See Product</Button>
          </Link>
        </div>
      </MaxWidth>
    </section>
  );
};

export default ProductLg;
