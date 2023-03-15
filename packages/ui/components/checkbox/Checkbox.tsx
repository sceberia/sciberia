import React from 'react';

interface CheckBoxProps {
    /**
     * Обработчик нажатия
     */

    label: string
    onChange: (e: any) => void;

    defaultValue?: boolean
}

/**
 * CheckBox
 */
export const CheckBox = ({
    label,
    defaultValue=false,
    onChange,
    ...props
}: CheckBoxProps) => {
    return (
        <div className="block">
            <div className="mt-2">
                <label className="inline-flex items-center">
                    <input type="checkbox" className="w-6 h-6 rounded-full" defaultChecked={defaultValue} onChange={onChange}/>
                    <span className="ml-2 text-text-secondary text-base">{label}</span>
                </label>
            </div>
        </div>
    );
};
