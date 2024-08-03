"use client";
import Spinner from "@/components/spinner";
import { clientAPI } from "@/config/client/api";
import useFetcher from "@/hooks/useFetcher";
import NewsCard from "@/modules/news/components/news-card";
import NewsLink from "@/modules/news/components/news-link";
import { NewsRepository } from "@/modules/news/repository";
import { BezingaNews, News } from "@/modules/news/types";
import { useEffect } from "react";

export default function LatestNews() {
  const { wrapper, data, loading } = useFetcher<BezingaNews[]>([]);

  useEffect(() => {
    const newsRepo = new NewsRepository(clientAPI);

    wrapper(() =>
      newsRepo.getBezingaNews({ channels: ["stock"], pageSize: 12 })
    );
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
          {data.map((news, index) => (
            <NewsLink news={news} key={news.title + index}>
              <NewsCard news={news} />
            </NewsLink>
          ))}
        </div>
      ) : null}
    </>
  );
}
