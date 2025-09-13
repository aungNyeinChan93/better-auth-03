"use client";

import { useSession } from "@/app/lib/auth-client";
import React from "react";

const ProfileCard = () => {
  const { data, error, isPending } = useSession();

  if (isPending) return <>Loading ... </>;
  if (error) return <>{error?.message}</>;

  return (
    <React.Fragment>
      <main>
        <div>{JSON.stringify(data, null, 2)}</div>
      </main>
    </React.Fragment>
  );
};

export default ProfileCard;
