import { ReactNode } from 'react';
import { cn } from '../../utils/src';

interface BarProps {
  children: ReactNode;
  containerClass?: string;
}

const Bar = ({ containerClass, children }: BarProps) => {
  return (
    <div className={cn(`flex gap-2  rounded-full p-1`, containerClass)}>
      {children}
    </div>
  );
};

export default Bar;
