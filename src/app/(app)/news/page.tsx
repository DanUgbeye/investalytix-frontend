import { Container } from "@/components/container";
import { serverAPI } from "@/config/server/api";
import NewsCard from "@/modules/news/components/news-card";
import NewsLink from "@/modules/news/components/news-link";
import { NewsRepository } from "@/modules/news/repository";
import { News } from "@/modules/news/types";
import moment from "moment";
import Image from "next/image";
import NewsSection from "./_NewsSection";
import newsSections from "@/data/news-sections";

export default async function NewsPage() {
  const newsRepo = new NewsRepository(serverAPI);
  const data = await newsRepo.getBezingaNews({pageSize:20, channels:[
      "Trading Ideas",
      "Short Ideas",
      "Short Sellers",
      "Sector ETFs",
      "Options",
      "Technicals",
    ]});
  const otherNews = await newsRepo.getBezingaNews({pageSize:20, channels:[
      "Trading Ideas",
      "Short Ideas",
      "Short Sellers",
      "Sector ETFs",
      "Options",
      "Technicals",
    ]});

  const [major, ...others] = data;
  const minor_major = others.filter((a) => !!a.image).slice(1, 4);
  const latest = others.filter((a) => !!a.image).slice(4);

  return (
    <Container>
      <h1 className="py-10 text-center text-4xl font-semibold md:py-14 md:text-5xl lg:py-20 lg:text-6xl">
        News
      </h1>

      <div className="grid gap-10 lg:grid-cols-[2fr,1fr] lg:gap-5 lg:overflow-hidden">
        <div className="grid gap-5 lg:grid-cols-[3fr,1fr]">
          {/* 1 */}
          <div className="relative h-[500px] lg:h-full">
            {/* <div className={`relative h-full w-full  overflow-hidden`}> */}
            {major.image && (
              <Image src={major.image} alt="" fill className="object-cover" />
            )}
            {/* </div> */}

            {/*  */}
            <div className="absolute bottom-0 left-0 right-0 h-fit bg-gradient-to-b from-transparent to-black to-30% p-5 pt-20 text-white/80">
              <NewsLink news={major}>
                <p className="text-hover-focus text-3xl font-semibold">
                  {major.title}
                </p>
              </NewsLink>

              <div className="my-5 h-[0.5px] w-full bg-white/20"></div>

              <NewsLink news={minor_major[0]}>
                <p className="text-hover-focus font-semibold">
                  {minor_major[0].title}
                </p>
              </NewsLink>
            </div>
          </div>

          {/* 2 */}
          <div className="flex h-fit justify-between gap-5 lg:flex-col">
            {minor_major.slice(1).map((news) => (
              <NewsLink news={news} key={news.title.replaceAll(" ", "-")}>
                <div className="text-hover-focus">
                  <div
                    className={`relative aspect-square w-full overflow-hidden`}
                  >
                    {news.image && (
                      <Image
                        src={news.image}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <p className="mt-4 font-semibold leading-tight">
                    {news.title}
                  </p>
                </div>
              </NewsLink>
            ))}
          </div>
        </div>

        {/* 3 */}
        <div className="grid-rows-[max-content,1fr] gap-4 lg:grid lg:overflow-hidden">
          <p className="text-3xl font-bold max-xl:mb-4">Latest News</p>
          <div className="relative lg:overflow-hidden">
            <div className="gap-x-10 gap-y-4 max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1 lg:absolute lg:inset-0 lg:overflow-auto">
              {latest.slice(0, 14).map((news) => (
                <NewsLink news={news} key={news.title.replaceAll(" ", "-")}>
                  <NewsCard news={news} />
                </NewsLink>
              ))}
            </div>

            <div className="pointer-events-none from-transparent via-transparent via-80% to-white to-100% lg:absolute lg:inset-0 lg:bg-gradient-to-b dark:to-black"></div>
          </div>
        </div>
      </div>

      <div className="mb-16 grid gap-x-10 gap-y-4 md:grid-cols-2 lg:mt-16 xl:grid-cols-3">
        {otherNews.map((news, index) => (
          <NewsLink news={news} key={news.title.replaceAll(" ", "-")}>
            <NewsCard news={news} />
          </NewsLink>
        ))}
      </div>

      {newsSections.map((section) => (
        <NewsSection
          key={section.label}
          label={section.label}
          sections={section.sections}
        />
      ))}

      {/* <NewsSection
        label="markets"
        sections={[
          "Markets",
          "Sector ETFs",
          "ETFs",
          "Cryptocurrency",
          "Options",
          "Bonds",
          "Economics",
        ]}
      /> */}
    </Container>
  );
}

function LatestNews({ news }: { news: News }) {
  return (
    <div className="border-b border-black/20 p-4 dark:border-b-white/20">
      <p className="text-sm font-bold uppercase">
        {moment(news.publishedDate).fromNow()}
      </p>
      <p>{news.title}</p>
    </div>
  );
}
