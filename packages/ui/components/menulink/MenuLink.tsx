import React from 'react';
import { ArrowDown } from '../..';

interface MenuLinkProps {
  /**
   * Стрелка?
   */
  arrow?: boolean;
  /**
   * Надпись кнопки
   */
  label: string;

  book?: boolean;
}

/**
 * MenuLink
 */
export const MenuLink = ({
  label,
  arrow,
  book = false,
  ...props
}: MenuLinkProps) => {
  return (
    <div
      className={['text-custom-black text-sm font-regular flex'].join(' ')}
      {...props}
    >
      {label} {arrow ? <img src={book ? ArrowDown : ArrowDown.src }/> : ""}
    </div>
  );
};
