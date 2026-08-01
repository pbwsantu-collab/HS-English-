import React from 'react';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className = '', ...rest }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-royal-DEFAULT text-white hover:opacity-95 focus:outline-none ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
