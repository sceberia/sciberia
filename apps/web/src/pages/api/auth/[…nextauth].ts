import NextAuth, {NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {getUserByEmail} from "@/models/user";
import prisma from "@/lib/prisma";

const bcrypt = require('bcrypt');

const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/auth/login',
        error: '/auth/error',
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    type: "email",
                },
                password: {type: "password" },
            },
            async authorize(credentials, req) {
                if (credentials && credentials.email && credentials.password) {
                    const user = await getUserByEmail(credentials.email);
                    if(!user){
                       throw new Error("Пользователь не найден");
                    }
                    if(!user?.emailVerified){
                        throw new Error("Почта не подтверждена");
                    }
                    const password = user.password;
                    const passwordValid = await bcrypt.compare(credentials.password, password);
                    if (passwordValid) {
                        return user;
                    }else{
                        throw new Error("Неверный пароль");
                    }
                }else{
                    return null;
                }
            },
        }),
    ],
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
        maxAge:  30 * 60 ,
    },
    session:{
        strategy: "jwt",
    },
}


export default NextAuth(authOptions)

export {authOptions}