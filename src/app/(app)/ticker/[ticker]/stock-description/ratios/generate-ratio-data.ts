import {
  BalanceSheetStatement,
  CashFlowStatement,
  IncomeStatement,
  Ratio,
  RatioTTM,
} from "@/modules/ticker/types";
import { Quote } from "@/types";
import appUtils from "@/utils/app-util";

export function generateIssueData(data: {
  quote: Quote;
  ratio?: Ratio;
  ratioTTM?: RatioTTM;
  currency: string;
  income: IncomeStatement;
  cash: CashFlowStatement;
  balance: BalanceSheetStatement;
}) {
  const { currency, ratio, ratioTTM, quote, income } = data;

  return {
    name: "Issue Data",
    fields: [
      {
        label: "Last Price",
        value: appUtils.formatNumber(quote.price, { currency }),
      },
      {
        label: "P/E",
        value: appUtils.formatNumber(quote.pe, { style: "decimal" }),
      },
      {
        label: "Dividend Yield TTM",
        value: ratioTTM?.dividendYielPercentageTTM
          ? `${appUtils.formatNumber(
              ratioTTM.dividendYielPercentageTTM || undefined,
              { style: "decimal" }
            )}${ratioTTM.dividendYielPercentageTTM && "%"}`
          : "-",
      },
      {
        label: "P/B",
        value: appUtils.formatNumber(ratio?.priceToBookRatio, {
          style: "decimal",
        }),
      },
      {
        label: "P/S",
        value: appUtils.formatNumber(ratio?.priceToSalesRatio, {
          style: "decimal",
        }),
      },
      {
        label: "Enterprise Value / EBITDA",
        value: ratio
          ? appUtils.formatNumber(
              (ratio.enterpriseValueMultiple || 0) / (income.ebitda || 0),
              {
                style: "decimal",
              }
            )
          : "-",
      },
      {
        label: "Market Cap",
        value: appUtils.formatNumber(quote.marketCap, {
          currency,
          notation: "compact",
        }),
      },
      {
        label: "Enterprise Value",
        value: appUtils.formatNumber(ratio?.enterpriseValueMultiple, {
          style: "decimal",
        }),
      },
    ],
  };
}

export function generatePerShareData(data: {
  quote: Quote;
  ratio?: Ratio;
  ratioTTM?: RatioTTM;
  currency: string;
  income: IncomeStatement;
  cash: CashFlowStatement;
  balance: BalanceSheetStatement;
}) {
  const { currency, ratio, ratioTTM, quote, income } = data;

  return {
    name: "Per Share Data",
    fields: [
      {
        label: "EPS",
        value: appUtils.formatNumber(income?.eps, { currency }),
      },
      {
        label: "Dividends Per Share (DPS)",
        value: "0.94",
      },
      {
        label: "Book Value Per Share",
        value: appUtils.formatNumber(income.epsdiluted, { currency }),
      },
      {
        label: "Revenue/Basic Share",
        value: "24.34",
      },
      {
        label: "CPS",
        value: "7.02",
      },
      {
        label: "Curr Shares Out.",
        value: "15.6B",
      },
      {
        label: "FCF/Basic Sh",
        value: "6.33",
      },
    ],
  };
}

export function generateCashFlowAnalysisData(data: {
  quote: Quote;
  ratio?: Ratio;
  ratioTTM?: RatioTTM;
  currency: string;
  income: IncomeStatement;
  cash: CashFlowStatement;
  balance: BalanceSheetStatement;
}) {
  const { currency, ratio, ratioTTM, quote, income } = data;

  return {
    name: "Cash Flow Analysis",
    fields: [
      {
        label: "P/CF",
        value: "26.1",
      },
      {
        label: "Curr P/FCF",
        value: "28.9",
      },
      {
        label: "CF/NI",
        value: "1.1",
      },
      {
        label: "Dividend P/O",
        value: "15.3%",
      },
      {
        label: "Cash Gen/Cash Reqd",
        value: "4.3",
      },
      {
        label: "Csh Dvd Cov",
        value: "6.6",
      },
      {
        label: "CFO/Sales",
        value: "28.8%",
      },
      {
        label: "Effective Interest Rate",
        value: "3.1%",
      },
    ],
  };
}

export function generateGrowthPotentialData(data: {
  quote: Quote;
  ratio?: Ratio;
  ratioTTM?: RatioTTM;
  currency: string;
  income: IncomeStatement;
  cash: CashFlowStatement;
  balance: BalanceSheetStatement;
}) {
  const { currency, ratio, ratioTTM, quote, income } = data;

  return {
    name: "Growth Potential",
    fields: [
      {
        label: "Dil EPS Frm Cont Op 1Y Growth",
        value: "0.3%",
      },
      {
        label: "Cap 1Y Growth",
        value: "1.6%",
      },
      {
        label: "BPS 1Y Growth",
        value: "25.7%",
      },
      {
        label: "R&D To Sl",
        value: "7.8%",
      },
      {
        label: "Retention Rate",
        value: "84.7%",
      },
      {
        label: "Revenue 1Y Growth",
        value: "-2.8%",
      },
      {
        label: "Empl 1Y Growth",
        value: "-1.8%",
      },
      {
        label: "Assets 1Y Growth",
        value: "0.0%",
      },
    ],
  };
}

export function generateProfitabilityData(data: {
  quote: Quote;
  ratio?: Ratio;
  ratioTTM?: RatioTTM;
  currency: string;
  income: IncomeStatement;
  cash: CashFlowStatement;
  balance: BalanceSheetStatement;
}) {
  const { currency, ratio, ratioTTM, quote, income } = data;

  return {
    name: "Profitability",
    fields: [
      {
        label: "EBITDA",
        value: "127.8B",
      },
      {
        label: "EBIT",
        value: "114.3B",
      },
      {
        label: "OPM",
        value: "29.8%",
      },
      {
        label: "Pretax Margin",
        value: "29.7%",
      },
      {
        label: "Return on Assets (ROA)",
        value: "27.5%",
      },
      {
        label: "Return on Equity (ROE)",
        value: "171.9%",
      },
      {
        label: "Return on Capital (ROC)",
        value: "54.4%",
      },
      {
        label: "Asset Turnover",
        value: "1.1",
      },
    ],
  };
}

export function generateStructureData(data: {
  quote: Quote;
  ratio?: Ratio;
  ratioTTM?: RatioTTM;
  currency: string;
  income: IncomeStatement;
  cash: CashFlowStatement;
  balance: BalanceSheetStatement;
}) {
  const { currency, ratio, ratioTTM, quote, income } = data;

  return {
    name: "Structure",
    fields: [
      {
        label: "Current Ratio",
        value: "1.0",
      },
      {
        label: "Quick Ratio",
        value: "0.6",
      },
      {
        label: "Debt/Assets",
        value: "35.1%",
      },
      {
        label: "Debt/Common Equity",
        value: "199.4%",
      },
      {
        label: "Accounts Receivable Turnover",
        value: "13.3",
      },
      {
        label: "Inventory Turnover",
        value: "38.0",
      },
      {
        label: "Gross Margin (GM)",
        value: "44.1%",
      },
      {
        label: "EBIT/Tot Int Exp",
        value: "29.1",
      },
    ],
  };
}
