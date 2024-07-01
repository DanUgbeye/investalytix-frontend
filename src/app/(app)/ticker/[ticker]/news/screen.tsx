"use client";

import HeaderWithUnderline from "@/components/heading";
import NewsCard from "@/modules/news/components/news-card";
import NewsLink from "@/modules/news/components/news-link";
import { TickerNewsPageData } from "./page";

interface TickerNewsScreenProps extends TickerNewsPageData {
  ticker: string;
}

export default function TickerNewsScreen(props: TickerNewsScreenProps) {
  const { ticker, profile, news } = props;

  return (
    <section className=" ">
      <HeaderWithUnderline>Latest on {profile.companyName}</HeaderWithUnderline>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(17rem,1fr))] gap-4 py-8 sm:gap-8">
        {news.map((news, index) => {
          return (
            <NewsLink key={`${news.title}`} news={news}>
              <NewsCard news={news} />
            </NewsLink>
          );
        })}
      </div>
    </section>
  );
}
