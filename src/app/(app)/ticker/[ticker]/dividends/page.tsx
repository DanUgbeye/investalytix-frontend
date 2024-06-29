import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SearchTickerPageProps } from "../page";
import DividendsScreen from "./screen";

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
      title: `${profile.companyName} (${profile.symbol}) Dividends | Investalytix`,
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

    const [dividends, outlook, ratios] = await Promise.all([
      tickerRepo.getDividendHistory(ticker),
      tickerRepo.getCompanyOutLook(ticker),
      tickerRepo.getRatios(ticker, { period: "annual", limit: 1 }),
    ]);

    return {
      dividends,
      outlook,
      ratio: ratios[0],
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    throw new Error(error.message);
  }
}

interface DividendsPageProps extends SearchTickerPageProps {}

export default async function DividendsPage(props: DividendsPageProps) {
  const {
    params: { ticker },
  } = props;

  const { dividends, outlook, ratio } = await getData(ticker);

  return (
    <DividendsScreen
      ticker={ticker}
      currency={outlook.profile.currency}
      dividends={dividends}
      outlook={outlook}
      ratio={ratio}
    />
  );
}
