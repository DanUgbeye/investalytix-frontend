"use client";

import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const STOCK_FORECAST = [
  {
    date: new Date("2024-01-10"),
    company: "Redburn Atlantic",
    analyst: "Donald Doe",
    action: "Downgrade",
    from: "Buy",
    to: "Neutral",
  },
  {
    date: new Date("2023-11-24"),
    company: "Piper Sandler",
    analyst: "Donald Doe",
    action: "Downgrade",
    from: "Overweight",
    to: "Neutral",
  },
  {
    date: new Date("2023-11-16"),
    company: "DA Davidson",
    analyst: "Donald Doe",
    action: "Initialize",
    from: "",
    to: "Neutral",
  },
  {
    date: new Date("2023-11-03"),
    company: "Barclays",
    analyst: "Donald Doe",
    action: "Downgrade",
    from: "Equal-Weight",
    to: "Underweight",
  },
  {
    date: new Date("2023-11-03"),
    company: "Wedbush",
    analyst: "Donald Doe",
    action: "Reiterate",
    from: "Outperform",
    to: "Outperform",
  },
];

const ANALYST_CONSENSUS = {
  symbol: "AAPL",
  strongBuy: 0,
  buy: 22,
  hold: 9,
  sell: 2,
  strongSell: 0,
  consensus: "Strong Buy",
};

const data = [
  {
    name: "Buy",
    value: ANALYST_CONSENSUS.buy + ANALYST_CONSENSUS.strongBuy,
    color: "#008133",
  },
  { name: "Hold", value: ANALYST_CONSENSUS.hold, color: "#FF7E36" },
  {
    name: "Sell",
    value: ANALYST_CONSENSUS.sell + ANALYST_CONSENSUS.strongSell,
    color: "#8F79D4",
  },
];

const recommendation_trends_data = [
  {
    name: "Nov 23",
    sell: 5,
    strongSell: 6,
    hold: 5,
    buy: 1,
    strongBuy: 2,
  },
  {
    name: "Dec 23",
    sell: 1,
    strongSell: 6,
    hold: 0,
    buy: 10,
    strongBuy: 20,
  },
  {
    name: "Jan 24",
    sell: 10,
    strongSell: 6,
    hold: 5,
    buy: 1,
    strongBuy: 2,
  },
  {
    name: "Feb 24",
    sell: 2,
    strongSell: 1,
    hold: 10,
    buy: 6,
    strongBuy: 2,
  },
  {
    name: "Mar 24",
    sell: 10,
    strongSell: 3,
    hold: 5,
    buy: 4,
    strongBuy: 4,
  },
  {
    name: "Apr 24",
    sell: 4,
    strongSell: 8,
    hold: 20,
    buy: 4,
    strongBuy: 6,
  },
  {
    name: "May 24",
    sell: 1,
    strongSell: 2,
    hold: 2,
    buy: 10,
    strongBuy: 12,
  },
  {
    name: "Jun 24",
    sell: 10,
    strongSell: 12,
    hold: 2,
    buy: 1,
    strongBuy: 2,
  },
  {
    name: "Jul 24",
    sell: 20,
    strongSell: 2,
    hold: 2,
    buy: 1,
    strongBuy: 2,
  },
];

