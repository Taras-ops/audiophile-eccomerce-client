import React from 'react';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { ProductType } from '@/types';
import { MaxWidth, Button } from '@/components';

interface HeroProps {
  data: {
    id: number;
    description: string;
    product: {
      data: ProductType;
    };
  };
}

const Hero = ({ data }: HeroProps) => {
  return (
    <div
      className='bg-[url("../assets/images/image-hero-mobile.jpg")] sm:bg-[url("../assets/images/image-hero-tablet.jpg")] md:bg-[url("../assets/images/image-hero-desktop.jpg")] 
    bg-no-repeat bg-cover bg-bottom	min-h-screen rounded-b-md pt-56 pb-40 text-foreground text-white relative'>
      <MaxWidth>
        <div className='text-white max-w-[400px] justify-center mx-auto md:justify-start md:mx-0 max-md:text-center'>
          <p className='tracking-[0.625em] opacity-50'>NEW PRODUCT</p>
          <h1 className='text-bold text-4xl uppercase my-7 md:text-6xl'>
            {data.product.data.attributes.name}
          </h1>
          <p className='text-sm mb-10 max-w-80 opacity-75 leading-6 font-medium mx-auto md:mx-0'>
            {data.description}
          </p>
          <Button asChild>
            <Link href={`/product/${data.product.data.attributes.slug}`}>
              See product
            </Link>
          </Button>
          {/* <Button className='absolute left-[calc(50%-24px)] -translate-x-1/2 rounded-full w-7 h-7 shadow-lg p-6 bottom-[10%] animate-bounce'>
            <span>
              <ArrowDown />
            </span>
          </Button> */}
        </div>
      </MaxWidth>
    </div>
  );
};

export default Hero;
