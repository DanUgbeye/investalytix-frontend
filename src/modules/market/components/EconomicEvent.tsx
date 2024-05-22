import { GeneralNews } from "@/modules/news/types";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

async function getGeneralNewsData(params?: { limit?: number; page?: number }) {
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

export default async function EconomicEvent() {
  const [general, forex, crypto, stock] = await Promise.all([
    getGeneralNewsData(),
    getForexNewsData(),
    getCryptoNewsData(),
    getStockNewsData(),
  ]);
  return (
    <div>
      <header className="relative mb-4">
        <p className="white-text text-2xl font-bold  text-[#2A3037]">
          Top Economic Event
        </p>

        <div className="absolute h-[2px] w-full bg-gradient-to-r from-[#FB8B1E] from-50% to-[#545454] to-50% dark:to-white/30"></div>
      </header>

      <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-6">
        {[0, 1].map((index) => (
          <>
            <Event news={general.data[index]} key={`general${index}`} />
            <Event news={crypto.data[index]} key={`crypto${index}`} />
            <Event news={forex.data[index]} key={`forex${index}`} />
            <Event news={stock.data[index]} key={`stock${index}`} />
          </>
        ))}
      </div>
    </div>
  );
}

function Event({ news }: { news: GeneralNews }) {
  return (
    <Link href={news.url} target="_blank" className="group flex w-full gap-2">
      <div className="relative h-[110px] w-28 flex-shrink-0 overflow-hidden bg-red-500">
        <Image
          src={news.image}
          alt=""
          fill
          className="object-cover object-center"
        />
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
