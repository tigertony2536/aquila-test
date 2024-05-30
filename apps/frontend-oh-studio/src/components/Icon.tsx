import React from 'react';
import { IconName } from 'boxicons';

interface IconProps {
  name: IconName;
  size?: string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = '24px', color = '' }) => {
  return (
    <i
      className={`bx ${name} translate-y-[0.1rem]`}
      style={{ fontSize: size, color }}
    />
  );
};

export default Icon;
