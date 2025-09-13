import { nextCookies } from "better-auth/next-js"
import { createAuthClient } from "better-auth/react"


export const authClient = createAuthClient({
    baseURL: "http://localhost:3000",
    plugins: [nextCookies()]
})

export const { signIn, signUp, useSession, signOut, getSession } = createAuthClient()