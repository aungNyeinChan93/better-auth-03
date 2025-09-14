import { getServerSession } from "@/features/auth/auth-helper";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const ArticlesPage = async () => {
  const session = await getServerSession();

  if (!session) {
    return redirect("/login");
  }
  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-green-50">
        {/* article header  */}
        <section className="flex justify-between items-center px-2 py-4 bg-slate-50 shadow-2xl ">
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
      </main>
    </React.Fragment>
  );
};

export default ArticlesPage;
