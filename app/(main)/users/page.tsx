import { getServerSession } from "@/features/auth/auth-helper";
import { getAllUsers, type Users } from "@/features/users/users-helper";
import { redirect } from "next/navigation";
import React from "react";

const UsersPage = async () => {
  const session = await getServerSession();

  if (!session) {
    return redirect("/login");
  }

  const users: Users | undefined = await getAllUsers();
  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default UsersPage;
