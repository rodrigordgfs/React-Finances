import React from "react";

export default function OptionsLoading() {
  return (
    <div className="flex flex-col max-w-5xl my-0 mx-auto px-2 pt-4">
      <div className="max-w-full md:w-2/4 w-full flex flex-row items-center space-x-4">
        <div className="bg-zinc-400 animate-pulse cursor-wait flex flex-row flex-1 items-center rounded h-14 shadow-md">
          <div className="h-8 rounded-full" />
        </div>
        <div className="bg-zinc-400 cursor-wait animate-pulse h-14 w-14 rounded shadow-md" />
        <div className="bg-zinc-400 cursor-wait animate-pulse h-14 w-14 rounded shadow-md" />
      </div>
    </div>
  );
}
