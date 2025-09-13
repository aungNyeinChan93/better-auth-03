import AuthNavbar from "@/components/share/AuthNavbar";
import { getServerSession } from "@/features/auth/auth-helper";
import { redirect } from "next/navigation";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const AuthLayout = async ({ children }: Props) => {
  const session = await getServerSession();

  if (session) {
    return redirect("/");
  }
  return (
    <React.Fragment>
      <AuthNavbar />
      {children}
    </React.Fragment>
  );
};

export default AuthLayout;
