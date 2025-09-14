'use server'

import { CreateArticleSchema } from "@/lib/zod/articles-schema";
import { prisma } from '@/lib/prisma/prisma-client'


export async function createArticleAction(initialState: any, formData: FormData) {
    const title = formData.get('title') as string;
    const body = formData.get('body') as string
    const author_id = formData.get('author_id') as string | undefined | null

    const { success, data: validateData, error } = await CreateArticleSchema.safeParseAsync({ title, body })

    if (!success) {
        return {
            success, errors: {
                title: error.format().title?._errors[0],
                body: error.format().body?._errors[0],
            }
        }
    };

    try {
        const data = await prisma?.article.create({
            data: { ...validateData, author_id }
        });

        if (!data) {
            return {
                success: false, errors: {
                    other: 'article create fail'
                }
            }
        }
        console.log(data);


        return {
            success: true,
            other: 'create success'
        }

    } catch (error) {
        return {
            success: false, errors: {
                other: error instanceof Error ? error?.message : 'article create fail'
            }
        }
    }
}