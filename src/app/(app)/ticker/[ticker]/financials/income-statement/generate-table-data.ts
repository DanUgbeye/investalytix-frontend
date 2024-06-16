import { RowDataWithChildren } from "@/components/row-with-children";
import { Financials, IncomeStatement } from "@/modules/ticker/types";
import appUtils from "@/utils/app-util";

type RowData = {
  label: string;
  cols: string[];
};

export function generateIncomeTableData(
  data: IncomeStatement[],
  currency: string = "USD"
): RowDataWithChildren<RowData>[] {
  return [
    {
      data: {
        label: "Total Revenue",
        cols: data.map((income) => {
          return appUtils.formatNumber(income.revenue, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
    },
    {
      data: {
        label: "Cost of Revenue",
        cols: data.map((income) => {
          return appUtils.formatNumber(income.costOfRevenue, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
    },
    {
      data: {
        label: "Gross Profit",
        cols: data.map((income) => {
          return appUtils.formatNumber(income.grossProfit, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
    },
    {
      data: {
        label: "Operating Expenses",
        cols: data.map((income) => {
          return appUtils.formatNumber(income.operatingExpenses, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
      children: [
        {
          data: {
            label: "Research and Development",
            cols: data.map((income) => {
              return appUtils.formatNumber(
                income.researchAndDevelopmentExpenses,
                {
                  currency,
                  notation: "compact",
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 2,
                }
              );
            }),
          },
        },
        {
          data: {
            label: "General & Administrative Expenses",
            cols: data.map((income) => {
              return appUtils.formatNumber(
                income.generalAndAdministrativeExpenses,
                {
                  currency,
                  notation: "compact",
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 2,
                }
              );
            }),
          },
        },
        {
          data: {
            label: "Selling, General & Administrative Expenses",
            cols: data.map((income) => {
              return appUtils.formatNumber(
                income.sellingGeneralAndAdministrativeExpenses,
                {
                  currency,
                  notation: "compact",
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 2,
                }
              );
            }),
          },
        },
        {
          data: {
            label: "Selling & Marketing Expenses",
            cols: data.map((income) => {
              return appUtils.formatNumber(income.sellingAndMarketingExpenses, {
                currency,
                notation: "compact",
                minimumFractionDigits: 1,
                maximumFractionDigits: 2,
              });
            }),
          },
        },
        {
          data: {
            label: "Depreciation and Amortization",
            cols: data.map((income) => {
              return appUtils.formatNumber(income.depreciationAndAmortization, {
                currency,
                notation: "compact",
                minimumFractionDigits: 1,
                maximumFractionDigits: 2,
              });
            }),
          },
        },
        {
          data: {
            label: "Other Expenses",
            cols: data.map((income) => {
              return appUtils.formatNumber(income.otherExpenses, {
                currency,
                notation: "compact",
                minimumFractionDigits: 1,
                maximumFractionDigits: 2,
              });
            }),
          },
        },
      ],
    },
    {
      data: {
        label: "Operating Income",
        cols: data.map((income) => {
          return appUtils.formatNumber(income.operatingIncome, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
      children: [
        {
          data: {
            label: "Total Other Income/Expenses Net",
            cols: data.map((income) => {
              return appUtils.formatNumber(income.totalOtherIncomeExpensesNet, {
                currency,
                notation: "compact",
                minimumFractionDigits: 1,
                maximumFractionDigits: 2,
              });
            }),
          },
        },
      ],
    },
    {
      data: {
        label: "Income Before Tax",
        cols: data.map((income) => {
          return appUtils.formatNumber(income.incomeBeforeTax, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
      children: [
        {
          data: {
            label: "Income Tax",
            cols: data.map((income) => {
              return appUtils.formatNumber(income.incomeTaxExpense, {
                currency,
                notation: "compact",
                minimumFractionDigits: 1,
                maximumFractionDigits: 2,
              });
            }),
          },
        },
      ],
    },
    {
      data: {
        label: "Net Income",
        cols: data.map((income) => {
          return appUtils.formatNumber(income.netIncome, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
    },
    {
      data: {
        label: "EBITDA",
        cols: data.map((income) => {
          return appUtils.formatNumber(income.ebitda, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
    },
    {
      data: {
        label: "Average Shares Outstanding",
        cols: data.map((income) => {
          return appUtils.formatNumber(income.weightedAverageShsOut, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
    },
    {
      data: {
        label: "Diluted Average Shares Outstanding",
        cols: data.map((income) => {
          return appUtils.formatNumber(income.weightedAverageShsOutDil, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
    },
    {
      data: {
        label: "EPS",
        cols: data.map((income) => {
          return appUtils.formatNumber(income.eps, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
    },
    {
      data: {
        label: "EPS Diluted",
        cols: data.map((income) => {
          return appUtils.formatNumber(income.epsdiluted, {
            currency,
            notation: "compact",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          });
        }),
      },
    },
  ];
}
