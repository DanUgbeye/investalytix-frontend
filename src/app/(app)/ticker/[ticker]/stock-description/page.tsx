import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SearchTickerPageProps } from "../page";
import SummaryScreen from "./screen";
import { Quote, Result } from "@/types";
import { CompanyOutlook } from "@/modules/ticker/types";
import ErrorScreen from "../error-screen";

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
      title: `${profile.companyName} (${profile.symbol}) Stock Description - Summary | Investalytix`,
    };
  } catch (error: any) {
    return {
      title: "Investalytix",
    };
  }
}

export type SummaryPageData = {
  quote: Quote;
  outlook: CompanyOutlook;
  currency?: string;
};

async function getTickerData(
  ticker: string
): Promise<Result<SummaryPageData, Error>> {
  try {
    const tickerRepo = new TickerRepository(serverAPI);

    const [quote, outlook] = await Promise.all([
      tickerRepo.getQuote(ticker),
      tickerRepo.getCompanyOutLook(ticker),
    ]);

    return {
      data: { quote, outlook, currency: outlook.profile.currency || undefined },
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    return { error };
  }
}

interface SummaryPageProps extends SearchTickerPageProps {}

async function SummaryPage(props: SummaryPageProps) {
  const {
    params: { ticker },
  } = props;

  const { data, error } = await getTickerData(ticker);

  if (error) {
    return <ErrorScreen error={{ message: error.message }} />;
  }

  return <SummaryScreen ticker={ticker} {...data} />;
}

export default SummaryPage;
