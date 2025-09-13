"use client";

import React, { useEffect } from "react";

interface Props {
  error?: Error;
  reset: () => void;
}

const RootError = ({ error, reset }: Props) => {
  useEffect(() => {
    console.error(error instanceof Error ? error?.message : "unknown error");
  }, []);
  return (
    <React.Fragment>
      <main className="text-red-600 bg-slate-950 w-full min-h-screen flex justify-center items-center">
        <div className="text-center">
          <h3 className="text-xl font-semibold tracking-wider shadow">
            {error && error?.message}
          </h3>
          <button type="button" onClick={reset}>
            refresh
          </button>
        </div>
      </main>
    </React.Fragment>
  );
};

export default RootError;
