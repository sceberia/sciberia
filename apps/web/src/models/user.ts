import prisma from "@/lib/prisma"

export const getUserByEmail = async (email: string | null | undefined) => {
    if (!email) {
        return null;
    }
    return await prisma.user.findUnique({
        where: {
            email,
        },
        select: {
            id: true,
            email: true,
            emailVerified: true,
            password: true,
        },
    });
}
