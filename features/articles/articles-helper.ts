import 'server-only'

import { Prisma } from "@/lib/generated/prisma";
import { revalidatePath } from 'next/cache';

export type Article = Prisma.ArticleGetPayload<{
    include: { author: true }
}>

export async function getALlArticles(limit?: number) {
    const articles: Article[] | undefined = await prisma?.article.findMany({
        include: { author: true },
        orderBy: { created_at: "desc" },
        take: limit || 10
    })
    return articles;
}


export async function deleteArticleById(id?: string | number) {
    const isDelete = !!(await prisma?.article.delete({ where: { id: id as string } }))
    if (!isDelete) return;
    return revalidatePath('/articles')
}



export async function getArticleById(id: string) {
    const article = await prisma?.article.findUnique({ where: { id: id as string }, include: { author: true } })
    return article;
}