import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      <input
        className={`w-full px-4 py-3 rounded bg-white/10 border ${
          error ? 'border-red-500' : 'border-white/20'
        } text-white placeholder:text-white/60 focus:outline-none focus:border-[#00D9FF] transition-colors ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
