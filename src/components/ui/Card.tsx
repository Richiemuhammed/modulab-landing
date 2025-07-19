import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => (
  <div
    className={`bg-white border border-grey-30 rounded-[12px] p-8 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default Card; 