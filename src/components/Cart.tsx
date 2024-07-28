'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { resetCart } from '@/redux/cartReducer';
import { Button, ProductItemSm, DialogClose } from '@/components';

import EmptyCart from '@/assets/images/empty-cart.png';

const Cart = () => {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector((state) => state.cart.products);

  const totalCartProducts = cartProducts.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const totalCartProductsPrice = cartProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const onRemoveCartProducts = () => {
    dispatch(resetCart());
  };

  if (cartProducts.length === 0) {
    return (
      <div className='flex flex-col items-center mx-auto max-w-48 text-center'>
        <Image src={EmptyCart} alt='empty cart' width={120} className='mb-4' />
        <p className='font-bold text-lg mb-2'>Your cart is empty</p>
        <p className='text-sm text-black/50'>
          Looks like you haven&apos;t made any choice yet...
        </p>
      </div>
    );
  }

  return (
    <>
      <div className='flex items-center justify-between'>
        <p className='font-bold text-lg uppercase tracking-wider'>
          Cart ({totalCartProducts})
        </p>
        <Button
          className='font-medium capitalize text-black/50'
          variant={'link'}
          onClick={onRemoveCartProducts}>
          Remove all
        </Button>
      </div>
      <div className='flex flex-col gap-6 mb-8'>
        {cartProducts.map((item) => (
          <ProductItemSm key={item.id} product={item} isCartItem />
        ))}
      </div>
      <div className='flex items-center justify-between'>
        <p className='font-medium text-black/50 uppercase'>Total</p>
        <p className='font-bold text-lg'>
          ${totalCartProductsPrice.toLocaleString()}
        </p>
      </div>

      <DialogClose asChild>
        <Button asChild className='w-full'>
          <Link href='/checkout'>Checkout</Link>
        </Button>
      </DialogClose>
    </>
  );
};

export default Cart;
