'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components';

const GoBackBtn = () => {
  const router = useRouter();
  const onClickGoBack = () => {
    router.back();
  };

  return (
    <Button onClick={onClickGoBack} className='mb-14' variant='ghost'>
      Go back
    </Button>
  );
};

export default GoBackBtn;
