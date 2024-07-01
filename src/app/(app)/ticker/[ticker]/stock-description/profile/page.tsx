import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { CompanyOutlook } from "@/modules/ticker/types";
import { Quote, Result } from "@/types";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ErrorScreen from "../../error-screen";
import { SearchTickerPageProps } from "../../page";
import ProfileScreen from "./screen";

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
      title: `${profile.companyName} (${profile.symbol}) Stock Description - Profile | Investalytix`,
    };
  } catch (error: any) {
    return {
      title: "Investalytix",
    };
  }
}

export type ProfilePageData = {
  outlook: CompanyOutlook;
  quote: Quote;
};

async function getTickerData(ticker: string): Promise<Result<ProfilePageData>> {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    const [quote, outlook] = await Promise.all([
      tickerRepo.getQuote(ticker),
      tickerRepo.getCompanyOutLook(ticker),
    ]);

    return {
      data: { outlook, quote },
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    return { error };
  }
}

interface ProfilePageProps extends SearchTickerPageProps {}

export default async function ProfilePage(props: ProfilePageProps) {
  const {
    params: { ticker },
  } = props;

  const { data, error } = await getTickerData(ticker);

  if (error) {
    return <ErrorScreen error={{ message: error.message }} />;
  }

  return <ProfileScreen ticker={ticker} {...data} />;
}
