"use client";
import { BigCard, Button, Input, Product1Image, Product2Image } from "ui"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Footer from "ui/components/footer/Footer"
import HeaderWeb from "../headerWeb/HeaderWeb"
import Image from 'next/image'

export default function ProductPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [comment, setComment] = useState("");
    const [disabled, setDisabled] = useState(true);


    if (email && firstName && lastName && disabled && comment) {
        setDisabled(false);
    }

    async function onSubmit(e: any) {
        e.preventDefault();
        const res = await fetch('/api/request', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                email, first_name: firstName, last_name: lastName, comment, phone
            },
            )
        })
        setIsOpen(false);
    }
    return (
        <div >
            <HeaderWeb />
            <div className="flex mx-32 pt-[120px] pb-[180px] gap-2">
                <BigCard primary={true}>
                    <div className="relative h-full">
                        <Image src={Product1Image} className="absolute bottom-0" alt=""/>
                    </div>
                </BigCard>
                <BigCard>
                    <div className="p-10">
                        <div className="mb-20">
                            <h1 className="text-lg font-semibold mb-4">Sciberia Viewer CE (Community Edition)</h1>
                            <div className="">Тип лицензирования: бесплатная бессрочная лицензия</div>
                            <div className="text-base font-regular">Для личного использования, обучения и ознакомления. Кроссплатформенное ПО с поддержкой ОС: x86-64 Windows 7+ / macOS / Linux. Обладает всем необходимым функционалом для работы с медицинскими изображениями:</div>
                        </div>
                        <div className="flex gap-2">
                            <Button label="Скачать для Windows" type="default" />
                            <Button label="Скачать для MacOS" type="default" />
                        </div>
                    </div>
                </BigCard>
            </div>

            <div className="flex mx-32 pt-[120px] pb-[180px] gap-2">
                <BigCard>
                    <div className="p-10">
                        <div className="mb-20">
                            <h1 className="text-lg font-semibold mb-4">Sciberia Viewer</h1>
                            <div className="">Тип лицензирования: коммерческий<br />
                                Срок действия лицензии: 1 год</div>
                            <div className="text-base font-regular">Для медицинских организаций с диагностическим оборудованием и собственным хранилищем данных. Обладает функционалом Sciberia Viewer CE и дополнительно включает в себя следующие функции:</div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="w-48 mr-4">
                                <Button label="Приобрести" type="default" onClick={(e) => {
                                    setIsOpen(true)
                                }} />
                            </div>
                            <span className="text-primary">35 500,00 ₽</span>
                        </div>
                    </div>
                </BigCard>
                <BigCard primary={true}>
                    <div className="relative h-full">
                        <Image src={Product2Image} className="absolute bottom-0" alt=""/>
                    </div>
                </BigCard>

            </div>
            <Footer />
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-custom-white p-6 text-left align-middle shadow-xl transition-all p-[40px]">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Заявка для связи
                                    </Dialog.Title>
                                    <div className="py-6 space-y-4 md:space-y-6">
                                        <Input
                                            name="tel"
                                            placeholder="Телефон"
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => {
                                                setPhone(e.target.value)
                                            }}
                                        />
                                        <Input
                                            name="mail"
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
                                        <textarea rows={4} value={comment} onChange={(e) => setComment(e.target.value)}className="block bg-bg-primary text-custom-black font-normal text-[16px] rounded-2xl block w-full py-[18px] px-[16px]" placeholder="Комментарий"></textarea>
                                    </div>

                                    <div className="mt-4">
                                        <div className="w-full">
                                            <Button
                                                label="Отправить"
                                                onClick={onSubmit}
                                                size="medium"
                                                //@ts-ignore
                                                type={disabled ? "disabled" : "primary"}
                                                disabled={disabled}
                                            />
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}