import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'px-8 py-3 rounded font-semibold transition-all duration-200 text-sm md:text-base';
  const variantStyles = variant === 'primary'
    ? 'bg-[#FF8C00] hover:bg-[#FF7A00] text-white'
    : 'bg-transparent border-2 border-white hover:bg-white/10 text-white';

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
