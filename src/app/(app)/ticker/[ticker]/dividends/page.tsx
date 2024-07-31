import HeaderWithUnderline from "@/components/heading";
import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { CompanyOutlook, Dividend, Ratio } from "@/modules/ticker/types";
import { Result } from "@/types";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { TbDatabaseDollar, TbSlash } from "react-icons/tb";
import ErrorScreen from "../error-screen";
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

export type DividendsPageData = {
  outlook: CompanyOutlook;
  dividends: Dividend[];
  currency?: string;
  ratio?: Ratio;
};

async function getData(ticker: string): Promise<Result<DividendsPageData>> {
  try {
    const tickerRepo = new TickerRepository(serverAPI);

    const [dividends, outlook, ratios] = await Promise.all([
      tickerRepo.getDividendHistory(ticker),
      tickerRepo.getCompanyOutLook(ticker),
      tickerRepo.getRatios(ticker, { period: "annual", limit: 1 }),
    ]);

    return {
      data: {
        dividends,
        outlook,
        currency: outlook.profile.currency || undefined,
        ratio: ratios[0],
      },
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    return { error };
  }
}

interface DividendsPageProps extends SearchTickerPageProps {}

export default async function DividendsPage(props: DividendsPageProps) {
  const {
    params: { ticker },
  } = props;

  const { data, error } = await getData(ticker);

  if (error) {
    return <ErrorScreen error={{ message: error.message }} />;
  }

  if (data.dividends.length === 0) {
    return (
      <main>
        <HeaderWithUnderline>
          {data.outlook.profile.companyName} Dividends Overview
        </HeaderWithUnderline>

        <section className="flex h-full flex-col gap-6 py-10">
          <div className="relative mx-auto grid aspect-square size-32 grid-cols-1 grid-rows-1 items-center text-main-gray-800 dark:text-main-gray-300">
            <TbDatabaseDollar className="size-32 stroke-1" />
            <TbSlash className="absolute size-48 translate-x-[-15%] stroke-[0.8]" />
          </div>

          <div className="">
            <h1 className="w-full text-center text-lg font-bold sm:text-2xl">
              {data.outlook.profile.companyName} does not pay dividends
            </h1>

            <p className="w-full text-center text-xs sm:text-sm font-bold text-main-gray-400">
              {data.outlook.profile.companyName} has not paid dividends in the
              past
            </p>
          </div>
        </section>
      </main>
    );
  }

  return <DividendsScreen ticker={ticker} {...data} />;
}
