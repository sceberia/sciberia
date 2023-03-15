'use client';

import { Button, Icon, Input, Logo, TabLink } from "ui";
import { Tab } from '@headlessui/react'

function getActive(active: boolean) {
    const disabledClass = active ? "bg-custom-white" : "bg-bg-primary"
    return ['rounded-xl text-custom-black py-[12px] px-[16px] w-full mr-2', disabledClass].join(' ')
}

export default function Register() {
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
                />
                <div className="flex">
                    <Input
                        name="first_name"
                        placeholder="Имя"
                        type="text"
                        marginRight={true}
                    />
                    <Input
                        name="last_name"
                        placeholder="Фамилия"
                        type="text"
                    />
                </div>
                <Input
                    name="password"
                    placeholder="Придумайте пароль"
                    type="password"
                />
                <div className="w-full">
                    <Button
                        label="Зарегистрироваться"
                        onClick={() => { }}
                        size="medium"
                        type="disabled"
                        disabled={true}
                    />
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}