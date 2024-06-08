import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SearchTickerPageProps } from "../page";
import NewsScreen from "./screen";

export async function generateMetadata(props: {
  params: { ticker: string };
}): Promise<Metadata> {
  try {
    const {
      params: { ticker },
    } = props;

    const tickerRepo = new TickerRepository(serverAPI);
    const profile = await tickerRepo.getCompanyProfile(ticker);

    return {
      title: `${profile.companyName} (${profile.symbol}) News | Investalytix`,
    };
  } catch (error: any) {
    return {
      title: "Investalytix",
    };
  }
}

async function getData(ticker: string) {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    const [profile, news] = await Promise.all([
      tickerRepo.getCompanyProfile(ticker),
      tickerRepo.getNews(ticker, { limit: 15 }),
    ]);

    return {
      profile,
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

  const { news, profile } = await getData(ticker);

  return (
    <NewsScreen
      ticker={ticker}
      news={news.filter(
        (news) =>
          !news.title.toLowerCase().includes("aljazeera") ||
          !news.title.toLowerCase().includes("al jazeera")
      )}
      profile={profile}
    />
  );
}
