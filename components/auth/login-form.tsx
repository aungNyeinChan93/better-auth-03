"use client";

import { authClient } from "@/app/lib/auth-client";
import { LoginSchema } from "@/lib/zod/z-schema";
import { email } from "better-auth";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const loginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = form;

    const { success, data: validate, error } = LoginSchema.safeParse(form);
    if (!success) {
      toast.error(error.format().email?._errors[0] as string);
      toast.error(error.format().password?._errors[0] as string);
      return;
    }

    try {
      const { data, error } = await authClient.signIn.email({
        email: validate?.email as string,
        password: validate?.password as string,
        callbackURL: "/",
      });
      if (error) {
        toast.error(error?.message as string);
        return;
      }
      if (data?.url) {
        return router.push(data?.url);
      }
    } catch (error) {
      console.error(error instanceof Error ? error?.message : error);
      toast.error(error instanceof Error ? error?.message : "login error");
      return;
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow">
        <h1 className="mb-4 text-2xl font-bold text-center">Login Form</h1>

        {/* Email + Password */}
        <form className="space-y-4" onSubmit={loginSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border p-2"
            name="email"
            value={form.email}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border p-2"
            name="password"
            value={form.password}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
