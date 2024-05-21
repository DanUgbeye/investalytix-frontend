import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";
import TickerLayout from "./ticker-layout";
import { timeStamp } from "console";

export const metadata: Metadata = {
  title: "Search ticker",
};

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
    if (
      error instanceof Error &&
      error.message.toLowerCase().includes("not found")
    ) {
      metadata.title = "Ticker not found";
    }
    return notFound();
  }
}

export interface TickerLayoutProps extends PropsWithChildren {
  params: {
    ticker: string;
  };
}

export default async function Layout(props: TickerLayoutProps) {
  const {
    params: { ticker },
    children,
  } = props;

  const { quote, outlook } = await getTickerData(ticker);

  return (
    <TickerLayout ticker={ticker} quote={quote} outlook={outlook}>
      {children}
    </TickerLayout>
  );
}
