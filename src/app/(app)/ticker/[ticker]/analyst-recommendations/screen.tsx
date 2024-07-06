"use client";

import ColoredText from "@/components/colored-text";
import HeaderWithUnderline from "@/components/heading";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import tickerUtils from "@/modules/ticker/utils";
import { useAppStore } from "@/store";
import useTheme from "@/store/theme/useTheme";
import appUtils from "@/utils/app-util";
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
import AnalystForcastChart from "./analyst-forcast-chart";
import { AnalystRecommendationPageData } from "./page";

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

interface AnalystRecommendationScreenProps
  extends AnalystRecommendationPageData {
  ticker: string;
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
    priceTargetConsensus,
    priceTargetSummary,
    priceTarget,
    quoteHistory,
  } = props;
  const { theme } = useTheme();
  const isAuthenticated = useAppStore(({ auth }) => auth !== undefined);
  const { toggleLoginModal } = useAppStore();
  const [showAllUpgrades, setShowAllUpgrades] = useState(false);

  const totalRatings = useMemo(() => {
    if (!consensus) return undefined;
    const { buy, hold, sell, strongBuy, strongSell } = consensus;
    return buy + hold + sell + strongBuy + strongSell;
  }, [consensus]);

  const analystRatings = useMemo(() => {
    if (!consensus)
      return [
        {
          name: "Buy",
          value: 0,
          percentage: 0,
          color: "#008133",
        },
        { name: "Hold", value: 0, percentage: 0, color: "#F57F17" },
        {
          name: "Sell",
          value: 0,
          percentage: 0,
          color: "#EB4335",
        },
      ];

    return [
      {
        name: "Buy",
        value: consensus.buy + consensus.strongBuy,
        percentage: totalRatings
          ? ((consensus.buy + consensus.strongBuy) / totalRatings) * 100
          : 0,
        color: "#008133",
      },
      {
        name: "Hold",
        value: consensus.hold,
        percentage: totalRatings ? (consensus.hold / totalRatings) * 100 : 0,
        color: "#F57F17",
      },
      {
        name: "Sell",
        value: consensus.sell + consensus.strongSell,
        percentage: totalRatings
          ? ((consensus.sell + consensus.strongSell) / totalRatings) * 100
          : 0,
        color: "#EB4335",
      },
    ];
  }, [consensus, totalRatings]);

  const analystRecommendationTrend = useMemo(() => {
    return analystRecommendation
      .slice(0, 13)
      .toReversed()
      .map((rec) => ({
        date: rec.date,
        strongBuy: rec.analystRatingsStrongBuy,
        buy: rec.analystRatingsbuy,
        hold: rec.analystRatingsHold,
        sell: rec.analystRatingsSell,
        strongSell: rec.analystRatingsStrongSell,
      }));
  }, [analystRecommendation]);

  const upgradesDowngradesWithPriceTarget = useMemo(() => {
    return tickerUtils.combineTickerUpgradesDowngradesAndPriceTargets(
      upgradesDowngrades,
      priceTarget
    );
  }, [priceTarget, upgradesDowngrades]);

  const analystUpgradesDowngradesToDisplay = useMemo(() => {
    return upgradesDowngradesWithPriceTarget.slice(
      0,
      showAllUpgrades ? -1 : 11
    );
  }, [upgradesDowngradesWithPriceTarget, showAllUpgrades]);

  const priceTargetPercentage = useMemo(() => {
    if (!priceTargetConsensus || !profile || !profile.price) return undefined;

    return (
      ((priceTargetConsensus.targetMedian - profile.price) / profile.price) *
      100
    );
  }, [priceTargetConsensus, profile]);

  function handleShowMoreUpgrades() {
    if (isAuthenticated) {
      setShowAllUpgrades((prev) => !prev);
    } else {
      toggleLoginModal();
    }
  }

  return (
    <section className="space-y-10 py-5">
      <div className="space-y-5">
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

      <div
        className={cn("grid gap-x-10 gap-y-10 xl:grid-cols-[auto,1fr]", {
          "grid-cols-1": !consensus,
        })}
      >
        {consensus && (
          <div className="space-y-3 xl:max-w-96">
            <h4 className="w-full border-b pb-2 text-sm font-bold dark:border-main-gray-700">
              {profile.symbol} Analyst Ratings
            </h4>

            <div className="grid min-h-80 grid-rows-[1fr,auto]">
              <div className="space-y-2 py-4">
                <div
                  className={"text-center text-2xl font-extrabold xl:text-3xl"}
                  style={{
                    color:
                      ANALYST_RATING_COLORS[
                        consensus.consensus.toLowerCase() as keyof typeof ANALYST_RATING_COLORS
                      ],
                  }}
                >
                  {consensus.consensus}
                </div>

                <div className="relative mx-auto grid w-fit place-items-center">
                  <PieChart width={300} height={280}>
                    <Pie
                      data={analystRatings}
                      innerRadius={60}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      stroke="none"
                      paddingAngle={2}
                    >
                      {analystRatings.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={analystRatings[index].color}
                        />
                      ))}
                    </Pie>

                    <Legend
                      content={(props) => {
                        const { payload } = props;

                        return (
                          <div className="flex flex-wrap items-center justify-center gap-x-4 pt-5">
                            {payload &&
                              payload.map((pl, index) => {
                                const { value, color } = pl;

                                return (
                                  <span
                                    key={`${value}`}
                                    className="text-black dark:text-main-gray-300"
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

                    <Tooltip
                      cursor={{
                        className: "  ",
                      }}
                      content={(props) => {
                        const { payload, label } = props;

                        return (
                          <div className="w-[10rem] rounded bg-main-gray-700 p-2 text-main-gray-300">
                            {payload &&
                              payload.map((pl, index) => {
                                const {
                                  name,
                                  value,
                                  payload: itemPayload,
                                } = pl;

                                return (
                                  <div
                                    key={`${value}-${index}`}
                                    className="flex w-full flex-col text-sm text-main-gray-300"
                                  >
                                    <div className="flex w-full items-center gap-2">
                                      <span
                                        className="size-3"
                                        style={{
                                          backgroundColor: itemPayload.color,
                                        }}
                                      />

                                      <span>{name}</span>
                                    </div>

                                    <div className="flex w-full justify-between gap-2">
                                      <div className=" ">Ratings:</div>
                                      <div>{value}</div>
                                    </div>

                                    <div className="flex w-full justify-between gap-2">
                                      <div className=" ">Percentage:</div>
                                      <div>
                                        {appUtils.formatNumber(
                                          itemPayload.percentage as number,
                                          { style: "decimal" }
                                        )}
                                        %
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        );
                      }}
                    />
                  </PieChart>
                </div>
              </div>

              <div className="border-t p-2 text-sm max-xl:text-center dark:border-main-gray-700">
                Based on {totalRatings} analyst giving stock ratings to{" "}
                {profile.companyName} in the past 3 months.
              </div>
            </div>
          </div>
        )}

        <div className="space-y-3">
          <h4 className="w-full border-b pb-2 text-sm font-bold dark:border-main-gray-700">
            {profile.symbol} Stock 12 Months Forecast
          </h4>

          <div className="grid min-h-80 grid-rows-[1fr,auto]">
            <div className="grid h-full grid-rows-[auto,1fr] gap-y-4 p-3">
              <div className="grid items-center gap-3 xl:grid-cols-[auto,auto,1fr]">
                <ColoredText
                  isPositive={() => {
                    if (!priceTargetPercentage || priceTargetPercentage === 0)
                      return undefined;
                    if (priceTargetPercentage > 0) return true;
                    return false;
                  }}
                  className="flex flex-col gap-y-1 text-[#008133]"
                >
                  <span className="text-2xl font-bold sm:text-4xl">
                    {appUtils.formatNumber(priceTargetConsensus.targetMedian, {
                      currency: profile.currency || undefined,
                    })}
                  </span>

                  <span className="text-sm">
                    (
                    {priceTargetPercentage
                      ? `${appUtils.formatNumber(priceTargetPercentage, { style: "decimal" })}%`
                      : "-"}
                    )
                  </span>
                </ColoredText>

                <div className="h-px w-full border xl:h-full xl:w-px dark:border-main-gray-700" />

                <div className="text-sm">
                  Based on {priceTargetSummary?.lastYear} Wall Street analysis
                  offering 1 year price targets for {profile?.companyName} The
                  average price target is{" "}
                  {appUtils.formatNumber(priceTargetConsensus?.targetMedian, {
                    currency: profile.currency || undefined,
                  })}{" "}
                  with a high forecast of{" "}
                  {appUtils.formatNumber(priceTargetConsensus?.targetHigh, {
                    currency: profile.currency || undefined,
                  })}{" "}
                  and a low forecast of{" "}
                  {appUtils.formatNumber(priceTargetConsensus?.targetLow, {
                    currency: profile.currency || undefined,
                  })}{" "}
                  The average price target represents a{" "}
                  {priceTargetPercentage
                    ? `${appUtils.formatNumber(priceTargetPercentage, { style: "decimal" })}%`
                    : "-"}{" "}
                  change from the last price of{" "}
                  {appUtils.formatNumber(profile?.price, {
                    currency: profile.currency || undefined,
                  })}
                </div>
              </div>

              <div className="h-64 w-full min-w-0">
                <AnalystForcastChart
                  ticker={ticker}
                  priceTargetConsensus={priceTargetConsensus}
                  quoteHistory={quoteHistory}
                />
              </div>
            </div>

            <div className="grid grid-rows-3 divide-inherit border-t py-2 max-sm:divide-y sm:grid-cols-3 sm:grid-rows-1 sm:divide-x dark:border-main-gray-700">
              <div className="flex flex-col justify-start gap-0 px-3 py-1 max-sm:flex-row max-sm:items-center max-sm:justify-between max-sm:gap-2 2xl:flex-row 2xl:items-center 2xl:gap-2">
                <span className="text-sm">High Price Target</span>
                <span className="text-xl font-bold text-main-green-light xl:text-2xl dark:text-main-green-dark">
                  {appUtils.formatNumber(priceTargetConsensus?.targetHigh, {
                    currency: profile.currency || undefined,
                  })}
                </span>
              </div>

              <div className="flex flex-col justify-start gap-0 px-3 py-1 max-sm:flex-row max-sm:items-center max-sm:justify-between max-sm:gap-2 2xl:flex-row 2xl:items-center 2xl:gap-2">
                <span className="text-sm">Average Price Target</span>
                <span className="text-xl font-bold xl:text-2xl">
                  {appUtils.formatNumber(priceTargetConsensus?.targetMedian, {
                    currency: profile.currency || undefined,
                  })}
                </span>
              </div>

              <div className="flex flex-col justify-start gap-0 px-3 py-1 max-sm:flex-row max-sm:items-center max-sm:justify-between max-sm:gap-2 2xl:flex-row 2xl:items-center 2xl:gap-2">
                <span className="text-sm">Lowest Price Target</span>
                <span className="text-xl font-bold text-main-red-light xl:text-2xl dark:text-main-red-dark">
                  {appUtils.formatNumber(priceTargetConsensus?.targetLow, {
                    currency: profile.currency || undefined,
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <div className="space-y-2">
          <h5 className="text-xl font-bold">Recommendation Trends</h5>

          <p className=" ">
            {consensus ? (
              <>
                The latest consensus rating for Apple is &apos;
                {consensus.consensus}&apos;. This is the average recommendation
                of {totalRatings} analysts: {consensus.strongSell} strong sell,{" "}
                {consensus.sell} sell, {consensus.hold}
                hold, {consensus.buy} buy, {consensus.strongBuy} strong buy. In
                the previous period, 50 analysts also majorly recommended
                &apos;Buy&apos; for Apple.
              </>
            ) : (
              <></>
            )}
          </p>
        </div>

        <div className=" ">
          <ResponsiveContainer width="100%" height={200} className={"text-sm"}>
            <BarChart data={analystRecommendationTrend} className=" ">
              <CartesianGrid
                vertical={false}
                strokeDasharray="3 3"
                className="stroke-main-gray-200 dark:stroke-main-gray-700"
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
                    <div className="space-y-2 rounded bg-main-gray-700 p-2 text-main-gray-300">
                      {label && (
                        <div className=" ">
                          {format(new Date(label), "MMM yy")}
                        </div>
                      )}

                      <div>
                        {payload &&
                          payload.map((pl, index) => {
                            const { name, value, color } = pl;

                            return (
                              <div
                                key={`${value}-${index}`}
                                className="flex items-center gap-2 text-main-gray-300"
                              >
                                <span
                                  className="size-3"
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
                    <div className="flex flex-wrap items-center gap-x-4 py-2 sm:justify-center">
                      {payload &&
                        payload.map((pl, index) => {
                          const { value, color } = pl;

                          return (
                            <span
                              key={`${value}`}
                              className="text-black dark:text-main-gray-300"
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

      <div className="space-y-5">
        <h5 className="text-xl font-bold">
          Apple Stock Forecast - Upgrades & Downgrades
        </h5>

        <div className=" ">
          {analystUpgradesDowngradesToDisplay.length <= 0 ? (
            <div className="w-full border-t p-5 text-center text-main-gray-400 dark:border-main-gray-700">
              No Data Available
            </div>
          ) : (
            <div className=" ">
              <div className="overflow-x-auto">
                <Table className="w-full min-w-[50rem]">
                  <TableHeader>
                    <TableRow headerRow>
                      <TableHead className="text-left">Date</TableHead>

                      <TableHead className="text-left">Company</TableHead>

                      <TableHead className="text-left">Analyst</TableHead>

                      <TableHead className="text-right">Action</TableHead>

                      <TableHead className="text-right">Target Price</TableHead>

                      {/* <TableHead className="text-right">To</TableHead> */}
                    </TableRow>
                  </TableHeader>

                  <TableBody className=" ">
                    {analystUpgradesDowngradesToDisplay.map((item, index) => {
                      return (
                        <TableRow key={`forecast-${index}`}>
                          <TableCell className="white-text text-left text-[#333333]">
                            {item.publishedDate.toDateString()}
                          </TableCell>

                          <TableCell className={`text-left`}>
                            {item.gradingCompany}
                          </TableCell>

                          <TableCell className={`text-left`}>
                            {item.analystName || "-"}
                          </TableCell>

                          <TableCell className="text-right capitalize text-primary-base">
                            {item.action}
                          </TableCell>

                          <TableCell className="text-right">
                            {appUtils.formatNumber(item.priceTarget, {
                              style: "decimal",
                              minimumFractionDigits: 2,
                            })}
                          </TableCell>

                          {/* <TableCell className="text-right">
                            {item.newGrade}
                          </TableCell> */}
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>

              <div className="flex justify-center">
                <Button
                  variant={"link"}
                  className="gap-x-2 text-primary-base hover:no-underline dark:text-primary-base"
                  onClick={handleShowMoreUpgrades}
                >
                  {showAllUpgrades ? (
                    <>
                      <Minus className="size-4" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <Plus className="size-4" />
                      Show More
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
