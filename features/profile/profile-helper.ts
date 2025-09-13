import { useSession } from "@/app/lib/auth-client"
import { cache } from "react"


export const getUserById = cache(async (id?: string) => {
    const user = id && await prisma?.user.findUnique({
        where: { id: id as string }
    })
    return user
})