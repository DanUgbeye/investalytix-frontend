"use client";

export default function NewsCardLoading() {
  return (
    <div className="rounded-lg bg-gray-200 p-2 pr-4 dark:bg-gray-100/5">
      <div className="grid grid-cols-[auto,1fr] gap-4">
        <div className="w-24 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-100/5"></div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-4 w-16 animate-pulse rounded-full bg-gray-200 dark:bg-gray-100/5"></div>
            <div className="h-1 w-1 shrink-0 animate-pulse rounded-full bg-gray-200 dark:bg-gray-100/5"></div>
            <p className="h-4 w-10 animate-pulse rounded-full bg-gray-200 dark:bg-gray-100/5"></p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="h-3 w-[90%] animate-pulse rounded-full bg-gray-200 dark:bg-gray-100/5"></p>
            <p className="h-3 w-full animate-pulse rounded-full bg-gray-200 dark:bg-gray-100/5"></p>
            <p className="h-3 w-[80%] animate-pulse rounded-full bg-gray-200 dark:bg-gray-100/5"></p>
            <p className="h-3 w-[70%] animate-pulse rounded-full bg-gray-200 dark:bg-gray-100/5"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
