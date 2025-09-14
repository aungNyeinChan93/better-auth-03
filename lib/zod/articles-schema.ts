import z from "zod";

export type CreateArticleType = z.infer<typeof CreateArticleSchema>

export const CreateArticleSchema = z.object({
    title: z.string().min(1, 'Title field is required'),
    body: z.string().min(1, 'Body field is required'),
})