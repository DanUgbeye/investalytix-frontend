import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SearchTickerPageProps } from "../page";
import NewsScreen from "./screen";

export const metadata: Metadata = {
  title: "Investalytix",
};

async function getData(ticker: string) {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    const [outlook, news] = await Promise.all([
      tickerRepo.getCompanyOutLook(ticker),
      tickerRepo.getNews(ticker, { limit: 15 }),
    ]);

    return {
      outlook,
      news,
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    throw new Error(error.message);
  }
}

interface NewsPageProps extends SearchTickerPageProps {}

export default async function NewsPage(props: NewsPageProps) {
  const {
    params: { ticker },
  } = props;

  const { news, outlook } = await getData(ticker);

  metadata.title = `${outlook.profile.companyName} (${ticker}) News | Investalytix`;

  return <NewsScreen ticker={ticker} news={news} />;
}
