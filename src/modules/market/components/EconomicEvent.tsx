"use client";
import NewsCard from "@/modules/news/components/news-card";
import NewsLink from "@/modules/news/components/news-link";
import { GeneralNews, News } from "@/modules/news/types";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import MarketHeading from "./MarketHeading";
import useFetcher from "@/hooks/useFetcher";
import { Fragment, useEffect } from "react";

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

export default function EconomicEvent() {
  const { wrapper, data, loading } = useFetcher<{
    general: {
      message: String;
      status: number;
      data: News[];
    };
    forex: {
      message: String;
      status: number;
      data: News[];
    };
    crypto: {
      message: String;
      status: number;
      data: News[];
    };
    stock: {
      message: String;
      status: number;
      data: News[];
    };
  }>(null);

  useEffect(() => {
    wrapper(async () => {
      const [general, forex, crypto, stock] = await Promise.all([
        getGeneralNewsData(),
        getForexNewsData(),
        getCryptoNewsData(),
        getStockNewsData(),
      ]);

      return { general, forex, crypto, stock };
    });
  }, []);

  if (!data) return null;
  return (
    <div>
      <MarketHeading label="Latest news" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[0, 1].map((index) => (
          <Fragment key={index}>
            <NewsLink news={data.general.data[index]}>
              <NewsCard news={data.general.data[index]}></NewsCard>
            </NewsLink>
            <NewsLink news={data.crypto.data[index]}>
              <NewsCard news={data.crypto.data[index]}></NewsCard>
            </NewsLink>
            <NewsLink news={data.forex.data[index]}>
              <NewsCard news={data.forex.data[index]}></NewsCard>
            </NewsLink>
            <NewsLink news={data.stock.data[index]}>
              <NewsCard news={data.stock.data[index]}></NewsCard>
            </NewsLink>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
