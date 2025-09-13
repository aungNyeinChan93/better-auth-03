import { z } from 'zod'

export type User = z.infer<typeof UserSchema>

export const UserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.number()
})

export async function isValidate(user: any) {
    return !!(UserSchema.parse(user))
}

export const RegisterSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string()
});