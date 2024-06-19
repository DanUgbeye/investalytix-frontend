"use client";

import HeaderWithUnderline from "@/components/heading";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CompanyProfile,
  TickerAnalystRecommendation,
  TickerUpgradeDowngradeConsensus,
  TickerUpgradesDowngrades,
} from "@/modules/ticker/types";
import useTheme from "@/store/theme/useTheme";
import { format } from "date-fns";
import { Minus, Plus } from "lucide-react";
import { useMemo, useState } from "react";
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

const RECOMMENDATION_COLORS = {
  strongSell: "#A43E35",
  sell: "#FB3827",
  hold: "#4DD0E1",
  buy: "#49DA70",
  strongBuy: "#258D41",
};

const ANALYST_RATING_COLORS = {
  sell: "#EB4335",
  strongSell: "#EB4335",
  hold: "#F57F17",
  buy: "#008133",
  strongBuy: "#008133",
};

interface AnalystRecommendationScreenProps {
  ticker: string;
  profile: CompanyProfile;
  consensus: TickerUpgradeDowngradeConsensus;
  analystRecommendation: TickerAnalystRecommendation[];
  upgradesDowngrades: TickerUpgradesDowngrades[];
}

export default function AnalystRecommendationScreen(
  props: AnalystRecommendationScreenProps
) {
  const {
    ticker,
    analystRecommendation,
    consensus,
    profile,
    upgradesDowngrades,
  } = props;
  const { theme } = useTheme();
  const [showAllUpgrades, setShowAllUpgrades] = useState(false);

  const totalRatings = useMemo(() => {
    const { buy, hold, sell, strongBuy, strongSell } = consensus;
    return buy + hold + sell + strongBuy + strongSell;
  }, [consensus]);

  const analystRatings = useMemo(() => {
    return [
      {
        name: "Buy",
        value: consensus.buy + consensus.strongBuy,
        color: "#008133",
      },
      { name: "Hold", value: consensus.hold, color: "#F57F17" },
      {
        name: "Sell",
        value: consensus.sell + consensus.strongSell,
        color: "#EB4335",
      },
    ];
  }, [consensus]);

  const analystRecommendationTrend = useMemo(() => {
    return analystRecommendation.slice(0, 13).map((rec) => ({
      date: rec.date,
      strongBuy: rec.analystRatingsStrongBuy,
      buy: rec.analystRatingsbuy,
      hold: rec.analystRatingsHold,
      sell: rec.analystRatingsSell,
      strongSell: rec.analystRatingsStrongSell,
    }));
  }, [analystRecommendation]);

  const analystUpgradesDowngrades = useMemo(() => {
    return upgradesDowngrades
      .filter(
        (ud) =>
          new Date(ud.publishedDate).getFullYear() === new Date().getFullYear()
      )
      .slice(0, showAllUpgrades ? -1 : 11);
  }, [upgradesDowngrades, showAllUpgrades]);

  function handleShowMoreUpgrades() {
    setShowAllUpgrades((prev) => !prev);
  }

  return (
    <section className=" space-y-10 py-5 ">
      <div className=" space-y-5 ">
        <HeaderWithUnderline>
          {profile.companyName} Forecast & Price Target
        </HeaderWithUnderline>

        {/* <div className=" flex flex-wrap gap-3 rounded px-6 py-3 text-xs ">
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
        </div> */}
      </div>

      <div className=" grid gap-x-10 gap-y-10 lg:grid-cols-[auto,1fr] ">
        <div className=" space-y-3 lg:max-w-96 ">
          <h4 className=" w-full border-b pb-2 text-sm font-bold dark:border-main-gray-700  ">
            {profile.symbol} Analyst Ratings
          </h4>

          <div className=" grid min-h-80 grid-rows-[1fr,auto] ">
            <div className=" space-y-1 py-4 ">
              <div
                className={" text-center text-2xl font-extrabold "}
                style={{
                  color:
                    ANALYST_RATING_COLORS[
                      consensus.consensus.toLowerCase() as keyof typeof ANALYST_RATING_COLORS
                    ],
                }}
              >
                {consensus.consensus}
              </div>

              <div className=" relative mx-auto grid w-fit place-items-center ">
                <PieChart width={300} height={230}>
                  <Pie
                    data={analystRatings}
                    innerRadius={60}
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value"
                    stroke="none"
                    paddingAngle={4}
                  >
                    {analystRatings.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={analystRatings[index].color}
                      />
                    ))}
                  </Pie>

                  <Legend
                    iconType="square"
                    formatter={(value, entry, index) => {
                      return (
                        <span className=" ml-1 mr-3 text-xs sm:text-sm ">
                          {analystRatings[index].value} {value}
                        </span>
                      );
                    }}
                  />
                </PieChart>

                <div className=" absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-[calc(50%+0.8rem)] flex-col items-center text-2xl font-bold ">
                  <span>{totalRatings}</span>
                  <span className=" text-xs font-light">Ratings</span>
                </div>
              </div>
            </div>

            {/* <div className=" border-t p-2 text-center text-xs dark:border-main-gray-600 ">
              Based on 33 analyst giving stock ratings to Apple in the past 3
              months.
            </div> */}
          </div>
        </div>

        <div className=" space-y-3 ">
          <h4 className=" w-full border-b pb-2 text-sm font-bold dark:border-main-gray-700 ">
            {profile.symbol} Stock 12 Months Forecast
          </h4>

          <div className=" grid min-h-80 grid-rows-[1fr,auto] ">
            <div className=" grid h-full grid-rows-[auto,1fr] gap-y-4 p-3 ">
              <div className=" grid items-center gap-3 xl:grid-cols-[auto,auto,1fr] ">
                <div className=" flex flex-col gap-y-1 text-[#008133] ">
                  <span className=" text-2xl font-bold sm:text-4xl ">
                    $201.99
                  </span>
                  <span className=" text-sm ">(5.62% )</span>
                </div>

                <div className=" h-px w-full border xl:h-full xl:w-px dark:border-main-gray-600 " />

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

            <div className=" flex flex-col flex-wrap divide-inherit border-t py-2 max-xl:divide-y xl:flex-row xl:divide-x dark:border-main-gray-700 ">
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
          <h5 className=" text-xl font-bold ">Recommendation Trends</h5>

          <p className="  ">
            The latest consensus rating for Apple is &apos;
            {consensus.consensus}&apos;. This is the average recommendation of{" "}
            {totalRatings} analysts: {consensus.strongSell} strong sell,{" "}
            {consensus.sell} sell, {consensus.hold}
            hold, {consensus.buy} buy, {consensus.strongBuy} strong buy. In the
            previous period, 50 analysts also majorly recommended
            &apos;Buy&apos; for Apple.
          </p>
        </div>

        <div className=" ">
          <ResponsiveContainer
            width="100%"
            height={200}
            className={" text-sm "}
          >
            <BarChart data={analystRecommendationTrend} className=" ">
              <CartesianGrid
                vertical={false}
                strokeDasharray="3 3"
                className=" stroke-main-gray-200 dark:stroke-main-gray-700 "
              />

              <XAxis
                tickLine={false}
                axisLine={false}
                dataKey="date"
                tickFormatter={(value) => format(new Date(value), "MMM yy")}
              />

              <YAxis tickLine={false} axisLine={false} orientation="right" />

              <Tooltip
                cursor={{
                  className: " fill-main-gray-200/30 dark:fill-white/10 ",
                }}
                content={(props) => {
                  const { payload, label } = props;

                  return (
                    <div className=" space-y-2 rounded bg-main-gray-700 p-2 text-main-gray-300 ">
                      {label && (
                        <div className="  ">
                          {format(new Date(label), "MMM yy")}
                        </div>
                      )}

                      <div className="">
                        {payload &&
                          payload.map((pl, index) => {
                            const { name, value, color } = pl;

                            return (
                              <div
                                key={`${value}-${index}`}
                                className=" flex items-center gap-2 text-main-gray-300 "
                              >
                                <span
                                  className=" size-3 "
                                  style={{ backgroundColor: color }}
                                />
                                <span>
                                  {name}: {value}
                                </span>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  );
                }}
              />

              <Legend
                content={(props) => {
                  const { payload } = props;

                  return (
                    <div className=" flex items-center gap-x-4 py-2 sm:justify-center ">
                      {payload &&
                        payload.map((pl, index) => {
                          const { value, color } = pl;

                          return (
                            <span
                              key={`${value}`}
                              className=" text-black dark:text-main-gray-300 "
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  width: 12,
                                  height: 12,
                                  backgroundColor: color,
                                  marginRight: 8,
                                }}
                              ></span>

                              {value}
                            </span>
                          );
                        })}
                    </div>
                  );
                }}
              />

              <Bar
                dataKey="strongSell"
                stackId="a"
                maxBarSize={40}
                fill={RECOMMENDATION_COLORS["strongSell"]}
                name={"Strong Sell"}
              />

              <Bar
                dataKey="sell"
                stackId="a"
                maxBarSize={40}
                fill={RECOMMENDATION_COLORS["sell"]}
                name={"Sell"}
              />

              <Bar
                dataKey="hold"
                stackId="a"
                maxBarSize={40}
                fill={RECOMMENDATION_COLORS["hold"]}
                name={"Hold"}
              />

              <Bar
                dataKey="buy"
                stackId="a"
                maxBarSize={40}
                fill={RECOMMENDATION_COLORS["buy"]}
                name={"Buy"}
              />

              <Bar
                dataKey="strongBuy"
                stackId="a"
                maxBarSize={40}
                fill={RECOMMENDATION_COLORS["strongBuy"]}
                name={"Strong Buy"}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className=" space-y-5 ">
        <h5 className=" text-xl font-bold ">
          Apple Stock Forecast - Upgrades & Downgrades
        </h5>

        <div className="  ">
          <div className=" overflow-x-auto ">
            <Table className="w-full min-w-[50rem] ">
              <TableHeader>
                <TableRow headerRow>
                  <TableCell className=" py-4 text-left ">Date</TableCell>

                  <TableCell className=" py-4 text-left ">Company</TableCell>

                  <TableCell className=" py-4 text-left ">Analyst</TableCell>

                  <TableCell className=" py-4 text-right ">Action</TableCell>

                  <TableCell className=" py-4 text-right ">From</TableCell>

                  <TableCell className=" py-4 text-right ">To</TableCell>
                </TableRow>
              </TableHeader>

              <TableBody className=" ">
                {analystUpgradesDowngrades.map((item, index) => {
                  return (
                    <TableRow key={`forecast-${index}`}>
                      <TableCell className=" white-text text-left text-[#333333]">
                        {item.publishedDate.toDateString()}
                      </TableCell>

                      <TableCell className={` text-left`}>
                        {item.gradingCompany}
                      </TableCell>

                      <TableCell className={` text-left`}>
                        {item.newsPublisher}
                      </TableCell>

                      <TableCell className=" text-right capitalize text-primary-base ">
                        {item.action}
                      </TableCell>

                      <TableCell className=" text-right">
                        {item.previousGrade}
                      </TableCell>

                      <TableCell className=" text-right">
                        {item.newGrade}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>

          <div className=" flex justify-center ">
            <Button
              variant={"link"}
              className=" gap-x-2 text-primary-base hover:no-underline dark:text-primary-base "
              onClick={handleShowMoreUpgrades}
            >
              {showAllUpgrades ? (
                <>
                  <Minus className=" size-4 " />
                  Show Less
                </>
              ) : (
                <>
                  <Plus className=" size-4 " />
                  Show More
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
