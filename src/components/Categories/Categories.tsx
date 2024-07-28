'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '@/utils/actions';
import { MaxWidth } from '@/components';
import CategoryItem from './CategoryItem';

interface Category {
  id: number;
  attributes: {
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

const Categories = () => {
  const { data, isError, isPending } = useQuery<[Category]>({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
  });

  if (isPending) {
    return 'Loading...';
  }

  return (
    <section id='categories' className='py-32 lg:pb-44 lg:pt-48 md:py-24'>
      <MaxWidth>
        <div className='w-full flex items-start justify-between gap-8 max-sm:flex-col'>
          {data?.map((category) => (
            <CategoryItem key={category.id} data={category.attributes} />
          ))}
        </div>
      </MaxWidth>
    </section>
  );
};

export default Categories;
