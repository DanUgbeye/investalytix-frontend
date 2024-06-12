import { Metadata } from "next";
import React from "react";
import SECFilingsScreen from "./screen";
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
      title: `${profile.companyName} (${profile.symbol}) Financials - SEC Filings | Investalytix`,
    };
  } catch (error: any) {
    return {
      title: "Investalytix",
    };
  }
}

async function getData(
  ticker: string,
  filters?: { type?: string; page?: number; limit?: number }
) {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    const [outlook, SECFilings] = await Promise.all([
      tickerRepo.getCompanyOutLook(ticker),
      tickerRepo.getSECFilings(ticker, {
        page: filters?.page || 1,
        limit: filters?.limit || 50,
        type: filters?.type,
      }),
    ]);

    return {
      outlook,
      SECFilings,
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    throw new Error(error.message);
  }
}

interface SECFilingsPageProps extends SearchTickerPageProps {
  searchParams: {
    type?: string;
    page?: number;
    limit?: number;
  };
}

export default async function SECFilingsPage(props: SECFilingsPageProps) {
  const {
    params: { ticker },
    searchParams: { type, limit, page },
  } = props;

  let filters: {
    type?: string;
    page?: number;
    limit?: number;
  } = {};

  if (type) {
    filters.type = type;
  }

  if (page && Number.isSafeInteger(Number(page))) {
    filters.page = Number(page);
  }

  if (limit && Number.isSafeInteger(Number(limit))) {
    filters.limit = Number(limit);
  }

  const { SECFilings } = await getData(ticker, filters);

  return (
    <SECFilingsScreen
      ticker={ticker}
      SECFilings={SECFilings}
      filters={filters}
    />
  );
}
