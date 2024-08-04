import { serverAPI } from "@/config/server/api";
import { NewsRepository } from "@/modules/news/repository";
import { News } from "@/modules/news/types";
import { TickerRepository } from "@/modules/ticker/repository";
import { CompanyProfile } from "@/modules/ticker/types";
import { Result } from "@/types";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ErrorScreen from "../error-screen";
import { SearchTickerPageProps } from "../page";
import TickerNewsScreen from "./screen";
import { newsUtil } from "@/modules/news/utils";

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

export type TickerNewsPageData = {
  profile: CompanyProfile;
  news: News[];
};

async function getData(ticker: string): Promise<Result<TickerNewsPageData>> {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    const newsRepo = new NewsRepository(serverAPI);

    const [profile, bezingaNews, fmpNews] = await Promise.all([
      tickerRepo.getCompanyProfile(ticker),
      newsRepo.getBezingaNews({ tickers: [ticker], pageSize: 15 }),
      newsRepo.getFMPNews({ tickers: [ticker], limit: 15 }),
    ]);

    return {
      data: {
        profile,
        news: newsUtil.sortNews(
          [...bezingaNews, ...fmpNews].filter(
            (news) =>
              !news.title.toLowerCase().includes("aljazeera") ||
              !news.title.toLowerCase().includes("al jazeera")
          ),
          "desc"
        ),
      },
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    return { error };
  }
}

interface TickerNewsPageProps extends SearchTickerPageProps {}

export default async function TickerNewsPage(props: TickerNewsPageProps) {
  const {
    params: { ticker },
  } = props;

  const { data, error } = await getData(ticker);

  if (error) {
    return <ErrorScreen error={{ message: error.message }} />;
  }

  return <TickerNewsScreen ticker={ticker} {...data} />;
}
