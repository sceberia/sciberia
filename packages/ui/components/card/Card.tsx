import React, { ReactComponentElement, ReactElement } from 'react';

interface CardProps {
    /**
     * Обработчик нажатия
     */
    label: string
    children: ReactElement
}

/**
 * Card
 */
export const Card = ({
    label,
    children,
    ...props
}: CardProps) => {
    return (
        <div className="block flex items-center max-w-lg rounded-[22px] bg-custom-white py-[40px] px-[28px] mr-4">
            {children}
            <h5 className="mb-2 text-base font-regular text-custom-black">{label}</h5>
        </div>
    );
};
