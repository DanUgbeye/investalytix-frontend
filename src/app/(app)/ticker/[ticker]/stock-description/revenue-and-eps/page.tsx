import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { SearchTickerPageProps } from "../../page";
import RevenueAndEPSScreen from "./screen";

async function getData(ticker: string) {
  try {
    const tickerRepo = new TickerRepository(serverAPI);

    let [quote, earnings] = await Promise.all([
      tickerRepo.getQuote(ticker),
      tickerRepo.getEarningsHistory(ticker),
    ]);

    let isAuthenticated = cookies().has("auth");
    let currentYr = new Date().getFullYear();

    if (!isAuthenticated) {
      earnings = earnings.filter(
        (earning) => currentYr - earning.date.getFullYear() <= 10
      );
    }

    return { quote, earnings, timeStamp: new Date() };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    throw error;
  }
}

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface RevenueAndEPSPageProps extends SearchTickerPageProps {}

export default async function RevenueAndEPSPage(props: RevenueAndEPSPageProps) {
  const {
    params: { ticker },
  } = props;

  const { quote, earnings } = await getData(ticker);

  metadata.title = `${quote.name} (${ticker}) Stock Description - Revenue and EPS | Investalytix`;

  return (
    <RevenueAndEPSScreen ticker={ticker} quote={quote} earnings={earnings} />
  );
}
