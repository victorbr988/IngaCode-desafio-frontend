import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { TextProps } from './types';

export function Text({ size = 'md', children, asChild}: TextProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp className={
      clsx('font-sans', {
        'text-xs': size === 'xs',
        'md:text-sm': size === 'sm',
        'text-md': size === 'md',
        'lg:text-lg': size === 'lg',
        'lg:text-sm2': size === 'sm2',
      })}
  >
    {children}
  </Comp>
  );
};
