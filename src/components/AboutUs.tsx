'use client';
import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { MaxWidth } from '@/components';

import ImageBestGearDesktop from '@/assets/images/image-best-gear-desktop.jpg';
import ImageBestGearTablet from '@/assets/images/image-best-gear-tablet.jpg';
import ImageBestGearMobile from '@/assets/images/image-best-gear-mobile.jpg';

const AboutUs = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  const isTablet = useMediaQuery({
    query: '(min-width: 640px)',
  });

  return (
    <section className='py-28 sm:py-24 lg:pb-48 lg:pt-44'>
      <MaxWidth>
        <div className='flex flex-col-reverse items-center justify-between gap-x-6 gap-y-16 lg:flex-row'>
          <div className='flex-initial sm:max-w-[573px] sm:mx-auto lg:max-w-[445px] max-lg:text-center'>
            <h2 className='mb-8'>
              Bringing you the <span className='text-primary'>best</span> audio
              gear
            </h2>
            <p className='font-medium text-black/50 leading-6'>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <div className='flex-intial'>
            <Image
              src={
                isDesktop
                  ? ImageBestGearDesktop
                  : isTablet
                  ? ImageBestGearTablet
                  : ImageBestGearMobile
              }
              alt='image best gear'
              className='w-full rounded-md'
            />
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default AboutUs;
