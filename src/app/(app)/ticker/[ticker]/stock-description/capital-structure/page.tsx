import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { errorUtils } from "@/utils/error.utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
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
    const outlook = await tickerRepo.getCompanyOutLook(ticker);

    return {
      title: `${outlook.profile.companyName} (${outlook.profile.symbol}) Stock Description - Capital Structure | Investalytix`,
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

    const outlook = await tickerRepo.getCompanyOutLook(ticker);

    return {
      timeStamp: new Date(),
      outlook,
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    throw error;
  }
}

interface CapitalStructurePageProps extends SearchTickerPageProps {}

export default async function CapitalStructurePage(
  props: CapitalStructurePageProps
) {
  const {
    params: { ticker },
  } = props;

  const { outlook } = await getData(ticker);

  const data = [
    {
      label: "Market Cap",
      value: outlook.profile.mktCap,
      fill: "#F94144",
      currency: outlook.financialsAnnual.balance[0]?.reportedCurrency ?? "USD",
    },
    {
      label: "ST Debt",
      value: outlook.financialsAnnual.balance[0]?.shortTermDebt ?? 0,
      fill: "#F8961E",
      currency: outlook.financialsAnnual.balance[0]?.reportedCurrency ?? "USD",
    },
    {
      label: "LT Debt",
      value: outlook.financialsAnnual.balance[0]?.longTermDebt ?? 0,
      fill: "#F3722C",
      currency: outlook.financialsAnnual.balance[0]?.reportedCurrency ?? "USD",
    },
    {
      label: "Pref. Equity",
      value: outlook.financialsAnnual.balance[0]?.preferredStock ?? 0,
      fill: "#F9C74F",
      currency: outlook.financialsAnnual.balance[0]?.reportedCurrency ?? "USD",
    },
  ];

  return <CapitalStructureScreen ticker={ticker} capitalStructure={data} />;
}
