'use client';
import { useAppSelector } from '@/hooks/hooks';
import { ProductItemSm, Button } from '@/components';

const SHIPPING = 50;
const VAT = 0.4;

const Summary = ({}) => {
  const products = useAppSelector((state) => state.cart.products);

  const totalProductsSum = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className='bg-white rounded-lg shadow-md p-8'>
      <p className='font-bold uppercase text-lg mb-8'>Summary</p>
      <div className='mb-8 flex flex-col gap-6'>
        {products?.map((product) => (
          <ProductItemSm key={product.id} product={product} />
        ))}
      </div>
      <div className='mb-8 flex flex-col gap-2'>
        <div className='flex items-center justify-between'>
          <p className='font-medium text-black/50 text-sm uppercase'>TOTAL</p>
          <p className='font-bold text-lg '>$ {totalProductsSum.toString()}</p>
        </div>
        <div className='flex items-center justify-between'>
          <p className='font-medium text-black/50 text-sm uppercase'>
            SHIPPING
          </p>
          <p className='font-bold text-lg '>$ {SHIPPING}</p>
        </div>
        <div className='flex items-center justify-between'>
          <p className='font-medium text-black/50 text-sm uppercase'>
            VAT (INCLUDED)
          </p>
          <p className='font-bold text-lg '>
            $ {String(Math.ceil(totalProductsSum * VAT))}
          </p>
        </div>
        <div className='flex items-center justify-between mt-4'>
          <p className='font-medium text-black/50 text-sm uppercase'>
            GRAND TOTAL
          </p>
          <p className='font-bold text-lg text-primary'>
            $ {String(totalProductsSum + SHIPPING)}
          </p>
        </div>
      </div>
      <Button className='w-full'>Continue & Pay</Button>
    </div>
  );
};

export default Summary;
