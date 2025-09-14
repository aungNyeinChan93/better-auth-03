import DetailArticleCard from "@/components/articles/detail-article-card";
import { Button } from "@/components/ui/button";
import { Article, getArticleById } from "@/features/articles/articles-helper";
import Link from "next/link";
import React from "react";

interface Props {
  params: Promise<{ articleId: string }>;
}

const DetailArticlePage = async ({ params }: Props) => {
  const { articleId } = await params;

  const article: Article | undefined | null = articleId
    ? await getArticleById(articleId)
    : undefined;

  return (
    <React.Fragment>
      <main className="flex justify-center items-center w-full min-h-screen bg-gradient-to-l from-teal-400/80 via-green-400/80 to-sky-400/80 ">
        <div className="flex flex-col gap-4 my-4">
          <Button
            asChild
            variant={"ghost"}
            className="!inline w-20 text-center"
          >
            <Link href="/articles">Back</Link>
          </Button>
          <DetailArticleCard article={article} />
        </div>
      </main>
    </React.Fragment>
  );
};

export default DetailArticlePage;
