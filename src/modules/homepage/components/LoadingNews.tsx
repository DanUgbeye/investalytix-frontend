"use client";

export default function LoadingNews() {
  return (
    <div>
      <div className="flex gap-4 mb-12">
        <p className="h-6 w-36 animate-pulse rounded-full bg-gray-200 dark:bg-gray-100/10"></p>
        <p className="h-6 w-10 animate-pulse rounded-full bg-gray-200 dark:bg-gray-100/10"></p>
      </div>

      <div className="grid grid-cols-3 gap-14">
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
      </div>
    </div>
  );
}

function News() {
  return (
    <div className="">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 shrink-0 animate-pulse rounded-full bg-gray-200 dark:bg-gray-100/10"></div>
        <div className="h-4 w-16 animate-pulse rounded-full bg-gray-200 dark:bg-gray-100/10"></div>
        <div className="h-1 w-1 shrink-0 animate-pulse rounded-full bg-gray-200 dark:bg-gray-100/10"></div>
        <p className="h-4 w-10 animate-pulse rounded-full bg-gray-200 dark:bg-gray-100/10"></p>
      </div>

      <div className="mt-2 flex flex-col gap-1">
        <p className="h-3 w-[90%] animate-pulse rounded-full bg-gray-200 dark:bg-gray-100/10"></p>
        <p className="h-3 w-full animate-pulse rounded-full bg-gray-200 dark:bg-gray-100/10"></p>
        <p className="h-3 w-[80%] animate-pulse rounded-full bg-gray-200 dark:bg-gray-100/10"></p>
        <p className="h-3 w-[70%] animate-pulse rounded-full bg-gray-200 dark:bg-gray-100/10"></p>
      </div>
    </div>
  );
}
