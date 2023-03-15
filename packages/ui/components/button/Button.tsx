import React from 'react';

interface ButtonProps {
  /**
   * Первичный?
   */
  primary?: boolean;
  // /**
  //  * Какой цвет задать 
  //  * //TODO сделать массив цветов
  //  */
  // backgroundColor?: string;
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
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  // backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const sizeClass = getSizeClasses(size)
  const mode = primary ? 'bg-primary hover:primary-hover' : 'text-primary hover:light-blue';
  return (
    <button
      type="button"
      className={['text-custom-white text-lg', sizeClass, mode].join(' ')}
      // style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
