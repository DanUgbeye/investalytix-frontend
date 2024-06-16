import NewsCard from "@/modules/news/components/news-card";
import NewsLink from "@/modules/news/components/news-link";
import { News } from "@/modules/news/types";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import MarketHeading from "../MarketHeading";

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

export default async function TrendingNow() {
  const [forex, crypto, stock] = await Promise.all([
    getForexNewsData(),
    getCryptoNewsData(),
    getStockNewsData(),
  ]);

  return (
    <section className="overflow-hidden">
      <MarketHeading label="trending now" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NewsLink news={forex.data[5]}>
          <NewsCard news={forex.data[5]}></NewsCard>
        </NewsLink>
        <NewsLink news={crypto.data[5]}>
          <NewsCard news={crypto.data[5]}></NewsCard>
        </NewsLink>
        <NewsLink news={stock.data[5]}>
          <NewsCard news={stock.data[5]}></NewsCard>
        </NewsLink>
      </div>
    </section>
  );
}
