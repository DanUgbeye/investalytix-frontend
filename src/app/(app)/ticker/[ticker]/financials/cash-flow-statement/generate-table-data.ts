import { RowDataWithChildren } from "@/components/row-with-children";
import { CashFlowStatement } from "@/modules/ticker/types";
import appUtils from "@/utils/app-util";

type RowData = {
  label: string;
  cols: string[];
};

export function generateCashFlowTableData(
  data: CashFlowStatement[],
  currency: string = "USD"
): RowDataWithChildren<RowData>[] {
  return [
    {
      data: {
        label: "Operating Cash Flow",
        cols: data.map((cashflow) => {
          return appUtils.formatNumber(cashflow.operatingCashFlow, {
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
            label: "Net Income",
            cols: data.map((cashflow) => {
              return appUtils.formatNumber(cashflow.netIncome, {
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
            label: "Depreciation & Amortization",
            cols: data.map((cashflow) => {
              return appUtils.formatNumber(
                cashflow.depreciationAndAmortization,
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
            label: "Deferred Income Taxes",
            cols: data.map((cashflow) => {
              return appUtils.formatNumber(cashflow.deferredIncomeTax, {
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
            label: "Stock Based Compensation",
            cols: data.map((cashflow) => {
              return appUtils.formatNumber(cashflow.stockBasedCompensation, {
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
            label: "Change in Working Capital",
            cols: data.map((cashflow) => {
              return appUtils.formatNumber(cashflow.changeInWorkingCapital, {
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
            label: "Accounts Receivable",
            cols: data.map((cashflow) => {
              return appUtils.formatNumber(cashflow.accountsReceivables, {
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
            label: "Accounts Payable",
            cols: data.map((cashflow) => {
              return appUtils.formatNumber(cashflow.accountsPayables, {
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
            label: "Inventory",
            cols: data.map((cashflow) => {
              return appUtils.formatNumber(cashflow.inventory, {
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
            label: "Other Working Capital",
            cols: data.map((cashflow) => {
              return appUtils.formatNumber(cashflow.otherWorkingCapital, {
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
            label: "Other Non-Cash Items",
            cols: data.map((cashflow) => {
              return appUtils.formatNumber(cashflow.otherNonCashItems, {
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
        label: "Investing Cash Flow",
        cols: data.map((cashflow) => {
          return appUtils.formatNumber(
            cashflow.netCashUsedForInvestingActivites,
            {
              currency,
              notation: "compact",
              minimumFractionDigits: 1,
              maximumFractionDigits: 2,
            }
          );
        }),
      },
      children: [
        {
          data: {
            label: "Investments in Property, Plant & Equipment",
            cols: data.map((cashflow) => {
              return appUtils.formatNumber(
                cashflow.investmentsInPropertyPlantAndEquipment,
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
            label: "Net Acquisitions",
            cols: data.map((cashflow) => {
              return appUtils.formatNumber(cashflow.acquisitionsNet, {
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
            label: "Investment Purchases",
            cols: data.map((cashflow) => {
              return appUtils.formatNumber(cashflow.purchasesOfInvestments, {
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
            label: "Sales/Maturities of Investments",
            cols: data.map((cashflow) => {
              return appUtils.formatNumber(
                cashflow.salesMaturitiesOfInvestments,
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
            label: "Other Investing Activites",
            cols: data.map((cashflow) => {
              return appUtils.formatNumber(cashflow.otherInvestingActivites, {
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
        label: "Financing Cash Flow",
        cols: data.map((cashflow) => {
          return appUtils.formatNumber(
            cashflow.netCashUsedProvidedByFinancingActivities,
            {
              currency,
              notation: "compact",
              minimumFractionDigits: 1,
              maximumFractionDigits: 2,
            }
          );
        }),
      },
      children: [
        {
          data: {
            label: "Debt Repayment",
            cols: data.map((cashflow) => {
              return appUtils.formatNumber(cashflow.debtRepayment, {
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
            label: " Common Stock Issued",
            cols: data.map((cashflow) => {
              return appUtils.formatNumber(cashflow.commonStockIssued, {
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
            label: "Common Stock Repurchased",
            cols: data.map((cashflow) => {
              return appUtils.formatNumber(cashflow.commonStockRepurchased, {
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
            label: "Dividends Paid",
            cols: data.map((cashflow) => {
              return appUtils.formatNumber(cashflow.dividendsPaid, {
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
            label: "Other Financing Activites",
            cols: data.map((cashflow) => {
              return appUtils.formatNumber(cashflow.otherFinancingActivites, {
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
        label: "Free Cash Flow",
        cols: data.map((cashflow) => {
          return appUtils.formatNumber(cashflow.freeCashFlow, {
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
            label: "Operating Cash Flow",
            cols: data.map((cashflow) => {
              return appUtils.formatNumber(cashflow.operatingCashFlow, {
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
            label: "Capital Expenditures",
            cols: data.map((cashflow) => {
              return appUtils.formatNumber(cashflow.capitalExpenditure, {
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
        label: "Cash at Beginning of Period",
        cols: data.map((cashflow) => {
          return appUtils.formatNumber(cashflow.cashAtBeginningOfPeriod, {
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
        label: "Cash at End of Period",
        cols: data.map((cashflow) => {
          return appUtils.formatNumber(cashflow.cashAtEndOfPeriod, {
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
        label: "Net Change In Cash",
        cols: data.map((cashflow) => {
          return appUtils.formatNumber(cashflow.netChangeInCash, {
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
