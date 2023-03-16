import Link from "next/link";
import prisma from "@/lib/prisma";
import {getSession} from "next-auth/react";

export default function Verify({ params }:any) {
    if(!params.token){

    }
    const token = params.token.split('token=')[1];
    if(!token || typeof token !== "string"){
    }
}

const verifyUser = async (token: string) => {
    const verificationToken = await prisma.verificationToken.findUnique({
        where: {
            token: token
        }
    });
    if (verificationToken && verificationToken.expires > new Date()) {
        await prisma.user.update({
            where: {
                id: verificationToken.userId
            },
            data: {
                emailVerified: true
            }
        });
        await prisma.verificationToken.delete({
            where: {
                token: token
            }
        });
        return true;
    } else if (verificationToken && verificationToken.expires < new Date()) {
        await prisma.verificationToken.delete({
            where: {
                token: token
            }
        });
    }
    return false;
}