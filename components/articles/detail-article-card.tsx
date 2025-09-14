import { Article } from "@/features/articles/articles-helper";
import React from "react";

interface Props {
  article?: Article | null;
}

const DetailArticleCard = ({ article }: Props) => {
  return (
    <React.Fragment>
      <section className="w-full sm:w-[400px] md:w-[800px] overflow-auto">
        <div className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
          <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
            <div className="sm:order-last sm:shrink-0">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                alt={article?.author?.image ?? ``}
                className="size-16 rounded-full object-cover sm:size-[72px]"
              />
            </div>

            <div className="mt-4 sm:mt-0">
              <h3 className="text-lg font-medium text-pretty text-gray-900">
                {article?.title}
              </h3>

              <p className="mt-1 text-sm text-gray-700">
                {article?.author?.name}
              </p>

              <p className="mt-4  text-sm text-pretty text-gray-700 leading-loose">
                {article?.body}
              </p>
            </div>
          </div>

          <dl className="mt-6 flex gap-4 lg:gap-6">
            <div>
              <dt className="text-sm font-medium text-gray-700">
                Published on
              </dt>

              <dd className="text-xs text-gray-700">
                {article?.created_at.toLocaleTimeString()}
              </dd>
            </div>

            <div>
              <dt className="text-sm font-medium text-gray-700">Update time</dt>

              <dd className="text-xs text-gray-700">
                {article?.updated_at.toLocaleTimeString()}
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </React.Fragment>
  );
};

export default DetailArticleCard;
