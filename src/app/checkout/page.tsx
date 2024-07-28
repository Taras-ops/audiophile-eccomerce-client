'use client';
import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useAppSelector } from '@/hooks/hooks';
import {
  Input,
  MaxWidth,
  GoBackBtn,
  RadioGroup,
  RadioGroupItem,
  Summary,
} from '@/components';

type Inputs = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  paymentType: string;
  eMoney: boolean;
  cash: boolean;
  eMoneyNumber: string;
  eMoneyPIN: string;
};

const Checkout = () => {
  const products = useAppSelector((state) => state.cart.products);
  const {
    register,
    getValues,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const paymentType = watch('paymentType');

  console.log('paymentType', paymentType);

  return (
    <section className='bg-gray pt-20 pb-36'>
      <MaxWidth>
        <>
          <GoBackBtn />
          <div className='grid md:grid-cols-[2.08fr_1fr] gap-8 items-start'>
            <form className='bg-white rounded-lg shadow-md px-12 pb-12 pt-14'>
              <h3>Checkout</h3>
              <div className='mt-5'>
                <p className='checkout-group-title'>Billing Details</p>
                <div className='grid md:grid-cols-2 gap-y-4 gap-x-6 mb-14'>
                  <div className=''>
                    <label htmlFor='name'>Name</label>
                    <Input
                      id='name'
                      placeholder='Alexei Ward'
                      {...(register('name'), { required: true })}
                    />
                  </div>
                  <div className=''>
                    <label htmlFor='email'>Email Address</label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='alexei@mail.com'
                      {...(register('email'),
                      {
                        required: true,
                        pattern: {
                          value: '/^[w-.]+@([w-]+.)+[w-]{2,4}$/g',
                          message: 'Wrong format',
                        },
                      })}
                    />
                  </div>
                  <div className=''>
                    <label htmlFor=''>Phone Number</label>
                    <Input
                      id='phone'
                      type='phone'
                      placeholder='+1 202-555-0136'
                      {...(register('phone'), { required: true })}
                    />
                  </div>
                </div>
              </div>
              <div className=''>
                <p className='checkout-group-title'>shipping info</p>
                <div className='grid md:grid-cols-2 gap-y-4 gap-x-6 mb-16'>
                  <div className='col-span-2'>
                    <label htmlFor='address'>Address</label>
                    <Input
                      id='address'
                      placeholder='1137 Williams Avenue'
                      {...(register('address'), { required: true })}
                    />
                  </div>
                  <div className=''>
                    <label htmlFor='zip'>ZIP Code</label>
                    <Input
                      id='zip'
                      placeholder='10001'
                      {...(register('zip'), { required: true })}
                    />
                  </div>
                  <div className=''>
                    <label htmlFor='city'>City</label>
                    <Input
                      id='city'
                      placeholder='New York'
                      {...(register('city'), { required: true })}
                    />
                  </div>
                  <div className=''>
                    <label htmlFor='country'>Country</label>
                    <Input
                      id='country'
                      placeholder='United States'
                      {...(register('country'), { required: true })}
                    />
                  </div>
                </div>
              </div>
              <div className=''>
                <p className='checkout-group-title'>payment details</p>
                <div className='grid md:grid-cols-2 gap-y-4'>
                  <label className=''>Payment Method</label>
                  <RadioGroup
                    defaultValue='e-money'
                    {...register('paymentType')}>
                    <div className='flex items-center gap-4 border-[1px] border-primary rounded-lg py-6 px-4 mb-4'>
                      <RadioGroupItem value='e-money' id='r1' />
                      <label htmlFor='r1' className='mb-0 text-sm'>
                        e-Money
                      </label>
                    </div>
                    <div className='flex items-center gap-4 border-[1px] border-primary rounded-lg py-6 px-4'>
                      <RadioGroupItem value='cash' id='r2' />
                      <label htmlFor='r2' className='mb-0 text-sm'>
                        Cash on Delivery
                      </label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              {paymentType === 'e-money' ? (
                <div className='grid md:grid-cols-2 gap-x-6 mt-6'>
                  <div className=''>
                    <label htmlFor='eMoneyNumber'>e-Money Number</label>
                    <Input
                      id='eMoneyNumber'
                      placeholder='238521993'
                      {...(register('eMoneyNumber'), { required: true })}
                    />
                  </div>
                  <div className=''>
                    <label htmlFor='pin'>e-Money PIN</label>
                    <Input
                      id='pin'
                      placeholder='6891'
                      {...(register('eMoneyPIN'), { required: true })}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <p></p>
                </div>
              )}
            </form>
            <Summary />
          </div>
        </>
      </MaxWidth>
    </section>
  );
};

export default Checkout;
