"use client";

import { dateUtils } from "@/utils/date.utils";
import { format } from "date-fns";
import { useMemo } from "react";
import {
  generateCashFlowAnalysisData,
  generateGrowthPotentialData,
  generateIssueData,
  generatePerShareData,
  generateProfitabilityData,
  generateStructureData,
} from "./generate-ratio-data";
import { RatiosPageData } from "./page";
import RatioTable from "./ratio-table";

interface RatiosScreenProps extends RatiosPageData {
  ticker: string;
}

export default function RatiosScreen(props: RatiosScreenProps) {
  const {
    ticker,
    outlook,
    quote,
    ratio,
    financialGrowth,
    incomeGrowth,
    cashFlowGrowth,
    balanceSheetGrowth,
  } = props;

  const issueData = useMemo(
    () =>
      generateIssueData({
        quote,
        currency: outlook.profile.currency || "",
        ratioTTM: outlook.ratios[0],
        ratio,
        income: outlook.financialsAnnual.income[0],
        balance: outlook.financialsAnnual.balance[0],
      }),
    []
  );

  const perShareData = useMemo(
    () =>
      generatePerShareData({
        quote,
        currency: outlook.profile.currency || "",
        ratioTTM: outlook.ratios[0],
        ratio,
        income: outlook.financialsAnnual.income[0],
      }),
    []
  );

  const cashFlowAnalysis = useMemo(
    () =>
      generateCashFlowAnalysisData({
        currency: outlook.profile.currency || "",
        ratio,
        income: outlook.financialsAnnual.income[0],
        cash: outlook.financialsAnnual.cash[0],
      }),
    []
  );

  const growthPotential = useMemo(
    () =>
      generateGrowthPotentialData({
        currency: outlook.profile.currency || "",
        financialGrowth,
        incomeGrowth,
        cashFlowGrowth,
        balanceSheetGrowth,
      }),
    []
  );

  const profitability = useMemo(
    () =>
      generateProfitabilityData({
        currency: outlook.profile.currency || "",
        ratio,
        income: outlook.financialsAnnual.income[0],
      }),
    []
  );

  const structure = useMemo(
    () =>
      generateStructureData({
        quote,
        currency: outlook.profile.currency || "",
        ratioTTM: outlook.ratios[0],
        ratio,
        income: outlook.financialsAnnual.income[0],
        cash: outlook.financialsAnnual.cash[0],
        balance: outlook.financialsAnnual.balance[0],
      }),
    []
  );

  const fiscalData = useMemo(() => {
    let fiscalYearEnd =
      outlook.financialsAnnual.income.length > 0
        ? format(new Date(outlook.financialsAnnual.income[0].date), "MM/yyyy")
        : "-";

    let lastQuarterEnd = "-";
    if (outlook.financialsQuarter.income.length > 0) {
      const quarterDate = new Date(outlook.financialsQuarter.income[0].date);
      const { quarter, year } = dateUtils.getYearAndQuarter(quarterDate);

      lastQuarterEnd = `${format(quarterDate, "MM/yyyy")} Q${quarter}`;
    }

    return {
      fiscalYearEnd,
      lastQuarterEnd,
      currency: outlook.profile.currency,
    };
  }, [outlook]);

  return (
    <section className="space-y-8 pb-12">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] gap-4 lg:divide-inherit">
        <div className="flex flex-col py-2 lg:w-full lg:justify-center lg:px-3">
          <span className="text-xs">Fiscal Year End</span>
          <span className="font-bold">{fiscalData.fiscalYearEnd}</span>
        </div>

        <div className="flex flex-col py-2 lg:w-full lg:justify-center lg:px-3">
          <span className="text-xs">Last Quarter End</span>
          <span className="font-bold">{fiscalData.lastQuarterEnd}</span>
        </div>

        <div className="flex flex-col py-2 lg:w-full lg:justify-center lg:px-3">
          <span className="text-xs">Currency</span>
          <span className="font-bold">{fiscalData.currency}</span>
        </div>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 sm:justify-center xl:grid-cols-3">
        <RatioTable className=" " ratio={issueData} />

        <RatioTable className=" " ratio={perShareData} />

        <RatioTable className=" " ratio={cashFlowAnalysis} />

        <RatioTable className=" " ratio={growthPotential} />

        <RatioTable className=" " ratio={profitability} />

        <RatioTable className=" " ratio={structure} />
      </div>
    </section>
  );
}
