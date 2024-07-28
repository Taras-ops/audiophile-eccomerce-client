import { cn } from '@/utils/cn';
import { Button } from '@/components';

interface InputQantityInterface {
  value: number;
  onChangeValue: (type: 'minus' | 'plus') => any;
  size?: 'default' | 'small';
}

const InputQuantity = ({
  value,
  onChangeValue,
  size = 'default',
}: InputQantityInterface) => {
  const onClickMinus = () => {
    onChangeValue('minus');
  };

  const onClickPlus = () => {
    onChangeValue('plus');
  };

  return (
    <div className='flex bg-gray'>
      <Button
        variant='ghost'
        onClick={onClickMinus}
        disabled={value === 0}
        className={cn(
          'text-black/25 w-4 hover:bg-transparent',
          size === 'small' ? 'py-2 px-6' : ''
        )}>
        -
      </Button>
      <input
        min={0}
        type='integer'
        value={value}
        onChange={(e) => {}}
        disabled
        className={cn(
          'bg-transparent max-w-8 font-bold text-sm focus:outline-none',
          size === 'small' ? 'max-w-4' : ''
        )}
      />
      <Button
        variant='ghost'
        onClick={onClickPlus}
        className={cn(
          'text-black/25 w-4 hover:bg-transparent',
          size === 'small' ? 'py-2 px-6' : ''
        )}>
        +
      </Button>
    </div>
  );
};

export default InputQuantity;
