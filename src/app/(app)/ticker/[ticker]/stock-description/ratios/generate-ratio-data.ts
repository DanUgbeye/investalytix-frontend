import {
  BalanceSheetStatement,
  BalanceSheetStatementGrowth,
  CashFlowStatement,
  CashFlowStatementGrowth,
  FinancialGrowth,
  IncomeStatement,
  IncomeStatementGrowth,
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
        label: "Price / Earning",
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
        label: "Price / Book",
        value: appUtils.formatNumber(ratio?.priceToBookRatio, {
          style: "decimal",
        }),
      },
      {
        label: "Price / Sales",
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
}) {
  const { currency, ratio, ratioTTM, quote, income } = data;

  return {
    name: "Per Share Data",
    fields: [
      {
        label: "Shares Outstanding",
        value: appUtils.formatNumber(quote?.sharesOutstanding, {
          style: "decimal",
          notation: "compact",
        }),
      },
      {
        label: "EPS",
        value: appUtils.formatNumber(income?.eps, { currency }),
      },
      {
        label: "Dividend Per Share TTM",
        value: appUtils.formatNumber(ratioTTM?.dividendPerShareTTM, {
          style: "decimal",
        }),
      },
      {
        label: "Book Value Per Share",
        value: appUtils.formatNumber(
          (quote.price || 0) / (ratio?.priceBookValueRatio || 1),
          { style: "decimal" }
        ),
      },
      {
        label: "Cash Per Share",
        value: appUtils.formatNumber(ratio?.cashPerShare, {
          style: "decimal",
        }),
      },
      {
        label: "Operating Cash Flow / Basic Share",
        value: appUtils.formatNumber(ratio?.operatingCashFlowPerShare, {
          style: "decimal",
        }),
      },
      {
        label: "Free Cash Flow / Basic Share",
        value: appUtils.formatNumber(ratio?.freeCashFlowPerShare, {
          style: "decimal",
        }),
      },
    ],
  };
}

export function generateCashFlowAnalysisData(data: {
  ratio?: Ratio;
  currency: string;
  income: IncomeStatement;
  cash: CashFlowStatement;
}) {
  const { currency, ratio, income, cash } = data;

  return {
    name: "Cash Flow Analysis",
    fields: [
      {
        label: "Price / Cash Flow (P/CF)",
        value: appUtils.formatNumber(ratio?.priceCashFlowRatio, {
          style: "decimal",
        }),
      },
      {
        label: "Price / Free Cash Flow (P/FCF)",
        value: appUtils.formatNumber(ratio?.priceToFreeCashFlowsRatio, {
          style: "decimal",
        }),
      },
      {
        label: "Cash Flow / Net Income (CF/NI)",
        value: appUtils.formatNumber(
          (cash.operatingCashFlow || 0) / (income.netIncome || 1),
          { style: "decimal" }
        ),
      },
      {
        label: "Dividend Payout Ratio",
        value:
          appUtils.formatNumber((ratio?.dividendPayoutRatio || 0) * 100, {
            style: "decimal",
          }) + "%",
      },
      {
        label: "Free / Operating Cash Flow",
        value: appUtils.formatNumber(
          ratio?.freeCashFlowOperatingCashFlowRatio,
          {
            style: "decimal",
          }
        ),
      },
      {
        label: "Dividend Coverage Ratio",
        value: appUtils.formatNumber(ratio?.dividendPaidAndCapexCoverageRatio, {
          style: "decimal",
        }),
      },
      {
        label: "Operating Cash Flow / Sales",
        value:
          appUtils.formatNumber(
            (ratio?.operatingCashFlowSalesRatio || 0) * 100,
            { style: "decimal" }
          ) + "%",
      },
      {
        label: "Effective Tax Rate",
        value:
          appUtils.formatNumber((ratio?.effectiveTaxRate || 0) * 100, {
            style: "decimal",
          }) + "%",
      },
    ],
  };
}

