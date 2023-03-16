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
    const message = encodeURIComponent(
        `Обратная связь ${name}\n ` +
        `Заказал обратную связнь на номер ${phone}`);
    const ret = await fetch(
        `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_CHANEL_ID}&text=${message}`
    );
    res.status(201).json({ message: "Обратная связь отправлена" })
}

