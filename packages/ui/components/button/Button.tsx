import React from 'react';

interface ButtonProps {
  /**
   * Первичный?
   */
  type?: "default" | "empty" | "disabled";
  /**
   * Какого размера кнопка
   */
  size?: 'medium' | 'large';
  /**
   * Надпись кнопки
   */
  label: string;
  /**
   * Обработчик нажатия
   */
  onClick?: () => void;
  
  disabled?: boolean
}

const getSizeClasses = (size:any) => {
  switch(size){
    // case 'small': {
    //   return 'py-5 px-6'
    // }
    case 'large': {
      return 'py-5 px-6 rounded-2xl font-semibold'
    }
    default: {
      return 'py-3 px-4 rounded-xl font-normal '
    }
  }
}

const getTypeClasses = (type:any) => {
  switch(type){
    case 'disabled': {
      return 'text-text-secondary hover:light-blue bg-bg-primary'
    }
    case 'empty': {
      return 'text-primary hover:light-blue'
    }
    default: {
      return 'bg-primary hover:primary-hover'
    }
  }
}
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = "default",
  size = 'medium',
  // backgroundColor,
  disabled = false,
  label,
  ...props
}: ButtonProps) => {
  const sizeClass = getSizeClasses(size)
  const mode = getTypeClasses(type);
  return (
    <button
      type="button"
      className={['text-custom-white text-lg w-full', sizeClass, mode].join(' ')}
      // style={{ backgroundColor }}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};
