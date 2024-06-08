"use client";

import HeaderWithUnderline from "@/components/heading";
import NewsCard from "@/modules/news/components/news-card";
import { CompanyProfile, News } from "@/modules/ticker/types";
import Link from "next/link";

interface NewsScreenProps {
  ticker: string;
  profile: CompanyProfile;
  news: News[];
}

export default function NewsScreen(props: NewsScreenProps) {
  const { ticker, profile, news } = props;

  return (
    <section className="  ">
      <HeaderWithUnderline>Latest on {profile.companyName}</HeaderWithUnderline>

      {/* KEY DATA */}
      <div className=" grid grid-cols-[repeat(auto-fill,minmax(17rem,1fr))] gap-4 py-8 sm:gap-8 ">
        {news.map((news, index) => {
          return (
            <Link
              key={`${news.title}`}
              href={news.url}
              target="_blank"
              className=" "
            >
              <NewsCard news={news} />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
