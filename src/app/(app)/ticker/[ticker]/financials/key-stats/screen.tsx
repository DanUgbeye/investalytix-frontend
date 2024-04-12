"use client";

import { format } from "date-fns";

const STOCK_FORECAST_DATA = [
  {
    date: new Date(2019, 8, 27),
    mrktCap: 972_269.0,
    cashEquivalent: 205_898,
    preferredOther: 0.0,
    totalDebt: 108_047.0,
    enterpriseValue: 874_418.0,
    revenueAdj: 1_574_418.0,
    growthPercentageYOY: 18.01,
    grossProfitAdj: 474_418.0,
    marginPercentage: 29.68,
    ebitdaAdj: 574_418.0,
    epsAdj: 27.7,
    cashFromOperations: 874_418.0,
    capitalExpenditures: 874_418.0,
    freeCashFlow: 874_418.0,
  },
  {
    date: new Date(2020, 8, 27),
    mrktCap: 972_269.0,
    cashEquivalent: 205_898,
    preferredOther: 0.0,
    totalDebt: 108_047.0,
    enterpriseValue: 874_418.0,
    revenueAdj: 1_574_418.0,
    growthPercentageYOY: 18.01,
    grossProfitAdj: 474_418.0,
    marginPercentage: 29.68,
    ebitdaAdj: 574_418.0,
    epsAdj: 27.7,
    cashFromOperations: 874_418.0,
    capitalExpenditures: 874_418.0,
    freeCashFlow: 874_418.0,
  },
  {
    date: new Date(2021, 8, 25),
    mrktCap: 972_269.0,
    cashEquivalent: 205_898,
    preferredOther: 0.0,
    totalDebt: 108_047.0,
    enterpriseValue: 874_418.0,
    revenueAdj: 1_574_418.0,
    growthPercentageYOY: 18.01,
    grossProfitAdj: 474_418.0,
    marginPercentage: 29.68,
    ebitdaAdj: 574_418.0,
    epsAdj: 27.7,
    cashFromOperations: 874_418.0,
    capitalExpenditures: 874_418.0,
    freeCashFlow: 874_418.0,
  },
  {
    date: new Date(2022, 8, 28),
    mrktCap: 972_269.0,
    cashEquivalent: 205_898,
    preferredOther: 0.0,
    totalDebt: 108_047.0,
    enterpriseValue: 874_418.0,
    revenueAdj: 1_574_418.0,
    growthPercentageYOY: 18.01,
    grossProfitAdj: 474_418.0,
    marginPercentage: 29.68,
    ebitdaAdj: 574_418.0,
    epsAdj: 27.7,
    cashFromOperations: 874_418.0,
    capitalExpenditures: 874_418.0,
    freeCashFlow: 874_418.0,
  },
  {
    date: new Date(2023, 8, 26),
    mrktCap: 972_269.0,
    cashEquivalent: 205_898,
    preferredOther: 0.0,
    totalDebt: 108_047.0,
    enterpriseValue: 874_418.0,
    revenueAdj: 1_574_418.0,
    growthPercentageYOY: 18.01,
    grossProfitAdj: 474_418.0,
    marginPercentage: 29.68,
    ebitdaAdj: 574_418.0,
    epsAdj: 27.7,
    cashFromOperations: 874_418.0,
    capitalExpenditures: 874_418.0,
    freeCashFlow: 874_418.0,
  },
  {
    date: new Date(2024, 8, 27),
    mrktCap: 972_269.0,
    cashEquivalent: 205_898,
    preferredOther: 0.0,
    totalDebt: 108_047.0,
    enterpriseValue: 874_418.0,
    revenueAdj: 1_574_418.0,
    growthPercentageYOY: 18.01,
    grossProfitAdj: 474_418.0,
    marginPercentage: 29.68,
    ebitdaAdj: 574_418.0,
    epsAdj: 27.7,
    cashFromOperations: 874_418.0,
    capitalExpenditures: 874_418.0,
    freeCashFlow: 874_418.0,
  },
  {
    date: new Date(2025, 8, 30),
    mrktCap: 972_269.0,
    cashEquivalent: 205_898,
    preferredOther: 0.0,
    totalDebt: 108_047.0,
    enterpriseValue: 874_418.0,
    revenueAdj: 1_574_418.0,
    growthPercentageYOY: 18.01,
    grossProfitAdj: 474_418.0,
    marginPercentage: 29.68,
    ebitdaAdj: 574_418.0,
    epsAdj: 27.7,
    cashFromOperations: 874_418.0,
    capitalExpenditures: 874_418.0,
    freeCashFlow: 874_418.0,
  },
  {
    date: new Date(2026, 8, 30),
    mrktCap: 972_269.0,
    cashEquivalent: 205_898,
    preferredOther: 0.0,
    totalDebt: 108_047.0,
    enterpriseValue: 874_418.0,
    revenueAdj: 1_574_418.0,
    growthPercentageYOY: 18.01,
    grossProfitAdj: 474_418.0,
    marginPercentage: 29.68,
    ebitdaAdj: 574_418.0,
    epsAdj: 27.7,
    cashFromOperations: 874_418.0,
    capitalExpenditures: 874_418.0,
    freeCashFlow: 874_418.0,
  },
];

