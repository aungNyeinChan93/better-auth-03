import { Prisma } from "@/lib/generated/prisma"


export type Users = Prisma.UserGetPayload<{
    include: { accounts: true, sessions: true }
}>[]

export async function getAllUsers(limit?: number) {
    const users: Users | undefined = await prisma?.user.findMany({
        include: { accounts: true, sessions: true, articles: true },
        orderBy: { createdAt: "desc" },
        take: limit || 10
    })
    return users
}