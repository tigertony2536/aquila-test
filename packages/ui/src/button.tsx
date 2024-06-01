// 'use client';
import { FC } from 'react';
import { ReactNode } from 'react';
import { cn } from '@repo/utils';
interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick
}: ButtonProps) => {
  const baseClass = 'py-2 px-6 rounded-full cursor-pointer z-20 text-nowrap';
  const supplementaryClass = className;
  return (
    <button className={cn(baseClass, supplementaryClass)} onClick={onClick}>
      {children}
    </button>
  );
};