export function generateGrowthPotentialData(data: {
  currency: string;
  financialGrowth?: FinancialGrowth;
  incomeGrowth?: IncomeStatementGrowth;
  cashFlowGrowth?: CashFlowStatementGrowth;
  balanceSheetGrowth?: BalanceSheetStatementGrowth;
}) {
  const {
    currency,
    financialGrowth,
    incomeGrowth,
    cashFlowGrowth,
    balanceSheetGrowth,
  } = data;

  return {
    name: "Growth Potential",
    fields: [
      {
        label: "Diluted EPS 1Y Growth",
        value:
          incomeGrowth && incomeGrowth?.growthEPSDiluted
            ? appUtils.formatNumber(incomeGrowth.growthEPSDiluted * 100, {
                style: "decimal",
              }) + "%"
            : "-",
      },
      {
        label: "Capital 1Y Growth",
        value:
          cashFlowGrowth && cashFlowGrowth?.growthChangeInWorkingCapital
            ? appUtils.formatNumber(
                cashFlowGrowth.growthChangeInWorkingCapital * 100,
                {
                  style: "decimal",
                }
              ) + "%"
            : "-",
      },
      {
        label: "Book Value / Share 1Y Growth",
        value:
          financialGrowth && financialGrowth?.bookValueperShareGrowth
            ? appUtils.formatNumber(
                financialGrowth.bookValueperShareGrowth * 100,
                {
                  style: "decimal",
                }
              ) + "%"
            : "-",
      },
      {
        label: "Research & Development Growth",
        value:
          incomeGrowth && incomeGrowth?.growthResearchAndDevelopmentExpenses
            ? appUtils.formatNumber(
                incomeGrowth.growthResearchAndDevelopmentExpenses * 100,
                {
                  style: "decimal",
                }
              ) + "%"
            : "-",
      },
      {
        label: "Earnings Retention Rate",
        value:
          balanceSheetGrowth && balanceSheetGrowth?.growthRetainedEarnings
            ? appUtils.formatNumber(
                balanceSheetGrowth.growthRetainedEarnings * 100,
                {
                  style: "decimal",
                }
              ) + "%"
            : "-",
      },
      {
        label: "Revenue 1Y Growth",
        value:
          incomeGrowth && incomeGrowth?.growthRevenue
            ? appUtils.formatNumber(incomeGrowth.growthRevenue * 100, {
                style: "decimal",
              }) + "%"
            : "-",
      },
      {
        label: "EBITDA 1Y Growth",
        value:
          incomeGrowth && incomeGrowth?.growthEBITDA
            ? appUtils.formatNumber(incomeGrowth.growthEBITDA * 100, {
                style: "decimal",
              }) + "%"
            : "-",
      },
      {
        label: "Assets 1Y Growth",
        value:
          financialGrowth && financialGrowth?.assetGrowth
            ? appUtils.formatNumber(financialGrowth.assetGrowth * 100, {
                style: "decimal",
              }) + "%"
            : "-",
      },
    ],
  };
}

export function generateProfitabilityData(data: {
  ratio?: Ratio;
  currency: string;
  income: IncomeStatement;
}) {
  const { ratio, income, currency } = data;

  return {
    name: "Profitability",
    fields: [
      {
        label: "EBITDA",
        value: appUtils.formatNumber(income.ebitda, {
          currency,
          notation: "compact",
        }),
      },
      {
        label: "EBIT",
        value: appUtils.formatNumber(
          (income.ebitda || 0) - (income.depreciationAndAmortization || 0),
          { currency, notation: "compact" }
        ),
      },
      {
        label: "Operating Profit Margin (OPM)",
        value:
          appUtils.formatNumber(ratio?.operatingProfitMargin, {
            style: "decimal",
          }) + "%",
      },
      {
        label: "Pretax Margin",
        value:
          appUtils.formatNumber(ratio?.pretaxProfitMargin, {
            style: "decimal",
          }) + "%",
      },
      {
        label: "Return on Assets (ROA)",
        value:
          appUtils.formatNumber(ratio?.returnOnAssets, { style: "decimal" }) +
          "%",
      },
      {
        label: "Return on Equity (ROE)",
        value:
          appUtils.formatNumber(ratio?.returnOnEquity, { style: "decimal" }) +
          "%",
      },
      {
        label: "Return on Capital (ROC)",
        value:
          appUtils.formatNumber(ratio?.returnOnCapitalEmployed, {
            style: "decimal",
          }) + "%",
      },
      {
        label: "Asset Turnover",
        value: appUtils.formatNumber(ratio?.assetTurnover, {
          style: "decimal",
        }),
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
  const { ratio, income, balance } = data;

  return {
    name: "Structure",
    fields: [
      {
        label: "Current Ratio",
        value: appUtils.formatNumber(ratio?.currentRatio, { style: "decimal" }),
      },
      {
        label: "Quick Ratio",
        value: appUtils.formatNumber(ratio?.quickRatio, { style: "decimal" }),
      },
      {
        label: "Debt / Assets",
        value:
          appUtils.formatNumber(
            ((balance.totalDebt || 0) / (balance.totalAssets || 1)) * 100,
            { style: "decimal" }
          ) + "%",
      },
      {
        label: "Debt / Common Equity",
        value:
          appUtils.formatNumber(
            ((balance.totalDebt || 0) / (balance.totalEquity || 1)) * 100,
            { style: "decimal" }
          ) + "%",
      },
      {
        label: "Accounts Receivable Turnover",
        value: appUtils.formatNumber(ratio?.receivablesTurnover, {
          style: "decimal",
        }),
      },
      {
        label: "Inventory Turnover",
        value: appUtils.formatNumber(ratio?.inventoryTurnover, {
          style: "decimal",
        }),
      },
      {
        label: "Gross Margin (GM)",
        value:
          appUtils.formatNumber(ratio?.grossProfitMargin, {
            style: "decimal",
          }) + "%",
      },
      {
        label: "EBIT / Total Interest Expense",
        value: appUtils.formatNumber(
          ((income.ebitda || 0) - (income.depreciationAndAmortization || 0) ||
            0) / (income.interestExpense || 1),
          { style: "decimal" }
        ),
      },
    ],
  };
}
