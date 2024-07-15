"use client";
import Spinner from "@/components/spinner";
import useFetcher from "@/hooks/useFetcher";
import NewsCard from "@/modules/news/components/news-card";
import NewsLink from "@/modules/news/components/news-link";
import { News } from "@/modules/news/types";
import { useEffect } from "react";

async function getData(params?: { limit?: number; page?: number }) {
  const { limit = 12, page = 1 } = params ?? {};

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/news?limit=${limit}&page=${page}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<{
    message: String;
    status: number;
    data: News[];
  }>;
}

export default function LatestNews() {
  const { data, wrapper, loading } = useFetcher<{
    message: String;
    status: number;
    data: News[];
  }>(null);

  useEffect(() => {
    wrapper(() => getData({ limit: 12 }));
  }, []);

  return (
    <>
      <h2 className="mb-12 text-2xl font-extrabold">Latest news</h2>

      {loading ? (
        <div className="flex items-center justify-center p-10">
          <Spinner />
        </div>
      ) : data ? (
        <div className="grid gap-x-14 gap-y-1 md:grid-cols-2 lg:grid-cols-3">
          {data.data.map((news, index) => (
            <NewsLink news={news} key={news.title + index}>
              <NewsCard news={news} />
            </NewsLink>
          ))}
        </div>
      ) : null}
    </>
  );
}
