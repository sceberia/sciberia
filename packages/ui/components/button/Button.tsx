
import React from 'react';
import { ArrowRight } from '../..';

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

  arrowRight?: boolean

  book?: boolean

  disabled?: boolean

  onClick?: (e: any) => void;
}

const getSizeClasses = (size: any) => {
  switch (size) {
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

const getTypeClasses = (type: any) => {
  switch (type) {
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
  arrowRight = false,
  book = false,
  label,
  ...props
}: ButtonProps) => {
  const sizeClass = getSizeClasses(size)
  const mode = getTypeClasses(type);
  return (
    <button
      type="button"
      className={['text-custom-white text-sm w-full', sizeClass, mode].join(' ')}
      // style={{ backgroundColor }}
      disabled={disabled}
      {...props}
    >
      <span className="flex justify-center">
        {label}  {arrowRight ? <img src={book ? ArrowRight : ArrowRight.src} className={"ml-2"}/> : ""}
      </span>

    </button>
  );
};
