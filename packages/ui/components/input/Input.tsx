import React from 'react';

interface InputProps {
    /**
     * Надпись кнопки
     */
    placeholder: string;
    /**
     * Требовать?
     */
    required?: boolean;
    /**
     * Name
     */
    name: string;
    /**
     * Значение
     */
    value?: string;
    /**
     * Начальное значение
     */
    defaultValue?: string
    /**
     * Тип кнопки
     */
    type?: "text" | "password" | "submit" | "checkbox" | "tel"

    /**
     * Маржин с спрваа
     */
    marginRight?: boolean;
    
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    
}

/**
 * Input
 */
export const Input = ({
    placeholder,
    name,
    type = "text",
    marginRight,
    ...props
}: InputProps) => {
    
    return (
        <input type={type} 
        name={name}
        placeholder={placeholder}
         className={["bg-bg-primary text-custom-black font-normal text-[16px] rounded-2xl block w-full py-[18px] px-[16px]" , marginRight ? "mr-2" : ""].join(' ')}
         {...props} />
    );
};
