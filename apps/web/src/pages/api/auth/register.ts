import { NextApiRequest, NextApiResponse } from "next";
import { getUserByEmail } from "@/models/user";
import { makeid, validateEmail } from "@/utils/utils";
import client from "@/lib/mail";
import prisma from "@/lib/prisma";

const bcrypt = require('bcrypt');

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { email, password, first_name, last_name } = req.body;
        if (!validateEmail(email)) {
            res.status(422).json({ message: 'Некорректный email' });
            return;
        }
        if (!password || password.length < 6) {
            res.status(422).json({ message: 'Пароль должен быть больше 6 символов' });
            return;
        }
        if (password.length > 20) {
            res.status(422).json({ message: 'Пароль должен быть меньше 20 символов' });
            return;
        }
        const token = await createUser(email, password, first_name, last_name);
        if (!token) {
            res.status(422).json({ message: 'Такой пользователь уже есть' });
            return;
        }
        //Отправить письмо с токеном
        const mailData = {
            from: 'no-reply@sciberia-plus.ru',
            to: email,
            subject: 'Подтверждение почты',
            html: `<h1>Подтвердите почту ${first_name} ${last_name}</h1>
            <p>Для подтверждения перейдите по ссылке</p>
            <a href="https://sciberia-plus.ru/auth/verify?token=${token}">Подтвердить почту</a>
            `,
            text: 'Подтвердите почту',
        }
        client.sendMail(mailData, (err: any, info: any) => {
            console.log(err)
        });
        res.status(200).json({ message: 'Created user' });
    } else {
        res.status(500).json({ message: 'Route not valid' });
    }
}



const createUser = async ( email: string, password: string, first_name: string, last_name: string) => {
    const user1 = await getUserByEmail(email);
    if (user1) {
        return null;
    }
    const passwordHashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: {
            email: email,
            first_name: first_name,
            last_name: last_name,
            password: passwordHashed
        }
    });
    const token = makeid(32);
    await prisma.verificationToken.create({
        data: {
            token: token,
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
            user: {
                connect: {
                    id: user.id
                }
            }
        }
    });
    return token;
}