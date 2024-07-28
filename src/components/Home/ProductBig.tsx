import React from 'react';
import Image from 'next/image';
import { ImageType, ProductType } from '@/types';
import { MaxWidth, Button } from '@/components';
import Link from 'next/link';

import CirclesIcon from '@/assets/images/pattern-circles.svg';

interface ProductBigProps {
  data: {
    ImagePreview: ImageType;
    product: {
      data: ProductType;
    };
  };
}

const ProductBig = ({ data }: ProductBigProps) => {
  return (
    <section>
      <MaxWidth>
        <div className='bg-primary flex rounded-lg overflow-hidden relative gap-8 md:gap-16 pt-12 max-lg:pb-16 lg:pt-24 lg:gap-28 items-center max-lg:text-center lg:px-24 lg:justify-between max-lg:flex-col'>
          <div className='absolute -top-28 min-w-[558px] md:min-w-[944px] left-1/2 max-lg:-translate-x-1/2 lg:-top-4 lg:-left-44 md:-top-60'>
            <Image src={CirclesIcon} alt='circles' className='w-full h-auto' />
          </div>
          <div className='max-w-[172px] md:max-w-[27.5%] lg:max-w-[380px] relative lg:top-7'>
            <Image
              src={`${process.env.STRAPI_API_URL}${data.ImagePreview.data.attributes.url}`}
              alt={data.product.data.attributes.name}
              width={data.ImagePreview.data.attributes.width}
              height={data.ImagePreview.data.attributes.height}
              className='w-full h-auto'
            />
          </div>
          <div className='lg:pt-14 z-10 lg:pr-7 max-lg:max-w-[350px]'>
            <h2 className='text-white text-6xl mb-6 break-words max-sm:text-4xl'>
              {data.product.data.attributes.name}
            </h2>
            <p className='opacity-75 text-white mb-6 md:mb-10'>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button variant={'secondary'} asChild>
              <Link href={`/product/${data.product.data.attributes.slug}`}>
                See product
              </Link>
            </Button>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default ProductBig;
