import React from 'react';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'outline';
  size?: 'md' | 'sm';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const sizeClasses = {
  md: 'px-6 py-3 text-[16px]',
  sm: 'px-4 py-2 text-[14px]',
};

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  className = '',
  ...props
}) => {
  const base = `inline-flex items-center font-semibold rounded-full transition-colors focus:outline-none ${sizeClasses[size]}`;
  const variants = {
    primary: 'bg-[#3b338b] text-white hover:bg-[#504fa1] border-none',
    outline: 'bg-white text-grey-80 font-semibold text-[14px] px-4 py-2 rounded-full border border-grey-30 hover:bg-grey-20 hover:border-grey-40',
  };
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {leftIcon && <span className="mr-2 flex items-center" style={{ width: 16, height: 16 }}>{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2 flex items-center" style={{ width: 16, height: 16 }}>{rightIcon}</span>}
    </a>
  );
};

export default Button; 