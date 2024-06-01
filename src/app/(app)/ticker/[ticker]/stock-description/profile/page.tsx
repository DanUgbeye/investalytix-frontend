import { Metadata } from "next";
import React from "react";
import ProfileScreen from "./screen";
import { SearchTickerPageProps } from "../../page";
import { TickerRepository } from "@/modules/ticker/repository";
import { serverAPI } from "@/config/server/api";
import { errorUtils } from "@/utils/error.utils";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Investalytix",
};

async function getTickerData(ticker: string) {
  try {
    const tickerRepo = new TickerRepository(serverAPI);

    const outlook = await tickerRepo.getCompanyOutLook(ticker);

    return {
      outlook,
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

  const { outlook } = await getTickerData(ticker);

  metadata.title = `${outlook.profile.companyName} (${ticker}) Stock Description - Profile | Investalytix`;

  return <ProfileScreen ticker={ticker} outlook={outlook} />;
}
