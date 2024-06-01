'use client';

import { ReactNode } from 'react';
import { cn } from '../../../../packages/utils/src';
import { useEffect, useRef, useMemo } from 'react';

interface fadeUoBoxProps {
  children: ReactNode;
  className?: string;
}

const observerOptions = {
  root: null,
  threshold: 0,
  rootMargin: '-50px'
};

export const FadeUpBox = ({ children, className }: fadeUoBoxProps) => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const observer = useMemo(() => {
    return new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('transform-none', 'opacity-100');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  }, []);

  useEffect(() => {
    if (boxRef.current) observer.observe(boxRef.current);
  }, [observer]);

  return (
    <div
      ref={boxRef}
      className={cn(
        'translate-y-[50px] opacity-0 transition-all duration-1000 ease-linear',
        className
      )}
    >
      {children}
    </div>
  );
};
