"use client";

export const INCOME_STATEMENT_DATA = [
  {
    date: new Date(2019, 8, 27),
    salesRevenue: 33.61,
    revenueCost: 18.01,
    costOfGoods: 27.7,
    grossProfit: 29.68,
    operatingExpense: 33.61,
    sga: 18.01,
    researchDevelopment: 18.01,
    otherOperatingExpenses: 29.68,
    pretaxMargin: 29.68,
    incomeBeforeMargin: 18.01,
    netIncomeMargin: 27.7,
    netIncomeToCommonMargin: 29.68,
    effectiveTaxRate: 33.61,
    payoutRatio: 18.01,
    growthRate: 27.7,
  },
  {
    date: new Date(2020, 8, 27),
    salesRevenue: 33.61,
    revenueCost: 18.01,
    costOfGoods: 27.7,
    grossProfit: 29.68,
    operatingExpense: 33.61,
    sga: 18.01,
    researchDevelopment: 18.01,
    otherOperatingExpenses: 29.68,
    pretaxMargin: 29.68,
    incomeBeforeMargin: 18.01,
    netIncomeMargin: 27.7,
    netIncomeToCommonMargin: 29.68,
    effectiveTaxRate: 33.61,
    payoutRatio: 18.01,
    growthRate: 27.7,
  },
  {
    date: new Date(2021, 8, 25),
    salesRevenue: 33.61,
    revenueCost: 18.01,
    costOfGoods: 27.7,
    grossProfit: 29.68,
    operatingExpense: 33.61,
    sga: 18.01,
    researchDevelopment: 18.01,
    otherOperatingExpenses: 29.68,
    pretaxMargin: 29.68,
    incomeBeforeMargin: 18.01,
    netIncomeMargin: 27.7,
    netIncomeToCommonMargin: 29.68,
    effectiveTaxRate: 33.61,
    payoutRatio: 18.01,
    growthRate: 27.7,
  },
  {
    date: new Date(2022, 8, 28),
    salesRevenue: 33.61,
    revenueCost: 18.01,
    costOfGoods: 27.7,
    grossProfit: 29.68,
    operatingExpense: 33.61,
    sga: 18.01,
    researchDevelopment: 18.01,
    otherOperatingExpenses: 29.68,
    pretaxMargin: 29.68,
    incomeBeforeMargin: 18.01,
    netIncomeMargin: 27.7,
    netIncomeToCommonMargin: 29.68,
    effectiveTaxRate: 33.61,
    payoutRatio: 18.01,
    growthRate: 27.7,
  },
  {
    date: new Date(2023, 8, 26),
    salesRevenue: 33.61,
    revenueCost: 18.01,
    costOfGoods: 27.7,
    grossProfit: 29.68,
    operatingExpense: 33.61,
    sga: 18.01,
    researchDevelopment: 18.01,
    otherOperatingExpenses: 29.68,
    pretaxMargin: 29.68,
    incomeBeforeMargin: 18.01,
    netIncomeMargin: 27.7,
    netIncomeToCommonMargin: 29.68,
    effectiveTaxRate: 33.61,
    payoutRatio: 18.01,
    growthRate: 27.7,
  },
  {
    date: new Date(2024, 8, 27),
    salesRevenue: 33.61,
    revenueCost: 18.01,
    costOfGoods: 27.7,
    grossProfit: 29.68,
    operatingExpense: 33.61,
    sga: 18.01,
    researchDevelopment: 18.01,
    otherOperatingExpenses: 29.68,
    pretaxMargin: 29.68,
    incomeBeforeMargin: 18.01,
    netIncomeMargin: 27.7,
    netIncomeToCommonMargin: 29.68,
    effectiveTaxRate: 33.61,
    payoutRatio: 18.01,
    growthRate: 27.7,
  },
];

interface IncomeStatementScreenProps {
  ticker: string;
}

export default function IncomeStatementScreen(
  props: IncomeStatementScreenProps
) {
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
