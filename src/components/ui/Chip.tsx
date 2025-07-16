import React from 'react';

interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md';
  color?: string;
}

const sizeClasses = {
  xs: 'text-[12px] px-3 py-1',
  sm: 'text-sm px-4 py-1.5',
  md: 'text-base px-5 py-2',
};

const Chip: React.FC<ChipProps> = ({ children, className = '', size = 'xs', color, ...props }) => (
  <span
    className={`inline-flex items-center bg-[#f5f5f5] text-[#292929] rounded-full font-medium border border-[rgba(20,20,20,0.1)] shadow-[0_4px_8px_0_rgba(34,42,53,0.05)] leading-[1em] ${sizeClasses[size]} ${className}`}
    style={color ? { backgroundColor: color } : {}}
    {...props}
  >
    {children}
  </span>
);

export default Chip; 