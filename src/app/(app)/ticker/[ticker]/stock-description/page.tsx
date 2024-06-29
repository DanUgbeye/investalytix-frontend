import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SearchTickerPageProps } from "../page";
import SummaryScreen from "./screen";

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

async function getTickerData(ticker: string) {
  try {
    const tickerRepo = new TickerRepository(serverAPI);

    const [quote, outlook] = await Promise.all([
      tickerRepo.getQuote(ticker),
      tickerRepo.getCompanyOutLook(ticker),
    ]);

    return {
      timeStamp: new Date(),
      quote,
      outlook,
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    throw new Error(error.message);
  }
}

interface SummaryPageProps extends SearchTickerPageProps {}

async function SummaryPage(props: SummaryPageProps) {
  const {
    params: { ticker },
  } = props;

  const { quote, outlook } = await getTickerData(ticker);

  return (
    <SummaryScreen
      ticker={ticker}
      quote={quote}
      outlook={outlook}
      currency={outlook.profile.currency}
    />
  );
}

export default SummaryPage;
