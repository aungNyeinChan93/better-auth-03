import { auth } from "@/app/lib/auth";
import { Prisma } from "@/lib/generated/prisma";
import { headers } from "next/headers";
import { cache } from "react";


export type AuthServerSession = typeof auth.$Infer.Session
export type User = Prisma.UserGetPayload<{}>

export const getServerSession = cache(async () => {
    const session = await auth.api.getSession({ headers: await headers() });
    return session
});

export const getAuthUser = cache(async () => {
    const session = await auth.api.getSession({ headers: await headers() });
    const authUser = session && await prisma?.user.findUnique({
        where: { id: session?.user?.id as string }
    })
    return authUser
})