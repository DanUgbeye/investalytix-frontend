import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";
import TickerLayout from "./ticker-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search ticker",
};

async function getTickerData(ticker: string) {
  const tickerRepo = new TickerRepository(serverAPI);

  const [quote, outlook] = await Promise.all([
    tickerRepo.getQuote(ticker),
    tickerRepo.getCompanyOutLook(ticker),
  ]);

  return {
    quote,
    outlook,
  };
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

  try {
    const res = await getTickerData(ticker);

    return (
      <TickerLayout ticker={ticker} data={res}>
        {children}
      </TickerLayout>
    );
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
