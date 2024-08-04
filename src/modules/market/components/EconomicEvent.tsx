"use client";
import NewsCard from "@/modules/news/components/news-card";
import NewsLink from "@/modules/news/components/news-link";
import { BezingaNews, News } from "@/modules/news/types";
import MarketHeading from "./MarketHeading";
import useFetcher from "@/hooks/useFetcher";
import { useEffect } from "react";
import { NewsRepository } from "@/modules/news/repository";
import { clientAPI } from "@/config/client/api";
import Spinner from "@/components/spinner";
import { motion } from "framer-motion";

export default function EconomicEvent() {
  const { wrapper, data, loading } = useFetcher<BezingaNews[]>([]);

  useEffect(() => {
    const newsRepo = new NewsRepository(clientAPI);

    wrapper(() =>
      newsRepo.getBezingaNews({
        channels: ["Markets", "News", "Macro Economic Events"],
        pageSize: 6,
        page: 2,
      })
    );
  }, []);

  if (!data) return null;

  return (
    <div>
      <MarketHeading label="Latest news" />

      <motion.div
        initial="rest"
        animate={loading ? "show" : "hide"}
        variants={{
          rest: {
            top: -50,
            opacity: 0,
          },
          show: {
            opacity: 1,
            y: -20,
          },
          hide: {
            opacity: 0,
            y: -50,
          },
        }}
        className="flex items-center justify-center"
      >
        <div>
          <Spinner />
        </div>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((data, index) => (
          <NewsLink key={index} news={data}>
            <NewsCard news={data}></NewsCard>
          </NewsLink>
        ))}
      </div>
    </div>
  );
}
