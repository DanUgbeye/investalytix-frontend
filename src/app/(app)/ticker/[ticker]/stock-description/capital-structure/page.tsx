import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { Result } from "@/types";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ErrorScreen from "../../error-screen";
import { SearchTickerPageProps } from "../../page";
import CapitalStructureScreen from "./screen";

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
      title: `${profile.companyName} (${profile.symbol}) Stock Description - Capital Structure | Investalytix`,
    };
  } catch (error: any) {
    return {
      title: "Investalytix",
    };
  }
}

export type CapitalStructurePageData = {
  capitalStructure: {
    label: string;
    value?: number;
    fill: string;
    currency: string;
  }[];
  currency: string;
};

async function getData(
  ticker: string
): Promise<Result<CapitalStructurePageData, Error>> {
  try {
    const tickerRepo = new TickerRepository(serverAPI);
    const outlook = await tickerRepo.getCompanyOutLook(ticker);

    return {
      data: {
        capitalStructure: [
          {
            label: "Market Cap",
            value: outlook.profile.mktCap || undefined,
            fill: "#4489FF",
            currency:
              outlook.financialsAnnual.balance[0]?.reportedCurrency ?? "USD",
          },
          {
            label: "ST Debt",
            value: outlook.financialsAnnual.balance[0]?.shortTermDebt ?? 0,
            fill: "#EB4335",
            currency:
              outlook.financialsAnnual.balance[0]?.reportedCurrency ?? "USD",
          },
          {
            label: "LT Debt",
            value: outlook.financialsAnnual.balance[0]?.longTermDebt ?? 0,
            fill: "#F57F17",
            currency:
              outlook.financialsAnnual.balance[0]?.reportedCurrency ?? "USD",
          },
          {
            label: "Pref. Equity",
            value: outlook.financialsAnnual.balance[0]?.preferredStock ?? 0,
            fill: "#34A853",
            currency:
              outlook.financialsAnnual.balance[0]?.reportedCurrency ?? "USD",
          },
        ],
        currency: outlook.profile.currency,
      },
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    return { error };
  }
}

interface CapitalStructurePageProps extends SearchTickerPageProps {}

export default async function CapitalStructurePage(
  props: CapitalStructurePageProps
) {
  const {
    params: { ticker },
  } = props;

  const { data, error } = await getData(ticker);

  if (error) {
    return <ErrorScreen error={{ message: error.message }} />;
  }

  return <CapitalStructureScreen ticker={ticker} {...data} />;
}
