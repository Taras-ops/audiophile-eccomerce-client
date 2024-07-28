'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

import { ProductType } from '@/types';
import { addToCart } from '@/redux/cartReducer';
import { useAppDispatch } from '@/hooks/hooks';
import { Button, InputQuantity, useToast } from '@/components';
import { cn } from '@/utils/cn';

interface ProductInfoProps {
  product: ProductType;
  isCategoryItem: Boolean | undefined;
}

const ProductInfo = ({ product, isCategoryItem }: ProductInfoProps) => {
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const [inputQuantityValue, setInputQuantityValue] = useState<number>(0);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  // const isTablet = useMediaQuery({
  //   query: '(min-width: 640px)',
  // });

  const onClickAddToCart = () => {
    console.log('product', product);

    const data = {
      id: product.id,
      name: product.attributes.name,
      quantity: inputQuantityValue,
      price: product.attributes.price,
      image: product.attributes.imageMobile,
    };

    dispatch(addToCart(data));

    toast({
      title: `${product.attributes.name} was added to cart successfully✔`,
    });
  };

  return (
    <div
      className={cn(
        'flex justify-between items-center gap-8 flex-col md:flex-row',
        isCategoryItem ? 'md:even:flex-row-reverse' : ''
      )}>
      <div className='max-w-[540px]'>
        <Image
          src={`${process.env.STRAPI_API_URL}${
            product.attributes?.[
              isDesktopOrLaptop ? 'imageDesktop' : 'imageMobile'
            ]?.data.attributes.url
          }`}
          alt={product.attributes.name}
          width={product.attributes.imageDesktop.data.attributes.width}
          height={product.attributes.imageDesktop.data.attributes.height}
          quality={80}
          className='w-full'
        />
      </div>
      <div className='max-w-md text-center md:text-left'>
        {product.attributes.new ? (
          <p className='tracking-[0.625em] uppercase text-primary mb-4'>
            New product
          </p>
        ) : null}
        <h2 className='text-3xl mb-8 font-bold'>{product.attributes.name}</h2>
        <p className='font-medium text-black/50 mb-10'>
          {product.attributes.description}
        </p>
        {isCategoryItem ? (
          <Button asChild>
            <Link href={`/product/${product.attributes.slug}`}>
              See product
            </Link>
          </Button>
        ) : (
          <>
            <p className='font-bold text-lg mb-12'>
              $ {product.attributes.price.toLocaleString()}
            </p>
            <div className='flex gap-4 items-center'>
              <InputQuantity
                value={inputQuantityValue}
                onChangeValue={(type) =>
                  setInputQuantityValue((prev) =>
                    type === 'minus'
                      ? prev - 1
                      : type === 'plus'
                      ? prev + 1
                      : prev
                  )
                }
              />
              <Button
                disabled={inputQuantityValue === 0}
                onClick={onClickAddToCart}>
                Add to cart
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
