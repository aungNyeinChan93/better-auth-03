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
    name: z
        .string()
        .min(1, { message: "Name field is required" })
        .max(19, { message: "Name cannot exceed 19 characters" })
        .regex(/^[a-zA-Z\s]+$/, {
            message: "Name can only contain letters and spaces",
        }),
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email({ message: "Invalid email address" }),
    password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters long", })
        .max(32, { message: "Password cannot exceed 32 characters" })
    // .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    // .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    // .regex(/[0-9]/, { message: "Password must contain at least one number" })
    // .regex(/[@$!%*?&]/, { message: "Password must contain at least one special character (@$!%*?&)" }),
});

export const LoginSchema = z.object({
    email: z.string().min(1, 'email filed is required').email('Invalid email'),
    password: z
        .string()
        .min(1, { message: "Password must be at least 1 characters long", })
    // .max(32, { message: "Password cannot exceed 32 characters" })
    // .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    // .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    // .regex(/[0-9]/, { message: "Password must contain at least one number" })
    // .regex(/[@$!%*?&]/, { message: "Password must contain at least one special character (@$!%*?&)" }),
})



export type NRC = z.infer<typeof NRCSchema>
export const NRCSchema = z.tuple([z.number(), z.string(), z.number()])

export const SampleUserSchema = z.object({
    name: z.string({ error: 'name must be string ' }).min(2, {}),
    phone: z.number(),
    nrc: NRCSchema,
    address: z.object()
});


type TsUnion = string | number | undefined | null;

type ZUnion = z.infer<typeof UnionSchema>
const UnionSchema = z.union([z.string(), z.undefined(), z.number(), z.null(),])