import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SearchTickerPageProps } from "../../page";
import HoldersScreen from "./screen";
import { InstitutionalHolder, MutualFundHolder } from "@/modules/ticker/types";
import { Result } from "@/types";
import ErrorScreen from "../../error-screen";

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
      title: `${profile.companyName} (${profile.symbol}) Stock Description - Holders | Investalytix`,
    };
  } catch (error: any) {
    return {
      title: "Investalytix",
    };
  }
}

export type HoldersPageData = {
  institutionalHolders: InstitutionalHolder[];
  mutualFundHolders: MutualFundHolder[];
};

async function getData(ticker: string): Promise<Result<HoldersPageData>> {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    const [institutionalHolders, mutualFundHolders] = await Promise.all([
      tickerRepo.getInstitutionalHolders(ticker),
      tickerRepo.getMutualFundHolders(ticker),
    ]);

    return {
      data: { institutionalHolders, mutualFundHolders },
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    return { error };
  }
}

interface HoldersPageProps extends SearchTickerPageProps {}

export default async function HoldersPage(props: HoldersPageProps) {
  const {
    params: { ticker },
  } = props;

  const { data, error } = await getData(ticker);

  if (error) {
    return <ErrorScreen error={{ message: error.message }} />;
  }

  return <HoldersScreen ticker={ticker} {...data} />;
}
