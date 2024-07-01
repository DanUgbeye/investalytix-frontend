"use client";

import { Button } from "@/components/ui/button";
import { TbPlugConnectedX } from "react-icons/tb";

export default function ErrorScreen({ error }: { error: { message: string } }) {
  function handleRefresh() {
    window.location.reload();
  }

  return (
    <main className="flex h-full flex-col-reverse flex-wrap justify-between gap-6 py-10 sm:grid sm:grid-cols-2">
      <div className="flex flex-col items-center gap-5 sm:items-start sm:justify-center">
        <div className="space-y-2">
          <h1 className="text-center text-5xl font-bold sm:text-left sm:text-6xl">
            Oops!
          </h1>

          <p className="text-center sm:text-left">
            {error.message === "fetch failed"
              ? "You don't have an internet connection"
              : error.message}
          </p>
        </div>

        <Button className="h-9 w-fit rounded text-sm" onClick={handleRefresh}>
          Refresh
        </Button>
      </div>

      <div className="flex aspect-square size-32 items-center justify-center self-center rounded-full p-5 text-red-300 ring-4 ring-red-300 sm:ml-auto sm:mr-10 sm:size-40 dark:text-red-700/80 dark:ring-red-700/80">
        <TbPlugConnectedX className="h-full w-full stroke-1" />
      </div>
    </main>
  );
}
