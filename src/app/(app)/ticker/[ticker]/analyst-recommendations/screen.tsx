"use client";

import { Button } from "@/components/ui/button";
import { format } from "date-fns";

const STOCK_FORECAST = [
  {
    date: new Date("2024-01-10"),
    company: "Redburn Atlantic",
    action: "Downgrade",
    from: "Buy",
    to: "Neutral",
  },
  {
    date: new Date("2023-11-24"),
    company: "Piper Sandler",
    action: "Downgrade",
    from: "Overweight",
    to: "Neutral",
  },
  {
    date: new Date("2023-11-16"),
    company: "DA Davidson",
    action: "Initialize",
    from: "",
    to: "Neutral",
  },
  {
    date: new Date("2023-11-03"),
    company: "Barclays",
    action: "Downgrade",
    from: "Equal-Weight",
    to: "Underweight",
  },
  {
    date: new Date("2023-11-03"),
    company: "Wedbush",
    action: "Reiterate",
    from: "Outperform",
    to: "Outperform",
  },
];

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

interface AnalystRecommendationScreenProps {
  ticker: string;
}

export default function AnalystRecommendationScreen(
  props: AnalystRecommendationScreenProps
) {
  const { ticker } = props;

  return (
    <section className=" space-y-10 py-5 ">
      <div className=" space-y-5 ">
        <h2 className=" text-2xl font-semibold md:text-3xl ">
          Apple Stock Forecast & Price Target
        </h2>

        <div className=" flex flex-wrap gap-3 rounded bg-[#FFF3E9] px-6 py-3 text-xs ">
          <div className=" flex flex-wrap items-center gap-x-8 gap-y-2 ">
            <span className=" dark:text-black ">
              See the Price Targets and Ratings of:
            </span>

            <fieldset className=" flex flex-wrap gap-x-5 ">
              <label
                htmlFor="all-analyst"
                className=" flex items-center gap-x-2 dark:text-black "
              >
                <input
                  name="analysts"
                  id="all-analyst"
                  type="radio"
                  className=" rounded-full "
                />
                <span>All Analyst</span>
              </label>

              <label
                htmlFor="top-analyst"
                className=" flex items-center gap-x-2 dark:text-black "
              >
                <input
                  name="analysts"
                  id="top-analyst"
                  type="radio"
                  className=" rounded-full "
                />
                <span>Top Analysts</span>
                <Button size={"sm"} className=" h-8 px-4 ">
                  Premium
                </Button>
              </label>
            </fieldset>
          </div>
        </div>
      </div>

      <div className=" grid gap-x-5 gap-y-10 lg:grid-cols-[max-content,1fr] ">
        <div className=" space-y-3 lg:max-w-96 ">
          <h4 className=" font-bold sm:text-xl ">AAPL Analyst Ratings</h4>

          <div className=" grid min-h-80 grid-rows-[1fr,auto] border ">
            <div className=" bg-gray-600 "></div>

            <div className=" border-t p-2 text-center text-xs ">
              Based on 33 analyst giving stock ratings to Apple in the past 3
              months.
            </div>
          </div>
        </div>

        <div className=" space-y-3 ">
          <h4 className=" font-bold sm:text-xl ">
            AAPL Stock 12 Months Forecast
          </h4>

          <div className=" grid min-h-80 grid-rows-[1fr,auto] border ">
            <div className=" grid h-full grid-rows-[auto,1fr] gap-y-4 p-3 ">
              <div className=" grid items-center gap-3 xl:grid-cols-[auto,auto,1fr] ">
                <div className=" flex flex-col gap-y-1 text-[#008133] ">
                  <span className=" text-2xl font-bold sm:text-4xl ">
                    $201.99
                  </span>
                  <span className=" text-sm ">(5.62% )</span>
                </div>

                <div className=" h-px w-full bg-gray-400 xl:h-full xl:w-px " />

                <div className=" text-sm ">
                  Based on 33 Wall Street analysis offering 12 month price
                  targets for Apple in the last 3 months. The average price
                  target is $201.99 with a high forecast of $240.00 and a low
                  forecast of $150.00 The average price target represents a
                  5.62% change from the last price of $191.24.
                </div>
              </div>

              <div className=" min-h-40 bg-gray-600 "></div>
            </div>

            <div className=" flex flex-col flex-wrap border-t py-2 max-xl:divide-y xl:flex-row xl:divide-x ">
              <div className=" flex items-center gap-2 px-3 py-1 ">
                <span className=" text-sm ">High Price Target</span>
                <span className=" font-bold text-[#008133] xl:text-2xl ">
                  $240.00
                </span>
              </div>

              <div className=" flex items-center gap-2 px-3 py-1 ">
                <span className=" text-sm ">Average Price Target</span>
                <span className=" font-bold xl:text-2xl ">$240.00</span>
              </div>

              <div className=" flex items-center gap-2 px-3 py-1 ">
                <span className=" text-sm ">Lowest Price Target</span>
                <span className=" font-bold text-[#9500C9] xl:text-2xl ">
                  $150.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" space-y-5 ">
        <div className=" space-y-2 ">
          <h5 className=" text-lg font-bold ">Recommendation Trends</h5>

          <p className="  ">
            The latest consensus rating for Apple is &apos;Buy&apos;. This is
            the average recommendation of 48 analysts: 0 strong sell, 1 sell, 13
            hold, 22 buy, 12 strong buy. In the previous period, 50 analysts
            also majorly recommended &apos;Buy&apos; for Apple.
          </p>
        </div>

        <div className=" h-60 bg-gray-600 "></div>
      </div>

      <div className="  ">
        <h5 className=" text-lg font-bold ">
          Apple Stock Forecast - Upgrades & Downgrades
        </h5>

        <div className=" mb-20 overflow-x-auto ">
          <table className="w-full  min-w-[50rem] ">
            <thead>
              <tr className=" divide-x border-b border-b-[#DEE2E6] text-sm font-bold ">
                <th className=" px-2 py-4 text-left dark:bg-transparent">
                  Date
                </th>

                <th className=" px-2 py-4 text-left dark:bg-transparent">
                  Company
                </th>

                <th className=" px-2 py-4 text-right dark:bg-transparent">
                  Action
                </th>

                <th className=" px-2 py-4 text-right dark:bg-transparent">
                  From
                </th>

                <th className=" px-2 py-4 text-right dark:bg-transparent">
                  To
                </th>
              </tr>
            </thead>

            <tbody>
              {STOCK_FORECAST.map((item, index) => {
                return (
                  <tr key={`forecast-${index}`} className=" text-sm ">
                    <td className=" px-2 py-4 text-left text-[#333333] dark:text-white">
                      {item.date.toDateString()}
                    </td>

                    <td className={` px-2 py-4 text-left`}>{item.company}</td>

                    <td className=" px-2 py-4 text-right text-primary-base ">
                      {item.action}
                    </td>

                    <td className=" px-2 py-4 text-right">{item.from}</td>

                    <td className=" px-2 py-4 text-right">{item.to}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

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
      </div>
    </section>
  );
}
