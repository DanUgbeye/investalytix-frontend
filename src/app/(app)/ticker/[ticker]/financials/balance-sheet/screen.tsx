"use client";

import { INCOME_STATEMENT_DATA } from "../income-statement/screen";

interface BalanceSheetScreenProps {
  ticker: string;
}

export default function BalanceSheetScreen(props: BalanceSheetScreenProps) {
  const { ticker } = props;

  return (
    <section className=" pb-12 ">
      <div className=" overflow-x-auto ">
        <table className=" w-full min-w-[50rem] border-b border-r border-[#DEE2E6] ">
          <thead>
            <tr className="  text-sm font-bold ">
              <th className=" w-60 border-b border-r border-[#DEE2E6] px-2 py-4 text-left dark:bg-transparent "></th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
                const year = new Date(data.date).getFullYear();

                return (
                  <th
                    key={`${year}-${index}`}
                    className=" border-y border-y-[#DEE2E6] bg-slate-200 px-2 py-4 text-right dark:bg-transparent"
                  >
                    {year}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody className=" ">
            <tr className=" bg-slate-200 text-sm dark:bg-transparent ">
              <th className=" border-x border-x-[#DEE2E6] px-2 py-4 text-left font-bold dark:bg-transparent ">
                Revenue
              </th>
            </tr>

            <tr className=" text-sm even:bg-[#F8F9FC] ">
              <th className=" border-x border-x-[#DEE2E6] px-2 py-4 text-left font-normal dark:bg-transparent">
                Sales & Services Revenue
              </th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.salesRevenue.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm even:bg-[#F8F9FC] ">
              <th className=" border-x border-x-[#DEE2E6] px-2 py-4 text-left font-normal dark:bg-transparent">
                Cost of Revenue
              </th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.revenueCost.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm even:bg-[#F8F9FC] ">
              <th className=" border-x border-x-[#DEE2E6] px-2 py-4 text-left font-normal dark:bg-transparent">
                Cost of Goods & Services
              </th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.costOfGoods.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm even:bg-[#F8F9FC] ">
              <th className=" border-x border-x-[#DEE2E6] px-2 py-4 text-left font-normal dark:bg-transparent">
                Gross Profit
              </th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.grossProfit.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" bg-slate-200 text-sm dark:bg-transparent ">
              <th className=" border-x border-x-[#DEE2E6] px-2 py-4 text-left font-bold dark:bg-transparent">
                Other Operating Income
              </th>
            </tr>

            <tr className=" text-sm even:bg-[#F8F9FC] ">
              <th className=" border-x border-x-[#DEE2E6] px-2 py-4 text-left font-normal dark:bg-transparent">
                Operating Expenses
              </th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.operatingExpense.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm even:bg-[#F8F9FC] ">
              <th className=" border-x border-x-[#DEE2E6] px-2 py-4 text-left font-normal dark:bg-transparent">
                Selling, General & Advance
              </th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.sga.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm even:bg-[#F8F9FC] ">
              <th className=" border-x border-x-[#DEE2E6] px-2 py-4 text-left font-normal dark:bg-transparent">
                Research & Development
              </th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.researchDevelopment.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm even:bg-[#F8F9FC] ">
              <th className=" border-x border-x-[#DEE2E6] px-2 py-4 text-left font-normal dark:bg-transparent">
                Other Operating Expenses
              </th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.otherOperatingExpenses.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm even:bg-[#F8F9FC] ">
              <th className=" border-x border-x-[#DEE2E6] px-2 py-4 text-left font-normal dark:bg-transparent">
                Pretax Margin
              </th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.pretaxMargin.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm even:bg-[#F8F9FC] ">
              <th className=" border-x border-x-[#DEE2E6] px-2 py-4 text-left font-normal dark:bg-transparent">
                Income before XO Margin
              </th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.incomeBeforeMargin.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm even:bg-[#F8F9FC] ">
              <th className=" border-x border-x-[#DEE2E6] px-2 py-4 text-left font-normal dark:bg-transparent">
                Net Income Margin
              </th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.netIncomeMargin.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm even:bg-[#F8F9FC] ">
              <th className=" border-x border-x-[#DEE2E6] px-2 py-4 text-left font-normal dark:bg-transparent">
                Net Income to Common Margin
              </th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.netIncomeToCommonMargin.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" bg-slate-200 text-sm dark:bg-transparent ">
              <th className=" border-x border-x-[#DEE2E6] px-2 py-4 text-left font-bold dark:bg-transparent">
                Additional
              </th>
            </tr>

            <tr className=" text-sm even:bg-[#F8F9FC] ">
              <th className=" border-x border-x-[#DEE2E6] px-2 py-4 text-left font-normal dark:bg-transparent">
                Effective Tax Rate
              </th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.effectiveTaxRate.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm even:bg-[#F8F9FC] ">
              <th className=" border-x border-x-[#DEE2E6] px-2 py-4 text-left font-normal dark:bg-transparent">
                DVD Pay-out Ratio
              </th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.payoutRatio.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm even:bg-[#F8F9FC] ">
              <th className=" border-x border-x-[#DEE2E6] px-2 py-4 text-left font-normal dark:bg-transparent">
                Sustainable Growth Rate
              </th>

              {INCOME_STATEMENT_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.growthRate.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
