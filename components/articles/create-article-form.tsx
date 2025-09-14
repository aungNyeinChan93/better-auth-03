"use client";

import React, { useActionState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { createArticleAction } from "@/features/articles/articles-action";
import { User } from "@/features/auth/auth-helper";

interface Props {
  user?: User | null;
}

const CreatArticleForm = ({ user }: Props) => {
  const [state, formAction, isPending] = useActionState(
    createArticleAction,
    undefined
  );
  return (
    <React.Fragment>
      <main className="w-full p-2 sm:w-[700px]">
        <Card>
          <CardHeader>
            <div className="flex  justify-between items-center">
              <CardTitle className=" text-xl text-indigo-500 font-semibold tracking-wide">
                Create Article
              </CardTitle>
              <CardAction>
                <div className="flex justify-around space-x-2">
                  <button>✅</button>
                  <button>❌</button>
                  <button>⭐</button>
                </div>
              </CardAction>
            </div>
          </CardHeader>
          <CardContent>
            {!state?.success && (
              <p className="text-red-600 p-2 ">{state?.errors?.other}</p>
            )}
            <form action={formAction}>
              <input type="hidden" name="author_id" value={user?.id} />
              {!state?.success && (
                <p className="text-red-600 p-2 ">{state?.errors?.title}</p>
              )}
              <Input
                type="text"
                placeholder="Enter Title"
                className="py-5 mb-5"
                name="title"
              />

              {!state?.success && (
                <p className="text-red-600 p-2 ">{state?.errors?.body}</p>
              )}
              <Textarea
                name="body"
                className="h-50"
                placeholder="Type your message here."
                id="message-2"
              />
              <Button className="mt-4" type="submit" variant={"outline"}>
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </React.Fragment>
  );
};

export default CreatArticleForm;
