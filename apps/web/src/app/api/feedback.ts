import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { name, phone } = req.body;
    if (!name || !phone) {
        res.status(400).json({ message: "не верный запрос" });
        return
    }
    const message =
        `Обратная связь ${name}\n\n` +
        `Заказал обратную связнь на номер ${phone}`;
    const ret = await fetch(
        `https://api.telegram.org/bot${process.env.TELEGRAMBOT_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAMBOT_CHATID}&text=${message}`
    );
    res.status(201).json({ message: "Обратная связь отправлена" })
}

