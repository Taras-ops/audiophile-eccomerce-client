'use client';
import React, { useState } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getCategoryProducts } from '@/utils/actions';
import { PaginationType, ProductType } from '@/types';
import {
  Categories,
  Loader,
  MaxWidth,
  Pagination,
  PaginationContent,
  PaginationItem,
  ProductInfo,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from '@/components';

interface CategoryPageProps {
  params: { slug: string };
}

interface ResponseData {
  data: [ProductType];
  meta: {
    pagination: PaginationType;
  };
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageParam = searchParams.get('page') || 1;

  console.log('pageParam', pageParam);

  const { data, error, isPending } = useQuery<ResponseData>({
    queryKey: ['categoryProducts', params.slug, pageParam],
    queryFn: () => getCategoryProducts(params.slug, +pageParam),
  });

  if (isPending) return <Loader />;
  if (error) return 'Error';

  const { pagination } = data?.meta;

  return (
    <>
      <section className='bg-black pt-48 pb-28 text-center'>
        <MaxWidth>
          <h2 className='text-white'>{params.slug}</h2>
        </MaxWidth>
      </section>
      <section className='py-36'>
        <MaxWidth>
          <div className='flex flex-col gap-32'>
            {data?.data?.map((product, index) => (
              <ProductInfo
                key={index}
                product={product}
                isCategoryItem={true}
              />
            ))}
            {pagination.pageCount > 1 &&
            +pageParam <= pagination.pageCount &&
            +pageParam >= 1 ? (
              <Pagination>
                <PaginationContent>
                  {+pageParam > 1 ? (
                    <PaginationItem>
                      <PaginationPrevious
                        href={{
                          pathname: pathname,
                          query: { page: +pageParam - 1 },
                        }}
                      />
                    </PaginationItem>
                  ) : null}
                  {+pageParam > 1 ? (
                    <PaginationItem>
                      <PaginationLink
                        href={{
                          pathname: pathname,
                          query: { page: +pageParam - 1 },
                        }}>
                        {+pageParam - 1}
                      </PaginationLink>
                    </PaginationItem>
                  ) : null}
                  <PaginationItem>
                    <PaginationLink
                      href={{
                        pathname: pathname,
                        query: { page: +pageParam },
                      }}
                      isActive>
                      {pageParam}
                    </PaginationLink>
                  </PaginationItem>
                  {+pageParam >= pagination.pageCount ? null : (
                    <PaginationItem>
                      <PaginationLink
                        href={{
                          pathname: pathname,
                          query: { page: +pageParam + 1 },
                        }}>
                        {+pageParam + 1}
                      </PaginationLink>
                    </PaginationItem>
                  )}
                  {+pageParam + 1 >= pagination.pageCount ? null : (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                  {+pageParam !== pagination.pageCount ? (
                    <PaginationItem>
                      <PaginationNext
                        href={{
                          pathname: pathname,
                          query: { page: +pageParam + 1 },
                        }}
                      />
                    </PaginationItem>
                  ) : null}
                </PaginationContent>
              </Pagination>
            ) : null}
          </div>
        </MaxWidth>
      </section>
      <Categories />
    </>
  );
};

export default CategoryPage;
