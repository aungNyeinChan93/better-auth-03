import LoginForm from "@/components/auth/login-form";
import { getServerSession } from "@/features/auth/auth-helper";
import { redirect } from "next/navigation";
import React from "react";

const LoginPage = async () => {
  const session = await getServerSession();

  if (session) {
    return redirect("/");
  }

  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        <LoginForm />
      </main>
    </React.Fragment>
  );
};

export default LoginPage;
