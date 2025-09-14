import ArticleCard from "@/components/articles/article-card";
import { getALlArticles } from "@/features/articles/articles-helper";
import { getServerSession } from "@/features/auth/auth-helper";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const ArticlesPage = async () => {
  const session = await getServerSession();

  if (!session) {
    return redirect("/login");
  }

  const articles = await getALlArticles();

  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-green-50">
        {/* article header  */}
        <section className="flex justify-between items-center  py-4 bg-slate-50 shadow-2xl px-10 ">
          <h3 className="text-xl font-semibold tracking-wide font-mono text-indigo-600">
            Articles
          </h3>
          <Link
            className="p-1 bg-gray-200 text-lg rounded-full"
            href={"/articles/create-article"}
          >
            ➕
          </Link>
        </section>

        <section className="mx-10 p-4 mt-4 rounded-2xl bg-green-100 h-auto">
          {articles?.map((article) => {
            return <ArticleCard key={article.id} article={article} />;
          })}
        </section>
      </main>
    </React.Fragment>
  );
};

export default ArticlesPage;
