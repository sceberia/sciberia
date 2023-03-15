import React, { ReactComponentElement, ReactElement } from 'react';

interface CardProps {
    children: ReactElement
    img?: any
    primary?: boolean
}

/**
 * BigCard
 */
export const BigCard = ({
    children,
    primary=false,
    ...props
}: CardProps) => {
    const primaryClass = primary ? "bg-primary" : "bg-custom-white"
    return (
        <div className={[primaryClass, "w-full rounded-[40px]"].join(' ')}>
            {children}
        </div>
    );
};