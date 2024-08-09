"use client";
import Spinner from "@/components/spinner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { clientAPI } from "@/config/client/api";
import useFetcher from "@/hooks/useFetcher";
import NewsCard from "@/modules/news/components/news-card";
import NewsLink from "@/modules/news/components/news-link";
import { NewsRepository } from "@/modules/news/repository";
import { BezingaNews, BezingaNewsChannel } from "@/modules/news/types";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MarketSectionHeader from "@/components/ui/MarketSectionHeader";

export type NewsSectionProps = {
  label: string;
  sections: BezingaNewsChannel[];
};
export default function NewsSection(props: NewsSectionProps) {
  const { label, sections } = props;
  return (
    <section className="">
      <MarketSectionHeader label={label} />
      <Tabs defaultValue={sections[0]}>
        <TabsList>
          {sections.map((section) => (
            <TabsTrigger value={section} className="capitalize">
              {section}
            </TabsTrigger>
          ))}
        </TabsList>
        {sections.map((section) => (
          <TabsContent value={section}>
            <Category category={section} />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

// section === "all" ? label : section

function Category({ category }: { category: BezingaNewsChannel }) {
  const [news, setNews] = useState<BezingaNews[]>([]);
  const [page, setPage] = useState(1);
  const pageSize = 15;
  const { wrapper, data, loading } = useFetcher<BezingaNews[]>([]);

  function loadMoreHandler() {
    setPage((p) => p + 1);
  }

  useEffect(() => {
    const newsRepo = new NewsRepository(clientAPI);
    wrapper(() =>
      newsRepo.getBezingaNews({ channels: [category], page, pageSize })
    );
  }, [category, page, pageSize]);

  useEffect(() => {
    if (data) {
      setNews((n) => [...n, ...data]);
    }
  }, [data]);

  return (
    <div className="mb-16">
      <div className="grid gap-x-10 gap-y-4 md:grid-cols-2 lg:mt-16 xl:grid-cols-3">
        {news.map((news, index) => (
          <NewsLink news={news} key={news.title.replaceAll(" ", "-")}>
            <NewsCard news={news} />
          </NewsLink>
        ))}
      </div>

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
            y: 20,
          },
          hide: {
            opacity: 0,
            y: -50,
          },
        }}
        className="flex items-center justify-center"
      >
        <div className=" ">
          <Spinner />
        </div>
      </motion.div>

      {news.length > 0 && (
        <Button variant="outline" onClick={loadMoreHandler} disabled={loading}>
          Load more
        </Button>
      )}
    </div>
  );
}
