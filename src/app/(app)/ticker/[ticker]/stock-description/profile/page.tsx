import { Metadata } from "next";
import React from "react";
import ProfileScreen from "./screen";
import { SearchTickerPageProps } from "../../page";
import { TickerRepository } from "@/modules/ticker/repository";
import { serverAPI } from "@/config/server/api";
import { errorUtils } from "@/utils/error.utils";
import { notFound } from "next/navigation";

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

async function getTickerData(ticker: string) {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    const [quote, outlook] = await Promise.all([
      tickerRepo.getQuote(ticker),
      tickerRepo.getCompanyOutLook(ticker),
    ]);

    return {
      outlook,
      quote,
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    throw new Error(error.message);
  }
}

interface ProfilePageProps extends SearchTickerPageProps {}

export default async function ProfilePage(props: ProfilePageProps) {
  const {
    params: { ticker },
  } = props;

  const { outlook, quote } = await getTickerData(ticker);

  return <ProfileScreen ticker={ticker} outlook={outlook} quote={quote} />;
}
