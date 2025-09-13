import React from "react";
import { isValidate, User, UserSchema } from "@/lib/zod/z-schema";

const ZodTestsPage = async () => {
  const user = {
    name: "aung",
    email: "anc@gmail.com",
    password: 123123,
  };

  const { success, data: validatedUser, error } = UserSchema.safeParse(user);

  if (!success) throw new Error(error?.message);

  return (
    <React.Fragment>
      <main>
        <h3>Zod</h3>
        <pre>{JSON.stringify(validatedUser, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default ZodTestsPage;
