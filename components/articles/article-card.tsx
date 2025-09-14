import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Article,
  deleteArticleById,
} from "@/features/articles/articles-helper";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  article?: Article;
}

const ArticleCard = async ({ article }: Props) => {
  return (
    <React.Fragment>
      <section className="my-2">
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="flex justify-between ">
                <p className="text-lg font-bold tracking-wide">
                  {" "}
                  {article?.title}
                </p>
                <p>{article?.author?.name}</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className=" line-clamp-4">{article?.body}</p>
          </CardContent>
          <CardFooter>
            <form
              action={async () => {
                "use server";
                await deleteArticleById(article?.id);
              }}
            >
              <Button asChild variant={"secondary"} className="me-2">
                <Link href={`/articles/${article?.id}`}>Detail</Link>
              </Button>
              <Button type="submit" variant={"destructive"}>
                Delete
              </Button>
            </form>
          </CardFooter>
        </Card>
      </section>
    </React.Fragment>
  );
};

export default ArticleCard;