interface KeyStatsScreenProps {
  ticker: string;
}

export default function KeyStatsScreen(props: KeyStatsScreenProps) {
  const { ticker } = props;

  return (
    <section className=" ">
      <div className=" overflow-x-auto ">
        <table className=" w-full min-w-[50rem] border-b border-r border-[#DEE2E6] ">
          <tbody>
            <tr className="  text-sm font-bold ">
              <th className=" border-r border-r-[#DEE2E6] px-2 py-4 text-left dark:bg-transparent"></th>

              {STOCK_FORECAST_DATA.map((data, index) => {
                const year = new Date(data.date).getFullYear();
                const text =
                  year === new Date().getFullYear() ? "Current / Est" : year;

                return (
                  <td
                    key={`${year}-${index}`}
                    className=" border-y border-y-[#DEE2E6] px-2 py-4 text-center dark:bg-transparent"
                  >
                    {text}
                  </td>
                );
              })}
            </tr>

            <tr className="  text-sm font-bold ">
              <th className=" border-r border-r-[#DEE2E6] px-2 py-4 text-left dark:bg-transparent"></th>

              {STOCK_FORECAST_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" border-y border-y-[#DEE2E6] px-2 py-4 text-center dark:bg-transparent"
                  >
                    {format(new Date(data.date), "MMM dd")}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm ">
              <th className=" border border-[#DEE2E6] px-2 py-4 text-left font-bold dark:bg-transparent">
                Market Capitalization
              </th>

              {STOCK_FORECAST_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.mrktCap.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm ">
              <th className=" border border-[#DEE2E6] px-2 py-4 text-left font-bold dark:bg-transparent">
                Cash Equivalent
              </th>

              {STOCK_FORECAST_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.cashEquivalent.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm ">
              <th className=" border border-[#DEE2E6] px-2 py-4 text-left font-bold dark:bg-transparent">
                Preferred & Other
              </th>

              {STOCK_FORECAST_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.preferredOther.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm ">
              <th className=" border border-[#DEE2E6] px-2 py-4 text-left font-bold dark:bg-transparent">
                Total Debt
              </th>

              {STOCK_FORECAST_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.totalDebt.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm ">
              <th className=" border border-[#DEE2E6] px-2 py-4 text-left font-bold dark:bg-transparent">
                Enterprise Value
              </th>

              {STOCK_FORECAST_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.enterpriseValue.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm ">
              <th className=" border border-[#DEE2E6] px-2 py-4 text-left font-bold dark:bg-transparent"></th>
            </tr>

            <tr className=" text-sm ">
              <th className=" border border-[#DEE2E6] px-2 py-4 text-left font-bold dark:bg-transparent">
                Revenue ADJ
              </th>

              {STOCK_FORECAST_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.revenueAdj.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm ">
              <th className=" border border-[#DEE2E6] px-2 py-4 text-left font-bold dark:bg-transparent">
                Growth % YoY
              </th>

              {STOCK_FORECAST_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.growthPercentageYOY.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm ">
              <th className=" border border-[#DEE2E6] px-2 py-4 text-left font-bold dark:bg-transparent">
                Gross Profit, ADJ
              </th>

              {STOCK_FORECAST_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.grossProfitAdj.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm ">
              <th className=" border border-[#DEE2E6] px-2 py-4 text-left font-bold dark:bg-transparent">
                Margin %
              </th>

              {STOCK_FORECAST_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.marginPercentage.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm ">
              <th className=" border border-[#DEE2E6] px-2 py-4 text-left font-bold dark:bg-transparent">
                EBITDA, Adj
              </th>

              {STOCK_FORECAST_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.ebitdaAdj.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm ">
              <th className=" border border-[#DEE2E6] px-2 py-4 text-left font-bold dark:bg-transparent">
                EPS Adj
              </th>

              {STOCK_FORECAST_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.epsAdj.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm ">
              <th className=" border border-[#DEE2E6] px-2 py-4 text-left font-bold dark:bg-transparent">
                Cash From Operations
              </th>

              {STOCK_FORECAST_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.cashFromOperations.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm ">
              <th className=" border border-[#DEE2E6] px-2 py-4 text-left font-bold dark:bg-transparent">
                Capital Expenditures
              </th>

              {STOCK_FORECAST_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.capitalExpenditures.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </td>
                );
              })}
            </tr>

            <tr className=" text-sm ">
              <th className=" border border-[#DEE2E6] px-2 py-4 text-left font-bold dark:bg-transparent">
                Free Cash Flow
              </th>

              {STOCK_FORECAST_DATA.map((data, index) => {
                return (
                  <td
                    key={`forecast-month-${index}`}
                    className=" px-2 py-4 text-right dark:bg-transparent"
                  >
                    {data.freeCashFlow.toLocaleString(undefined, {
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
