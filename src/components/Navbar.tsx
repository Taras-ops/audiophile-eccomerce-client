'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useAppSelector } from '@/hooks/hooks';
import LogoIcon from '@/assets/images/logo.svg';
import CartIcon from '@/assets/images/icon-cart.svg';
import { cn } from '@/utils/cn';
import {
  MaxWidth,
  Dialog,
  DialogTrigger,
  DialogContent,
  Button,
  Cart,
  Categories,
} from '@/components';

const Navbar = () => {
  const pathname = usePathname();
  const products = useAppSelector((state) => state.cart.products);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const isAbsolute = pathname === '/' || pathname?.includes('/category/');

  const totalCartProducts = products.reduce(
    (total, curr) => total + curr.quantity,
    0
  );

  return (
    <>
      <header
        className={cn(
          'bg-black text-white z-50 transition-colors',
          isAbsolute ? 'absolute top-0 left-0 w-full bg-transparent' : '',
          isBurgerMenuOpen ? 'bg-black' : 'delay-200'
        )}>
        <MaxWidth>
          <div
            className={cn(
              'flex justify-between relative pt-8 pb-9',
              isAbsolute ? 'border-b-2 border-white/20' : ''
            )}>
            <div className='flex gap-10 items-center'>
              <div
                className='flex flex-col gap-1 md:hidden'
                onClick={() => setIsBurgerMenuOpen((prev) => !prev)}>
                <span className='w-5 h-[3px] bg-white relative'></span>
                <span className='w-5 h-[3px] bg-white relative'></span>
                <span className='w-5 h-[3px] bg-white relative'></span>
              </div>
              <Link href='/'>
                <Image
                  src={LogoIcon}
                  width={143}
                  height={25}
                  alt='audiophile'
                />
              </Link>
            </div>
            <nav className='absolute w-full justify-center md:flex hidden'>
              <ul className='flex items-center justify-center gap-8 font-bold uppercase text-sm tracking-widest'>
                <li className='hover:text-primary transition-colors'>
                  <Link href='/'>Home</Link>
                </li>
                <li className='hover:text-primary transition-colors'>
                  <Link href='/category/headphones'>Headphones</Link>
                </li>
                <li className='hover:text-primary transition-colors'>
                  <Link href='/category/speakers'>Speakers</Link>{' '}
                </li>
                <li className='hover:text-primary transition-colors'>
                  <Link href='/category/earphones'>Earphones</Link>
                </li>
              </ul>
            </nav>
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant={'ghost'}
                    className={cn('p-0 hover:bg-transparent h-auto relative')}>
                    {totalCartProducts > 0 ? (
                      <span className='absolute -top-2 -right-2 text-center rounded-full bg-primary text-white flex items-center justify-center w-4 h-4 text-[10px]'>
                        {totalCartProducts}
                      </span>
                    ) : (
                      ''
                    )}
                    <Image src={CartIcon} width={23} height={20} alt='cart' />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <Cart />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </MaxWidth>
      </header>
      <div
        className={cn(
          'absolute w-full left-0 z-40 bg-white transition-all duration-100',
          isBurgerMenuOpen ? 'top-[90px] opacity-100' : '-top-[1200px]'
        )}>
        <MaxWidth>
          <Categories />
        </MaxWidth>
      </div>
    </>
  );
};

export default Navbar;
