import NewsCard from "@/modules/news/components/news-card";
import NewsLink from "@/modules/news/components/news-link";
import { News } from "@/modules/news/types";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import MarketHeading from "../MarketHeading";
import { NewsRepository } from "@/modules/news/repository";
import { serverAPI } from "@/config/server/api";

async function getForexNewsData(params?: { limit?: number; page?: number }) {
  try {
    const { limit, page } = params ?? {};
    const newsRepo = new NewsRepository(serverAPI);
    const res = await newsRepo.getFMPForexNews({ page, limit });

    return { data: res };
  } catch (error: any) {
    throw new Error("Failed to fetch data");
  }
}

async function getCryptoNewsData(params?: { limit?: number; page?: number }) {
  try {
    const { limit, page } = params ?? {};
    const newsRepo = new NewsRepository(serverAPI);
    const res = await newsRepo.getFMPCryptoNews({ page, limit });

    return { data: res };
  } catch (error: any) {
    throw new Error("Failed to fetch data");
  }
}
async function getStockNewsData(params?: { limit?: number; page?: number }) {
  try {
    const { limit, page } = params ?? {};
    const newsRepo = new NewsRepository(serverAPI);
    const res = await newsRepo.getFMPNews({ page, limit });

    return { data: res };
  } catch (error: any) {
    throw new Error("Failed to fetch data");
  }
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
