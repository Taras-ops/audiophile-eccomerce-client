import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { MaxWidth } from '@/components';
import LogoImage from '@/assets/images/logo.svg';
import FacebookImage from '@/assets/images/icon-facebook.svg';
import TwitterImage from '@/assets/images/icon-twitter.svg';
import InstagramImage from '@/assets/images/icon-instagram.svg';

const Footer = () => {
  return (
    <footer className='bg-grayBlack text-white pt-12 pb-9 relative  md:pt-14 md:pb-11 lg:pt-20 lg:pb-12'>
      <MaxWidth>
        <div className='relative before:absolute before:-top-12 max-md:before:left-[50%] max-md:before:-translate-x-1/2 before:w-[101px] before:h-1 before:bg-primary md:before:block md:before:-top-14 lg:before:-top-20'>
          <div className='flex flex-col justify-center items-center text-center mb-12 md:text-left md:mb-8 lg:flex-row lg:justify-between lg:mb-9'>
            <div className='mb-12 md:mb-8'>
              <Image
                src={LogoImage}
                alt='logo image'
                className='max-md:mx-auto'
              />
            </div>
            <ul className='flex flex-col gap-4 uppercase font-bold tracking-widest text-sm items-center md:flex-row md:gap-8'>
              <li className='hover:text-primary transition-colors'>
                <Link href='/'>Home</Link>
              </li>
              <li className='hover:text-primary transition-colors'>
                <Link href='/'>Headphones</Link>
              </li>
              <li className='hover:text-primary transition-colors'>
                <Link href='/'>Speakers</Link>
              </li>
              <li className='hover:text-primary transition-colors'>
                <Link href='/'>Earphones</Link>
              </li>
            </ul>
          </div>

          <div className='flex flex-col'>
            <div className='mb-12 max-md:text-center md:mb-20'>
              <p className='opacity-50 lg:max-w-[540px]'>
                Audiophile is an all in one stop to fulfill your audio needs.
                We&apos;re a small team of music lovers and sound specialists
                who are devoted to helping you get the most out of personal
                audio. Come and visit our demo facility - we’re open 7 days a
                week.
              </p>
            </div>
            <div className='flex flex-col gap-12 text-center items-center md:flex-row md:justify-between'>
              <p className='opacity-50 font-bold'>
                Copyright 2021. All Rights Reserved
              </p>
              <ul className='flex justify-center items-center gap-4 relative lg:-top-[56px]'>
                <li className='transition hover:scale-110'>
                  <Link href='/'>
                    <Image src={FacebookImage} alt='facebook icon' />
                  </Link>
                </li>
                <li className='transition hover:scale-110'>
                  <Link href='/'>
                    <Image src={TwitterImage} alt='twitter icon' />
                  </Link>
                </li>
                <li className='transition hover:scale-110'>
                  <Link href='/'>
                    <Image src={InstagramImage} alt='instagram icon' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MaxWidth>
    </footer>
  );
};

export default Footer;
