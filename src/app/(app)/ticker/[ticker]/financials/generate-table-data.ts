import { Financials } from "@/modules/ticker/types";
import appUtils from "@/utils/app-util";

type RowData = {
  label: string;
  cols: string[];
};

export function generateKeyStatsTableData(
  data: Financials,
  currency: string = "USD"
): { income: RowData[]; cash: RowData[]; balance: RowData[] } {
  return {
    income: [
      {
        label: "Total Revenue",
        cols: data.income.map((income) => {
          return appUtils.formatNumber(income.revenue, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
      {
        label: "Cost of Revenue",
        cols: data.income.map((income) => {
          return appUtils.formatNumber(income.costOfRevenue, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
      {
        label: " Gross Profit",
        cols: data.income.map((income) => {
          return appUtils.formatNumber(income.grossProfit, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
      {
        label: "EBITDA",
        cols: data.income.map((income) => {
          return appUtils.formatNumber(income.ebitda, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
      {
        label: "EPS",
        cols: data.income.map((income) => {
          return appUtils.formatNumber(income.eps, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
    ],

    balance: [
      {
        label: "Total Assets",
        cols: data.balance.map((balanceSheet) => {
          return appUtils.formatNumber(balanceSheet.totalAssets, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
      {
        label: "Total Debt",
        cols: data.balance.map((balanceSheet) => {
          return appUtils.formatNumber(balanceSheet.totalDebt, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
      {
        label: "Net Debt",
        cols: data.balance.map((balanceSheet) => {
          return appUtils.formatNumber(balanceSheet.netDebt, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
      {
        label: "Total Liabilities",
        cols: data.balance.map((balanceSheet) => {
          return appUtils.formatNumber(balanceSheet.totalLiabilities, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
      {
        label: "Stakeholder Equity",
        cols: data.balance.map((balanceSheet) => {
          return appUtils.formatNumber(balanceSheet.totalStockholdersEquity, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
    ],

    cash: [
      {
        label: "Free Cash Flow",
        cols: data.cash.map((cashFlow) => {
          return appUtils.formatNumber(cashFlow.freeCashFlow, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
      {
        label: "Operating Cash Flow",
        cols: data.cash.map((cashFlow) => {
          return appUtils.formatNumber(cashFlow.operatingCashFlow, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
      {
        label: "Net Income",
        cols: data.cash.map((cashFlow) => {
          return appUtils.formatNumber(cashFlow.netIncome, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
      {
        label: "Stock Repurchases",
        cols: data.cash.map((cashFlow) => {
          return appUtils.formatNumber(cashFlow.commonStockRepurchased, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
      {
        label: "Dividend Paid",
        cols: data.cash.map((cashFlow) => {
          return appUtils.formatNumber(cashFlow.dividendsPaid, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
    ],
  };
}
