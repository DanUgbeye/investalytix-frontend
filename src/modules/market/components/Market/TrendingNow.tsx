import { GeneralNews } from "@/modules/news/types";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

async function getForexNewsData(params?: { limit?: number; page?: number }) {
  const { limit, page } = params ?? {};

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/news/forex?limit=${limit}&page=${page}`
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
async function getCryptoNewsData(params?: { limit?: number; page?: number }) {
  const { limit, page } = params ?? {};

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/news/crypto?limit=${limit}&page=${page}`
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
async function getStockNewsData(params?: { limit?: number; page?: number }) {
  const { limit, page } = params ?? {};

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/news/stock?limit=${limit}&page=${page}`
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

export default async function TrendingNow() {
  const [forex, crypto, stock] = await Promise.all([
    getForexNewsData(),
    getCryptoNewsData(),
    getStockNewsData(),
  ]);

  return (
    <section className="mt-16 overflow-hidden">
      <header className="pb-10">
        <h2 className="white-text border-l-[6px] border-l-primary-base pl-5 text-3xl font-extrabold">
          TRENDING NOW
        </h2>
      </header>

      <div className="flex flex-col md:flex-col gap-5">
        <MarketEvent news={forex.data[5]}/>
        <MarketEvent news={crypto.data[5]}/>
        <MarketEvent news={stock.data[5]}/>
      </div>
    </section>
  );
}

function MarketEvent({ news }: { news: GeneralNews }) {
  return (
    <Link href={news.url} target="_blank" className="group flex w-full gap-2">
      <div className="relative h-[110px] w-28 flex-shrink-0 overflow-hidden bg-red-500">
        <Image src={news.image} alt="" fill className="object-cover" />
      </div>

      <div className="">
        <p className="white-text text-sm font-bold text-[#000000] group-hover:underline group-focus:underline">
          {news.title}
        </p>
        <p className="white-text mt-8 flex flex-wrap items-center gap-1 text-sm text-[#565555]">
          <span className="uppercase">{news.site}</span>
          <span className="inline-block h-1 w-1 bg-[#0097F4]"></span>
          <span className="whitespace-nowrap">
            {moment(news.publishedDate).format("Do MMMM, YYYY")}
          </span>
        </p>
      </div>
    </Link>
  );
}
