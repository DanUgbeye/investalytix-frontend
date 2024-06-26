import { serverAPI } from "@/config/server/api";
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
    const [profile, news] = await Promise.all([
      tickerRepo.getCompanyProfile(ticker),
      tickerRepo.getNews(ticker, { limit: 15 }),
    ]);

    return {
      data: {
        profile,
        news: news.filter(
          (news) =>
            !news.title.toLowerCase().includes("aljazeera") ||
            !news.title.toLowerCase().includes("al jazeera")
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
