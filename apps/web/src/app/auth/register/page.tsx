'use client';

import { Button, CheckBox, Icon, Input, Logo, TabLink } from "ui";
import { useState } from 'react'
import { Tab } from '@headlessui/react'

function getActive(active: boolean) {
    const disabledClass = active ? "bg-custom-white" : "bg-bg-primary"
    return ['rounded-xl text-custom-black py-[12px] px-[16px] w-full mr-2', disabledClass].join(' ')
}

export default function Register() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [persCheck, setPersCheck] = useState(false);
    const [userTerms, setUserTerms] = useState(false);


    if (email && firstName && lastName && lastName && password && disabled && userTerms && persCheck) {
        setDisabled(false);
    }

    async function onSubmit(e: any) {
        e.preventDefault();
        const res = await fetch('/api/auth/register', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                email, first_name: firstName, last_name: lastName ,password
            },
            )
        })
    }

    return (
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-custom-white rounded-[32px]">
            <div className="flex justify-center pt-[26px]">
                <img src={Icon.src} className="mr-2" />
                <img src={Logo.src} />
            </div>
            <div className="w-full bg-bg-primary rounded-2xl">
                <Tab.Group>
                    <Tab.List className="flex mx-[8px] py-[8px]">
                        <Tab className={({ selected }) =>
                            getActive(selected)
                        }>
                            Я врач
                        </Tab>
                        <Tab className={({ selected }) =>
                            getActive(selected)
                        }>
                            Организация
                        </Tab>
                    </Tab.List>
                </Tab.Group>
            </div>
            <div className="space-y-4 md:space-y-6">
                <Input
                    name="email"
                    placeholder="Эл. Почта"
                    type="text"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <div className="flex">
                    <Input
                        name="first_name"
                        placeholder="Имя"
                        type="text"
                        marginRight={true}
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value)
                        }}
                    />
                    <Input
                        name="last_name"
                        placeholder="Фамилия"
                        type="text"
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value)
                        }}
                    />
                </div>
                <Input
                    name="password"
                    placeholder="Придумайте пароль"
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <div className="w-full">
                    <Button
                        label="Зарегистрироваться"
                        onClick={onSubmit}
                        size="medium"
                        //@ts-ignore
                        type={disabled ? "disabled" : "primary"}
                        disabled={disabled}
                    />
                </div>
                <div>
                    <CheckBox label="Согласен на обработку персональных данных" onChange={(e) => {
                        setPersCheck(e.target.checked)
                    }} />
                    <CheckBox label="Согласен с условиями пользовательского соглашения" onChange={(e) => {
                        setUserTerms(e.target.checked)
                    }} />
                </div>
            </div>
        </div>
    )
}