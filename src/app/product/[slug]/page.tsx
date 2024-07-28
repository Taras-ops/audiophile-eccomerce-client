'use client';
import React from 'react';
import Image from 'next/image';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  ProductInfo,
  MaxWidth,
  Loader,
  Categories,
  GoBackBtn,
} from '@/components';
import { useQuery } from '@tanstack/react-query';
import { getProduct } from '@/utils/actions';
import { ProductType } from '@/types';
import { cn } from '@/utils/cn';

interface CategoryPageProps {
  params: { slug: string };
}

const Product = ({ params }: CategoryPageProps) => {
  const { data, error, isPending } = useQuery<ProductType>({
    queryKey: [`${params.slug}Product`],
    queryFn: () => getProduct(params.slug),
  });

  if (isPending) return <Loader />;

  if (error) return 'Error...';

  return (
    <>
      <section className='pt-20 pb-40'>
        <MaxWidth>
          <>
            <GoBackBtn />
            <ProductInfo product={data} isCategoryItem={false} />
          </>
        </MaxWidth>
      </section>
      <section className='mb-[88px]'>
        <MaxWidth>
          <div className='grid gap-y-28 gap-x-32 md:gap-y-[120px] lg:grid-cols-[1.8fr_1fr]'>
            <div className=''>
              <h3>FEATURES</h3>
              <p className='font-medium text-black/50 text-sm leading-6'>
                <Markdown remarkPlugins={[remarkGfm]}>
                  {data.attributes.features}
                </Markdown>
              </p>
            </div>
            <div className='grid md:grid-cols-2 lg:block'>
              <h3>In the box</h3>
              <div className='grid grid-cols-[20px_1fr] gap-x-6 gap-y-2 items-center'>
                {data.attributes?.units?.data?.map((unit) => (
                  <>
                    <span className='col-span-1 text-primary font-bold'>
                      {unit.attributes.quantity}x
                    </span>
                    <p className='col-start-2 col-span-2 font-medium text-sm text-black/50'>
                      {unit.attributes.name}
                    </p>
                  </>
                ))}
              </div>
            </div>
          </div>
        </MaxWidth>
      </section>
      <section className='mb-32'>
        <MaxWidth>
          <div className='grid grid-cols-[1fr_1.43fr] grid-rows-[174px_174px] justify-items-stretch items-stretch gap-8 lg:grid-rows-[280px_280px]'>
            {data.attributes.gallery?.data?.map((image, index) => (
              <div
                key={index}
                className={cn(
                  'overflow-hidden rounded-md',
                  index === 2
                    ? 'col-start-2 row-span-2 row-start-1 shadow-md'
                    : ''
                )}>
                <Image
                  alt='gallery'
                  src={`${process.env.STRAPI_API_URL}${image.attributes.url}`}
                  width={image.attributes.width}
                  height={image.attributes.height}
                  className='min-w-full min-h-full rounded-md transition-transform ease-in hover:scale-110'
                />
              </div>
            ))}
          </div>
        </MaxWidth>
      </section>
      {/* <section>
        <MaxWidth>
          <div className=''>
            <h3>You may also like</h3>
            <div className=''></div>
          </div>
        </MaxWidth>
      </section> */}
      <Categories />
    </>
  );
};

export default Product;
