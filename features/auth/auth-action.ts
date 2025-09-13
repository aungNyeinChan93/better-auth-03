'use server'

import { auth } from "@/app/lib/auth";
import { success } from "better-auth";


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

    if (!name.trim()) {
        errors.name = 'Name Fields is required'
    };
    if (!email.trim()) {
        errors.email = 'Email Fields is required'
    };
    if (!password.trim()) {
        errors.password = 'Password Fields is required'
    };
    if (Object.keys(errors).length > 0) {
        return { success: false, errors }
    };

    try {
        const { user } = await auth.api.signUpEmail({ body: { name, email, password, callbackURL: '/login' } })
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