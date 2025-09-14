import CreatArticleForm from "@/components/articles/create-article-form";
import { getAuthUser } from "@/features/auth/auth-helper";
import { unauthorized } from "next/navigation";
import React from "react";

const CreateArticlePage = async () => {
  const authUser = await getAuthUser();

  if (!authUser) {
    return unauthorized();
  }

  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-green-50 flex justify-center items-center">
        <CreatArticleForm user={authUser} />
      </main>
    </React.Fragment>
  );
};

export default CreateArticlePage;
