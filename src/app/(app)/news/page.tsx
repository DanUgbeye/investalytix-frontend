import { Container } from "@/components/container";
import { GeneralNews } from "@/modules/news/types";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

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
    data: GeneralNews[];
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
            <Image src={major.image} alt="" fill className="object-cover" />
            {/* </div> */}

            {/*  */}
            <div className="absolute bottom-0 left-0 right-0 h-fit bg-gradient-to-b from-transparent to-black to-30% p-5 pt-20 text-white/80">
              <Link
                href={major.url}
                target="_blank"
                className="text-3xl font-semibold hover:underline focus:underline"
              >
                {major.title}
              </Link>

              <div className="my-5 h-[0.5px] w-full bg-white/80"></div>

              <Link
                href={minor_major[0].url}
                target="_blank"
                className="font-semibold hover:underline focus:underline"
              >
                {minor_major[0].title}
              </Link>
            </div>
          </div>

          {/* 2 */}
          <div className="flex h-fit justify-between gap-5 lg:flex-col">
            {minor_major.slice(1).map((news) => (
              <Link
                key={news.title.replaceAll(" ", "-")}
                href={news.url}
                target="_blank"
                className="hover:underline focus:underline"
              >
                <div
                  className={`relative aspect-square w-full overflow-hidden`}
                >
                  <Image
                    src={news.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 font-semibold leading-tight">{news.title}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* 3 */}
        <div className="grid-rows-[max-content,1fr] gap-4 lg:grid lg:overflow-hidden">
          <p className="text-3xl font-bold">Latest News</p>
          <div className="relative lg:overflow-hidden">
            <div className="lg:absolute lg:inset-0 lg:overflow-auto">
              {latest.map((news) => (
                <LatestNews news={news} key={news.title.replaceAll(" ", "-")} />
              ))}
            </div>

            <div className="pointer-events-none from-transparent via-transparent via-80% to-white to-100% lg:absolute lg:inset-0 lg:bg-gradient-to-b dark:to-black"></div>
          </div>
        </div>
      </div>

      <div className="grid">
        {otherNews.data.map((news, index) => (
          <INews latest={index === 0} news={news} />
        ))}
      </div>
    </Container>
  );
}

function LatestNews({ news }: { news: GeneralNews }) {
  return (
    <div className="border-b border-black/20 p-4 dark:border-b-white/20">
      <p className="text-sm font-bold uppercase">
        {moment(news.publishedDate).toNow()}
      </p>
      <Link
        href={news.url}
        target="_blank"
        className="hover:underline focus:underline"
      >
        {news.title}
      </Link>
    </div>
  );
}

function INews({
  latest = false,
  news,
}: {
  latest?: boolean;
  news: GeneralNews;
}) {
  return (
    <Link
      href={news.url}
      target="_blank"
      className="grid grid-cols-1 grid-rows-[200px,1fr] gap-5 border-b border-[#DCDCDC] py-4 lg:grid-cols-[max-content,1fr] lg:grid-rows-[auto,auto] lg:py-8"
    >
      <div
        className={`relative h-full max-h-[200px] w-full overflow-hidden lg:w-80 ${latest ? "lg:w-96" : "w-80"}`}
      >
        <Image src={news.image} alt="" fill className="object-cover" />
      </div>
      <div className="">
        <div className="flex flex-wrap items-start justify-between gap-2 xl:gap-5">
          <p className="white-text font-extrabold text-[#020224] lg:text-xl">
            {news.title}
          </p>
          {!latest && (
            <p className="white-text flex flex-nowrap items-center gap-2 text-sm font-medium text-[#565555] lg:text-base">
              <span className="uppercase">{news.site}</span>
              <span className="inline-block h-1 w-1 bg-[#0097F4]"></span>
              <span className="whitespace-nowrap">
                {moment(news.publishedDate).format("Do MMMM, YYYY")}
              </span>
            </p>
          )}
        </div>
        <p className="white-text mt-4 text-sm text-[#4B4646] lg:mt-8 lg:text-base">
         {news.text}
        </p>

        {latest && (
          <p className="white-text mt-8 flex flex-nowrap items-center gap-2 text-sm font-medium text-[#565555] lg:text-base">
            <span className="uppercase">{news.site}</span>
            <span className="inline-block h-1 w-1 bg-[#0097F4]"></span>
            <span className="whitespace-nowrap">
              {moment(news.publishedDate).format("Do MMMM, YYYY")}
            </span>
          </p>
        )}
      </div>
    </Link>
  );
}
