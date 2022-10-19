import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean
}

export function Text({ size = 'md', children, asChild }: TextProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp className={
      clsx('text-gray-900 font-sans', {
        'text-xs': size === 'xs',
        'md:text-sm': size === 'sm',
        'text-md': size === 'md',
        'lg:text-lg': size === 'lg'
      })}
  >
    {children}
  </Comp>
  );
};
