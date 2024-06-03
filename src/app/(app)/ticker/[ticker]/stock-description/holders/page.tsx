import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SearchTickerPageProps } from "../../page";
import HoldersScreen from "./screen";

export async function generateMetadata(props: {
  params: { ticker: string };
}): Promise<Metadata> {
  try {
    const {
      params: { ticker },
    } = props;

    const tickerRepo = new TickerRepository(serverAPI);
    const outlook = await tickerRepo.getCompanyOutLook(ticker);

    return {
      title: `${outlook.profile.companyName} (${ticker}) Stock Description - Holders | Investalytix`,
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
    const [outlook, institutionalHolders, mutualFundHolders] =
      await Promise.all([
        tickerRepo.getCompanyOutLook(ticker),
        tickerRepo.getInstitutionalHolders(ticker),
        tickerRepo.getMutualFundHolders(ticker),
      ]);

    return {
      outlook,
      institutionalHolders,
      mutualFundHolders,
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    throw new Error(error.message);
  }
}

interface HoldersPageProps extends SearchTickerPageProps {}

export default async function HoldersPage(props: HoldersPageProps) {
  const {
    params: { ticker },
  } = props;

  const { outlook, institutionalHolders, mutualFundHolders } =
    await getData(ticker);

  return (
    <HoldersScreen
      ticker={ticker}
      institutionalHolders={institutionalHolders}
      mutualFundHolders={mutualFundHolders}
    />
  );
}
