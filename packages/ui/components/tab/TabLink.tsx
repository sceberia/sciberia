import React from 'react';

interface TabLinkProps {
  /**
   * Надпись
   */
  label: string;
  /**
   * Активный?
   */
  disabled?: boolean
}

/**
 * TabLink
 */
export const TabLink = ({
  label,
  disabled = false,
  ...props
}: TabLinkProps) => {
    const disabledClass = disabled ? "bg-bg-primary" : "bg-custom-white"
  return (
    <div
      className={['rounded-xl text-custom-black py-[12px] px-[16px] w-full mr-2', disabledClass].join(' ')}
      {...props}
    >
      {label}
    </div>
  );
};
