import { RowDataWithChildren } from "@/components/row-with-children";
import { Ratio } from "@/modules/ticker/types";
import appUtils from "@/utils/app-util";

type RowData = {
  label: string;
  cols: string[];
};

export function generateRatiosTableData(
  data: Ratio[]
): RowDataWithChildren<RowData>[] {
  return [
    {
      defaultState: true,
      data: {
        label: "Returns",
        cols: data.map((ratio) => {
          return "";
        }),
      },
      children: [
        {
          data: {
            label: "Return on Equity",
            cols: data.map((ratio) => {
              return appUtils.formatNumber(ratio.returnOnEquity, {
                style: "decimal",
                notation: "compact",
                minimumFractionDigits: 1,
                maximumFractionDigits: 2,
              });
            }),
          },
        },
        {
          data: {
            label: "Return on Assets",
            cols: data.map((ratio) => {
              return appUtils.formatNumber(ratio.returnOnAssets, {
                style: "decimal",
                notation: "compact",
                minimumFractionDigits: 1,
                maximumFractionDigits: 2,
              });
            }),
          },
        },
        {
          data: {
            label: "Return on Capital",
            cols: data.map((ratio) => {
              return appUtils.formatNumber(ratio.returnOnCapitalEmployed, {
                style: "decimal",
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
      defaultState: true,
      data: {
        label: "Margins",
        cols: data.map((ratio) => {
          return "";
        }),
      },
      children: [
        {
          data: {
            label: "Gross Profit Margin",
            cols: data.map((ratio) => {
              return appUtils.formatNumber(ratio.grossProfitMargin, {
                style: "decimal",
                notation: "compact",
                minimumFractionDigits: 1,
                maximumFractionDigits: 2,
              });
            }),
          },
        },
        {
          data: {
            label: "Operating Profit Margin",
            cols: data.map((ratio) => {
              return appUtils.formatNumber(ratio.operatingProfitMargin, {
                style: "decimal",
                notation: "compact",
                minimumFractionDigits: 1,
                maximumFractionDigits: 2,
              });
            }),
          },
        },
        {
          data: {
            label: "Pretax Profit Margin",
            cols: data.map((ratio) => {
              return appUtils.formatNumber(ratio.pretaxProfitMargin, {
                style: "decimal",
                notation: "compact",
                minimumFractionDigits: 1,
                maximumFractionDigits: 2,
              });
            }),
          },
        },
        {
          data: {
            label: "Net profit Margin",
            cols: data.map((ratio) => {
              return appUtils.formatNumber(ratio.netProfitMargin, {
                style: "decimal",
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
      defaultState: true,
      data: {
        label: "Additional",
        cols: data.map((ratio) => {
          return "";
        }),
      },
      children: [
        {
          data: {
            label: "Effective Tax Rate",
            cols: data.map((ratio) => {
              return appUtils.formatNumber(ratio.effectiveTaxRate, {
                style: "decimal",
                notation: "compact",
                minimumFractionDigits: 1,
                maximumFractionDigits: 2,
              });
            }),
          },
        },
        {
          data: {
            label: "Price Fair Value",
            cols: data.map((ratio) => {
              return appUtils.formatNumber(ratio.priceFairValue, {
                style: "decimal",
                notation: "compact",
                minimumFractionDigits: 1,
                maximumFractionDigits: 2,
              });
            }),
          },
        },
        {
          data: {
            label: "Dividend Yield",
            cols: data.map((ratio) => {
              return appUtils.formatNumber(ratio.dividendYield, {
                style: "decimal",
                notation: "compact",
                minimumFractionDigits: 1,
                maximumFractionDigits: 2,
              });
            }),
          },
        },
        {
          data: {
            label: "Cash Per Share",
            cols: data.map((ratio) => {
              return appUtils.formatNumber(ratio.cashPerShare, {
                style: "decimal",
                notation: "compact",
                minimumFractionDigits: 1,
                maximumFractionDigits: 2,
              });
            }),
          },
        },
        {
          data: {
            label: "Asset Turnover",
            cols: data.map((ratio) => {
              return appUtils.formatNumber(ratio.assetTurnover, {
                style: "decimal",
                notation: "compact",
                minimumFractionDigits: 1,
                maximumFractionDigits: 2,
              });
            }),
          },
        },
        {
          data: {
            label: "Fixed Asset Turnover",
            cols: data.map((ratio) => {
              return appUtils.formatNumber(ratio.fixedAssetTurnover, {
                style: "decimal",
                notation: "compact",
                minimumFractionDigits: 1,
                maximumFractionDigits: 2,
              });
            }),
          },
        },
        {
          data: {
            label: "Inventory Turnover",
            cols: data.map((ratio) => {
              return appUtils.formatNumber(ratio.inventoryTurnover, {
                style: "decimal",
                notation: "compact",
                minimumFractionDigits: 1,
                maximumFractionDigits: 2,
              });
            }),
          },
        },
        {
          data: {
            label: "Recieveables Turnover",
            cols: data.map((ratio) => {
              return appUtils.formatNumber(ratio.receivablesTurnover, {
                style: "decimal",
                notation: "compact",
                minimumFractionDigits: 1,
                maximumFractionDigits: 2,
              });
            }),
          },
        },
        {
          data: {
            label: "Payables Turnover",
            cols: data.map((ratio) => {
              return appUtils.formatNumber(ratio.payablesTurnover, {
                style: "decimal",
                notation: "compact",
                minimumFractionDigits: 1,
                maximumFractionDigits: 2,
              });
            }),
          },
        },
      ],
    },
  ];
}
