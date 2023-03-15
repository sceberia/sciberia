import React from 'react';

interface ButtonProps {
  /**
   * Первичный?
   */
  primary?: boolean;
  /**
   * Какой цвет задать 
   * //TODO сделать массив цветов
   */
  backgroundColor?: string;
  /**
   * Какого размера кнопка
   */
  size?: 'small' | 'medium' | 'large';
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
    case 'small': {
      return 'p-32 py-2.5'
    }
    case 'large': {
      return 'px-6 py-3'
    }
    default: {
      return 'px-5 py-2.5'
    }
  }
}
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const sizeClass = getSizeClasses(size)
  const mode = primary ? 'bg-primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['text-custom-white rounded-xl', sizeClass, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
