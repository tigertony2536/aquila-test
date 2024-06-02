import { FC } from 'react';
import { ReactNode } from 'react';
import { cn } from '../../utils/src/index.js';

interface BarProps {
  children: ReactNode;
  containerClass?: string;
}

export const Bar: FC<BarProps> = ({ containerClass, children }: BarProps) => {
  return (
    <div className={cn(`flex gap-2  rounded-full p-1`, containerClass)}>
      {children}
    </div>
  );
};
