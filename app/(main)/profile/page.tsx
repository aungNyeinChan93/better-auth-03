import ProfileCard from "@/components/profile/profile-card";
import { getAuthUser } from "@/features/auth/auth-helper";
import { User } from "@/lib/generated/prisma";
import React, { Suspense } from "react";

const ProfilePage = async () => {
  const authUser = await getAuthUser();
  return (
    <React.Fragment>
      <main className="flex w-full min-h-screen ">
        <div className=" basis-1/2">
          <Suspense fallback={<>Loading . . . </>}>
            <ProfileCard />
          </Suspense>
        </div>
        <div className=" basic-1/2 ">
          <pre>{JSON.stringify(authUser, null, 2)}</pre>
        </div>
      </main>
    </React.Fragment>
  );
};

export default ProfilePage;
