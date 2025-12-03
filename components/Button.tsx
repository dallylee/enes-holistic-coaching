import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage-500 transition-all duration-300";
  
  const variants = {
    primary: "border-transparent text-white bg-sage-700 hover:bg-sage-800 shadow-lg hover:shadow-xl",
    secondary: "border-transparent text-sage-900 bg-sage-200 hover:bg-sage-300",
    outline: "border-sage-700 text-sage-700 bg-transparent hover:bg-sage-50"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};