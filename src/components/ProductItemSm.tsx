'use client';
import React from 'react';
import Image from 'next/image';
import { useAppDispatch } from '@/hooks/hooks';
import { CartItemType } from '@/types';
import { editQuantityCartProduct } from '@/redux/cartReducer';
import { InputQuantity } from '@/components';

interface ProductItemSm {
  product: CartItemType;
  isCartItem?: Boolean;
}

const ProductItemSm = ({ product, isCartItem }: ProductItemSm) => {
  const dispatch = useAppDispatch();

  const onChangeQuantity = (val: number) => {
    dispatch(
      editQuantityCartProduct({
        id: product.id,
        quantity: val,
      })
    );
  };

  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center'>
        <div className='mr-4'>
          <Image
            src={`${process.env.STRAPI_API_URL}${product.image.data.attributes.url}`}
            alt={`${product.name} image`}
            width={64}
            height={64}
            className='rounded-lg shadow-md'
          />
        </div>
        <div>
          <p className='font-bold'>{product.name}</p>
          <p className='text-sm text-black/50'>${product.price}</p>
        </div>
      </div>
      {isCartItem ? (
        <InputQuantity
          value={product.quantity}
          onChangeValue={(type) => {
            onChangeQuantity(
              type === 'minus'
                ? product.quantity - 1
                : type === 'plus'
                ? product.quantity + 1
                : product.quantity
            );
          }}
          size='small'
        />
      ) : (
        <span>{product.quantity}x</span>
      )}
    </div>
  );
};

export default ProductItemSm;
