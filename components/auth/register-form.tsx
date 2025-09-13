"use client";

import { registerAction } from "@/features/auth/auth-action";
import { redirect } from "next/navigation";
import { useActionState } from "react";

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState(
    registerAction,
    undefined
  );

  if (state?.success) {
    return redirect("/login");
  }
  return (
    <div className="flex min-h-screen items-center justify-center w-full">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow">
        <h1 className="mb-4 text-2xl font-bold text-center">Register Form</h1>

        {!state?.success && state?.errors?.other && (
          <>
            <p className="bg-red-50 text-red-600 p-2 rounded-2xl my-1">
              {state?.errors?.other}
            </p>
          </>
        )}

        {/* Email + Password */}
        <form className="space-y-4" action={formAction}>
          {!state?.success && (
            <div className="text-red-600 ">{state?.errors?.name}</div>
          )}

          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-lg border p-2"
            name="name"
          />

          {!state?.success && (
            <div className="text-red-600 ">{state?.errors?.email}</div>
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border p-2"
            name="email"
          />

          {!state?.success && (
            <div className="text-red-600">{state?.errors?.password}</div>
          )}
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border p-2"
            name="password"
          />

          <button
            disabled={isPending}
            type="submit"
            className={`${
              isPending && "!bg-indigo-300 !text-slate-400 block w-full"
            } w-full rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700`}
          >
            Sign Up
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">OR</div>

        {/* Social logins */}
        <button
          //   onClick={() => signIn("github", { callbackUrl: "/" })}
          className="mb-2 w-full rounded-lg bg-gray-800 p-2 text-white hover:bg-gray-900"
        >
          Continue with GitHub
        </button>
        <button
          //   onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
