import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { first_name, phone, comment, last_name, email } = req.body;
    if (!first_name || !phone || !comment || !last_name || !email) {
        res.status(400).json({ message: "не верный запрос" });
        return
    }
    const message = encodeURIComponent(
        `От ${first_name} ${last_name} пришла заявка для связи\n` +
        `Заказал обратную связь на номер ${phone} так же можно связаться через почту ${email}\n` +
        `Пожелания ${comment}` );
    const ret = await fetch(
        `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_CHANEL_ID}&text=${message}`
    );
    res.status(201).json({ message: "Заявка отправлена" })
}