const RECOMMENDATION_COLORS = {
  sell: "#9500C9",
  strongSell: "#F94144",
  hold: "#F68500",
  buy: "#2D9CDB",
  strongBuy: "#90BE6D",
};

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

        <div className=" flex flex-wrap gap-3 rounded border border-primary-base bg-[#FFF3E9] px-6  py-3 text-xs dark:bg-primary-base/20 ">
          <div className=" flex flex-wrap items-center gap-x-8 gap-y-2 ">
            <span className=" ">See the Price Targets and Ratings of:</span>

            <fieldset className=" flex flex-wrap gap-x-5 ">
              <label
                htmlFor="all-analyst"
                className=" flex items-center gap-x-2 "
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
                className=" flex items-center gap-x-2 "
              >
                <input
                  name="analysts"
                  id="top-analyst"
                  type="radio"
                  className=" rounded-full "
                />
                <span>Top Analysts</span>
                <Button size={"sm"} className=" h-8 px-4 text-xs ">
                  Premium
                </Button>
              </label>
            </fieldset>
          </div>
        </div>
      </div>

      <div className=" grid gap-x-5 gap-y-10 lg:grid-cols-[auto,1fr] ">
        <div className=" space-y-3 lg:max-w-96 ">
          <h4 className=" font-bold sm:text-xl ">AAPL Analyst Ratings</h4>

          <div className=" grid min-h-80 grid-rows-[1fr,auto] border ">
            <div className=" space-y-4 py-4 ">
              <div className=" text-center text-lg font-bold ">
                {ANALYST_CONSENSUS.consensus}
              </div>

              <div className=" relative mx-auto grid w-fit place-items-center ">
                <PieChart width={300} height={250}>
                  <Pie
                    data={data}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={data[index].color} />
                    ))}
                  </Pie>
                  <Legend
                    iconType="square"
                    formatter={(value, entry, index) => {
                      return (
                        <span className=" ml-1 mr-3 text-xs sm:text-sm ">
                          {data[index].value} {value}
                        </span>
                      );
                    }}
                  />
                </PieChart>

                <span className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(50%+0.8rem)] text-xl font-bold ">
                  {20}%
                </span>
              </div>
            </div>

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

        <div className=" ">
          <ResponsiveContainer
            width="100%"
            height={350}
            className={" text-xs "}
          >
            <BarChart
              width={500}
              height={300}
              data={recommendation_trends_data}
              className=" !-ml-6"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis tickLine={false} dataKey="name" />
              <YAxis tickLine={false} />
              <Tooltip />
              <Legend iconType="circle" />
              <Bar
                dataKey="strongSell"
                stackId="a"
                maxBarSize={50}
                fill={RECOMMENDATION_COLORS["strongSell"]}
                name={"Strong Sell"}
              />
              <Bar
                dataKey="sell"
                stackId="a"
                maxBarSize={50}
                fill={RECOMMENDATION_COLORS["sell"]}
                name={"Sell"}
              />
              <Bar
                dataKey="hold"
                stackId="a"
                maxBarSize={50}
                fill={RECOMMENDATION_COLORS["hold"]}
                name={"Hold"}
              />
              <Bar
                dataKey="buy"
                stackId="a"
                maxBarSize={50}
                fill={RECOMMENDATION_COLORS["buy"]}
                name={"Buy"}
              />
              <Bar
                dataKey="strongBuy"
                stackId="a"
                maxBarSize={50}
                fill={RECOMMENDATION_COLORS["strongBuy"]}
                name={"Strong Buy"}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className=" space-y-5 ">
        <h5 className=" text-lg font-bold ">
          Apple Stock Forecast - Upgrades & Downgrades
        </h5>

        <div className=" space-y-20 ">
          <div className=" overflow-x-auto ">
            <table className="w-full min-w-[50rem] ">
              <thead>
                <tr className=" text-sm font-bold dark:bg-white/20 ">
                  <th className=" border px-2 py-4 text-left ">Date</th>

                  <th className=" border px-2 py-4 text-left ">Company</th>

                  <th className=" border px-2 py-4 text-left ">Analyst</th>

                  <th className=" border px-2 py-4 text-right ">Action</th>

                  <th className=" border px-2 py-4 text-right ">From</th>

                  <th className=" border px-2 py-4 text-right ">To</th>
                </tr>
              </thead>

              <tbody className=" ">
                {STOCK_FORECAST.map((item, index) => {
                  return (
                    <tr key={`forecast-${index}`} className=" text-sm ">
                      <td className=" white-text border px-2 py-4 text-left text-[#333333]">
                        {item.date.toDateString()}
                      </td>

                      <td className={` border px-2 py-4 text-left`}>
                        {item.company}
                      </td>

                      <td className={` border px-2 py-4 text-left`}>
                        {item.analyst}
                      </td>

                      <td className=" border px-2 py-4 text-right text-primary-base ">
                        {item.action}
                      </td>

                      <td className=" border px-2 py-4 text-right">
                        {item.from}
                      </td>

                      <td className=" border px-2 py-4 text-right">
                        {item.to}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
