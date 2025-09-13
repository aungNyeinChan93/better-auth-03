"use client";

import { authClient } from "@/app/lib/auth-client";
import { AuthServerSession } from "@/features/auth/auth-helper";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

interface Props {
  session?: AuthServerSession | null;
}

const AuthNavbar = ({ session }: Props) => {
  return (
    <main>
      <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center justify-between gap-5 w-full">
          <Link href={"/"} className=" cursor-pointer">
            <Image src={"/next.svg"} alt="logo" width={80} height={80} />
          </Link>
          <a href="#" className="hidden max-sm:block">
            <img
              src="https://readymadeui.com/readymadeui-short.svg"
              alt="logo"
              className="w-9"
            />
          </a>

          {/* Right actions */}
          <div className="flex max-lg:ml-auto space-x-4">
            <Link
              href={"/login"}
              className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-slate-900 border border-gray-400 bg-transparent hover:bg-gray-50 transition-all"
            >
              Login
            </Link>
            <Link
              href={"/register"}
              type="button"
              className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all"
            >
              Sign up
            </Link>
          </div>
        </div>
      </header>
    </main>
  );
};

export default AuthNavbar;
