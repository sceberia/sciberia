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
  /**
   * Ссылка
   */
  href: string;
  book: boolean;
}

/**
 * MenuLink
 */
export const MenuLink = ({
  label,
  href,
  arrow,
  book = false,
  ...props
}: MenuLinkProps) => {
  return (
    <a
      href={href}
      className={['text-custom-black text-lg font-normal flex'].join(' ')}
      {...props}
    >
      {label} {arrow ? <img src={book ? ArrowDown : ArrowDown.src }/> : ""}
    </a>
  );
};
