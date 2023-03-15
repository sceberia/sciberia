"use client";
import {useState} from 'react';
import { BigCard, Button, CheckBox, Input } from "ui";

export default function Oferta() {
    const [send, setSend] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [check, setCheck] = useState(false);
    if(send){
        //TODO переделать
        return (
            <div>Отправлено</div>
        )
    }
    return (
        <BigCard primary={false}>
            <div className="p-10">
                <h1 className="text-custom-black text-lg font-semibold">Номерок не подскажете?</h1>
                <div className="space-y-4 py-8">
                    <Input
                        name="name"
                        placeholder="Имя"
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                    <Input
                        name="name"
                        placeholder="Телефон"
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value)
                        }}
                    />
                </div>
                <CheckBox label="Согласен на обработку персональных данных" defaultValue={check} onChange={(e) => {
                    setCheck(e.target.checked)
                }} />
                <div className="w-3/4 mt-4">
                    <Button
                        label="Заказать обратный звонок"
                        onClick={async (e) => {
                            e.preventDefault();
                            if(!phone || !name || !check){
                                return
                            }
                            const res = await fetch('/api/feedback', {
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                method: 'POST',
                                body: JSON.stringify({
                                   name, phone
                                },
                                )
                            })
                            if(res.status === 201){
                                setSend(true);
                            }
                        }}
                        size="medium"
                        type={"default"}
                        disabled={false}
                    />
                </div>
            </div>
        </BigCard>
    )
}