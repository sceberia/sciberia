import React, { ReactComponentElement, ReactElement } from 'react';

interface CardProps {
    children: ReactElement
    primary?: boolean
}

/**
 * MediumCard
 */
export const MediumCard = ({
    children,
    primary=false,
    // img,
    ...props
}: CardProps) => {
    const primaryClass = primary ? "bg-bg-primary" : "bg-custom-white"
    return (
        <div className={[primaryClass, "w-full rounded-[24px] p-[40px]"].join(' ')}>
            {children}
        </div>
    );
};