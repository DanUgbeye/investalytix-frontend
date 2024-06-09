"use client";

import NewsCardLoading from "@/modules/news/components/news-card-loading";

export default function LoadingNews() {
  return (
    <div>
      <div className="flex gap-4 mb-12">
        <p className="h-6 w-36 animate-pulse rounded-full bg-gray-200 dark:bg-gray-100/10"></p>
        <p className="h-6 w-10 animate-pulse rounded-full bg-gray-200 dark:bg-gray-100/10"></p>
      </div>

      <div className="grid grid-cols-3 gap-14">
        <NewsCardLoading />
        <NewsCardLoading />
        <NewsCardLoading />
        <NewsCardLoading />
        <NewsCardLoading />
        <NewsCardLoading />
        <NewsCardLoading />
        <NewsCardLoading />
        <NewsCardLoading />
        <NewsCardLoading />
        <NewsCardLoading />
        <NewsCardLoading />
      </div>
    </div>
  );
}
