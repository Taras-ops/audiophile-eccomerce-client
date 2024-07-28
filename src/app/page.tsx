'use client';
import { useQuery } from '@tanstack/react-query';
import {
  Hero,
  Categories,
  ProductBig,
  ProductLg,
  ProductGrid,
  Loader,
  AboutUs,
} from '@/components';
import { getHomePage } from '@/utils/actions';

export default function Home() {
  const { data, isPending, error } = useQuery({
    queryKey: ['homeData'],
    queryFn: () => getHomePage(),
  });

  if (isPending) return <Loader />;

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
      <Hero data={data.attributes?.Hero} />
      <Categories />
      <ProductBig data={data.attributes?.ProductBig} />
      <ProductLg data={data.attributes?.ProductLg} />
      <ProductGrid data={data.attributes?.ProductGrid} />
      <AboutUs />
    </>
  );
}
