import React from 'react';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'outline';
  size?: 'md' | 'sm' | 'xs';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const sizeClasses = {
  md: 'px-6 py-3 text-[16px]',
  sm: 'px-4 py-2 text-[14px]',
  xs: 'px-3 py-1.5 text-[12px]',
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
  const base = `inline-flex items-center font-medium rounded-[12px] transition-colors focus:outline-none ${sizeClasses[size]}`;
  const variants = {
    primary: 'bg-[#242424] !text-white hover:bg-[#1a1a1a] border-none text-[16px] px-4 py-1.5 rounded-[12px] font-medium transition-colors',
    outline: 'bg-white text-grey-70 font-medium text-[16px] px-4 py-2 rounded-[12px] transition-colors hover:bg-grey-20 hover:text-[#242424]',
    minimal: 'bg-transparent text-primary text-[14px] px-4 py-1.5 rounded-[12px] shadow-[inset_0_2px_0_rgba(255,255,255,0.15)] transition-all font-medium hover:brightness-110',
  };
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className} flex items-center justify-center`} {...props}>
      {leftIcon && <span className="mr-2 flex items-center" style={{ width: 16, height: 16 }}>{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2 flex items-center" style={{ width: 16, height: 16 }}>{rightIcon}</span>}
    </a>
  );
};

export default Button; 