import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  className?: string;
  onClick?: () => void;
}

export default function Button({ 
  children, 
  type = 'button', 
  className = '', 
  onClick 
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-pink-500 text-white py-3 px-6 rounded-md hover:bg-pink-600 transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
}