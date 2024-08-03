import { Container } from "@/components/container";
import NewsCard from "@/modules/news/components/news-card";
import NewsLink from "@/modules/news/components/news-link";
import { News } from "@/modules/news/types";
import moment from "moment";
import Image from "next/image";

async function getData(params?: { limit?: number; page?: number }) {
  const { limit, page } = params ?? {};

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

export default async function NewsPage() {
  const data = await getData();
  const otherNews = await getData({ page: 2 });

  const [major, ...others] = data.data;
  const minor_major = others.slice(1, 4);
  const latest = others.slice(4);

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
        {otherNews.data.map((news, index) => (
          <NewsLink news={news} key={news.title.replaceAll(" ", "-")}>
            <NewsCard news={news} />
          </NewsLink>
        ))}
      </div>
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
