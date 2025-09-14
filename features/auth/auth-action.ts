'use server'

import { auth } from "@/app/lib/auth";
import { success } from "better-auth";
import { RegisterSchema } from "@/lib/zod/z-schema";

interface Errors {
    name?: string,
    email?: string,
    password?: string,
    other?: string
}

export async function registerAction(initialState: any, formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const errors: Errors = {}
    // if (!name.trim()) {
    //     errors.name = 'Name Fields is required'
    // };
    // if (!email.trim()) {
    //     errors.email = 'Email Fields is required'
    // };
    // if (!password.trim()) {
    //     errors.password = 'Password Fields is required'
    // };

    // if (Object.keys(errors).length > 0) {
    //     return { success: false, errors }
    // };

    const { success: z_success, data: valitadeFields, error: zErr } = await RegisterSchema.safeParseAsync({ name, email, password })

    if (!z_success) {
        return {
            success: false, errors: {
                name: zErr.format().name?._errors[0],
                email: zErr.format().email?._errors[0],
                password: zErr.format().password?._errors[0],
            }
        }
    }

    try {
        const { user } = z_success && await auth.api.signUpEmail({ body: { ...valitadeFields } })
        if (!user) {
            errors.other = 'register fail!'
            return { success: false, errors }
        }
        return { success: true, message: 'register success' }
    } catch (error) {
        errors.other = error instanceof Error ? error?.message : 'register fail'
        return { success: false, errors }
    }
}