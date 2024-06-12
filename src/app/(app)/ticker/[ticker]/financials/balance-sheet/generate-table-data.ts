import { RowDataWithChildren } from "@/components/row-with-children";
import {
  BalanceSheetStatement,
  Financials,
  IncomeStatement,
} from "@/modules/ticker/types";
import appUtils from "@/utils/app-util";

type RowData = {
  label: string;
  cols: string[];
};

export function generateBalanceTableData(
  data: BalanceSheetStatement[],
  currency: string = "USD"
): RowDataWithChildren<RowData>[] {
  return [
    {
      data: {
        label: "Total Assets",
        cols: data.map((balance) => {
          return appUtils.formatNumber(balance.totalAssets, {
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
            label: "Current Assets",
            cols: data.map((balance) => {
              return appUtils.formatNumber(balance.totalCurrentAssets, {
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
                label: "Cash & Short Term Investments",
                cols: data.map((balance) => {
                  return appUtils.formatNumber(
                    balance.cashAndShortTermInvestments,
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
                    label: "Cash And Cash Equivalents",
                    cols: data.map((balance) => {
                      return appUtils.formatNumber(
                        balance.cashAndCashEquivalents,
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
                    label: "Short Term Investments",
                    cols: data.map((balance) => {
                      return appUtils.formatNumber(
                        balance.shortTermInvestments,
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
              ],
            },
            {
              data: {
                label: "Inventory",
                cols: data.map((balance) => {
                  return appUtils.formatNumber(balance.inventory, {
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
                label: "Net Receivables",
                cols: data.map((balance) => {
                  return appUtils.formatNumber(balance.netReceivables, {
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
                label: "Other Current Assets",
                cols: data.map((balance) => {
                  return appUtils.formatNumber(balance.otherCurrentAssets, {
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
            label: "Non-Current Assets",
            cols: data.map((balance) => {
              return appUtils.formatNumber(balance.totalNonCurrentAssets, {
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
                label: "Property, Plant & Equipment",
                cols: data.map((balance) => {
                  return appUtils.formatNumber(
                    balance.propertyPlantEquipmentNet,
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
                label: "Goodwill And Intangible Assets",
                cols: data.map((balance) => {
                  return appUtils.formatNumber(
                    balance.goodwillAndIntangibleAssets,
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
                    label: "Goodwill",
                    cols: data.map((balance) => {
                      return appUtils.formatNumber(balance.goodwill, {
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
                    label: "Intangible Assets",
                    cols: data.map((balance) => {
                      return appUtils.formatNumber(balance.intangibleAssets, {
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
                label: "Long Term Investments",
                cols: data.map((balance) => {
                  return appUtils.formatNumber(balance.longTermInvestments, {
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
                label: "Tax Assets",
                cols: data.map((balance) => {
                  return appUtils.formatNumber(balance.taxAssets, {
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
                label: "Other Non-Current Assets",
                cols: data.map((balance) => {
                  return appUtils.formatNumber(balance.otherNonCurrentAssets, {
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
            label: "Other Assets",
            cols: data.map((balance) => {
              return appUtils.formatNumber(balance.otherAssets, {
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
        label: "Total Liabilities",
        cols: data.map((balance) => {
          return appUtils.formatNumber(balance.totalLiabilities, {
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
            label: "Current Liabilities",
            cols: data.map((balance) => {
              return appUtils.formatNumber(balance.totalCurrentLiabilities, {
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
                label: "Accounts Payable",
                cols: data.map((balance) => {
                  return appUtils.formatNumber(balance.accountPayables, {
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
                label: "Short Term Debt",
                cols: data.map((balance) => {
                  return appUtils.formatNumber(balance.shortTermDebt, {
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
                label: "Tax Payables",
                cols: data.map((balance) => {
                  return appUtils.formatNumber(balance.taxPayables, {
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
                label: "Deferred Revenue",
                cols: data.map((balance) => {
                  return appUtils.formatNumber(balance.deferredRevenue, {
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
                label: "Other Current Liabilities",
                cols: data.map((balance) => {
                  return appUtils.formatNumber(
                    balance.otherCurrentLiabilities,
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
          ],
        },
        {
          data: {
            label: "Non-Current Liabilities",
            cols: data.map((balance) => {
              return appUtils.formatNumber(balance.totalNonCurrentLiabilities, {
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
                label: "Long-Term Debt",
                cols: data.map((balance) => {
                  return appUtils.formatNumber(balance.longTermDebt, {
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
                label: "Non Current Deferred Revenue",
                cols: data.map((balance) => {
                  return appUtils.formatNumber(
                    balance.deferredRevenueNonCurrent,
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
                label: "Deferred Taxes Liabilities",
                cols: data.map((balance) => {
                  return appUtils.formatNumber(
                    balance.deferredTaxLiabilitiesNonCurrent,
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
                label: "Other Non Current liabilities",
                cols: data.map((balance) => {
                  return appUtils.formatNumber(
                    balance.otherNonCurrentLiabilities,
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
          ],
        },
        {
          data: {
            label: "Other Liabilities",
            cols: data.map((balance) => {
              return appUtils.formatNumber(balance.otherLiabilities, {
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
        label: "Total Equity",
        cols: data.map((balance) => {
          return appUtils.formatNumber(balance.totalEquity, {
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
            label: "Stockholders Equity",
            cols: data.map((balance) => {
              return appUtils.formatNumber(balance.totalStockholdersEquity, {
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
                label: "Common Stock",
                cols: data.map((balance) => {
                  return appUtils.formatNumber(balance.commonStock, {
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
                label: "Retained Earnings",
                cols: data.map((balance) => {
                  return appUtils.formatNumber(balance.retainedEarnings, {
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
                label: "Accumulated Other Comprehensive Income/Loss",
                cols: data.map((balance) => {
                  return appUtils.formatNumber(
                    balance.accumulatedOtherComprehensiveIncomeLoss,
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
                label: "Other Stockholder Equity",
                cols: data.map((balance) => {
                  return appUtils.formatNumber(
                    balance.othertotalStockholdersEquity,
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
          ],
        },
        {
          data: {
            label: "Minority Interest",
            cols: data.map((balance) => {
              return appUtils.formatNumber(balance.minorityInterest, {
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
        label: "Preferred Stock Equity",
        cols: data.map((balance) => {
          return appUtils.formatNumber(balance.preferredStock, {
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
        label: "Capital Lease Obligations",
        cols: data.map((balance) => {
          return appUtils.formatNumber(balance.capitalLeaseObligations, {
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
