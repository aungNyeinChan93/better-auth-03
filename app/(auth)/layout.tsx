import AuthNavbar from "@/components/share/AuthNavbar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const AuthLayout = async ({ children }: Props) => {
  return (
    <React.Fragment>
      <AuthNavbar />
      {children}
    </React.Fragment>
  );
};

export default AuthLayout;
