import NewsCard from "@/modules/news/components/news-card";
import NewsLink from "@/modules/news/components/news-link";
import { GeneralNews, News } from "@/modules/news/types";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import MarketHeading from "./MarketHeading";

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
    data: News[];
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
    data: News[];
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
    data: News[];
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
    data: News[];
  }>;
}

export default async function EconomicEvent() {
  // await getGeneralNewsData();
  const [general, forex, crypto, stock] = await Promise.all([
    getGeneralNewsData(),
    getForexNewsData(),
    getCryptoNewsData(),
    getStockNewsData(),
  ]);
  return (
    <div>
      <MarketHeading label="Top Economic Event" />

      <div className="grid gap-6 md:grid-cols-2">
        {[0, 1].map((index) => (
          <>
            <NewsLink news={general.data[index]}>
              <NewsCard news={general.data[index]}></NewsCard>
            </NewsLink>
            <NewsLink news={crypto.data[index]}>
              <NewsCard news={crypto.data[index]}></NewsCard>
            </NewsLink>
            <NewsLink news={forex.data[index]}>
              <NewsCard news={forex.data[index]}></NewsCard>
            </NewsLink>
            <NewsLink news={stock.data[index]}>
              <NewsCard news={stock.data[index]}></NewsCard>
            </NewsLink>
          </>
        ))}
      </div>
    </div>
  );
}
