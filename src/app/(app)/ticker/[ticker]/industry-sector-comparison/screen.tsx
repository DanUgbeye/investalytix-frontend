"use client";

import ColoredText from "@/components/colored-text";
import HeaderWithUnderline from "@/components/heading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { tailwindCSS } from "@/lib/utils";
import { SectorPerformanceHistory } from "@/modules/market/types";
import { CompanyProfile } from "@/modules/ticker/types";
import tickerUtils from "@/modules/ticker/utils";
import { getTickerStockDescriptionRoute } from "@/route";
import useTheme from "@/store/theme/useTheme";
import { Quote } from "@/types";
import appUtils from "@/utils/app-util";
import { format } from "date-fns";
import Link from "next/link";
import { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    date: "2024-05-07",
    basicMaterialsChangesPercentage: -0.0934,
    communicationServicesChangesPercentage: 1.26249,
    consumerCyclicalChangesPercentage: 0.29312,
    consumerDefensiveChangesPercentage: 0.60606,
    energyChangesPercentage: 0.58913,
    financialServicesChangesPercentage: 0.72193,
    healthcareChangesPercentage: -0.38694,
    industrialsChangesPercentage: 0.28425,
    realEstateChangesPercentage: -1.37528,
    technologyChangesPercentage: 1.76193,
    utilitiesChangesPercentage: -0.00015,
  },
  {
    date: "2024-05-06",
    basicMaterialsChangesPercentage: -0.0934,
    communicationServicesChangesPercentage: 1.26249,
    consumerCyclicalChangesPercentage: 0.29312,
    consumerDefensiveChangesPercentage: 0.60606,
    energyChangesPercentage: 0.58913,
    financialServicesChangesPercentage: 0.72199,
    healthcareChangesPercentage: -0.38694,
    industrialsChangesPercentage: 0.28425,
    realEstateChangesPercentage: -1.37528,
    technologyChangesPercentage: 1.76193,
    utilitiesChangesPercentage: -0.00015,
  },
  {
    date: "2024-05-03",
    basicMaterialsChangesPercentage: 1.10443,
    communicationServicesChangesPercentage: 0.84,
    consumerCyclicalChangesPercentage: 0.87542,
    consumerDefensiveChangesPercentage: 0.85901,
    energyChangesPercentage: 1.89802,
    financialServicesChangesPercentage: 5.29977,
    healthcareChangesPercentage: 1.41727,
    industrialsChangesPercentage: 0.56529,
    realEstateChangesPercentage: 0.37973,
    technologyChangesPercentage: 2.44522,
    utilitiesChangesPercentage: 1.66244,
  },
  {
    date: "2024-05-02",
    basicMaterialsChangesPercentage: -3.59657,
    communicationServicesChangesPercentage: 1.56931,
    consumerCyclicalChangesPercentage: 2.51543,
    consumerDefensiveChangesPercentage: 0.8855,
    energyChangesPercentage: 0.92033,
    financialServicesChangesPercentage: -0.8938,
    healthcareChangesPercentage: 0.81091,
    industrialsChangesPercentage: 0.93674,
    realEstateChangesPercentage: 0.99022,
    technologyChangesPercentage: 1.69558,
    utilitiesChangesPercentage: 0.64711,
  },
  {
    date: "2024-05-01",
    basicMaterialsChangesPercentage: 0.23439,
    communicationServicesChangesPercentage: 0.8385,
    consumerCyclicalChangesPercentage: 0.279,
    consumerDefensiveChangesPercentage: -0.62577,
    energyChangesPercentage: -1.94269,
    financialServicesChangesPercentage: 0.19996,
    healthcareChangesPercentage: 1.9434,
    industrialsChangesPercentage: 0.49965,
    realEstateChangesPercentage: -0.6631,
    technologyChangesPercentage: -0.89902,
    utilitiesChangesPercentage: 0.62743,
  },
  {
    date: "2024-04-30",
    basicMaterialsChangesPercentage: -1.44095,
    communicationServicesChangesPercentage: -1.81674,
    consumerCyclicalChangesPercentage: -3.10486,
    consumerDefensiveChangesPercentage: -0.41263,
    energyChangesPercentage: 1.33031,
    financialServicesChangesPercentage: 2.80296,
    healthcareChangesPercentage: -0.30533,
    industrialsChangesPercentage: -1.79814,
    realEstateChangesPercentage: -1.90272,
    technologyChangesPercentage: -1.8592,
    utilitiesChangesPercentage: -0.99954,
  },
  {
    date: "2024-04-29",
    basicMaterialsChangesPercentage: 0.16287,
    communicationServicesChangesPercentage: -2.19341,
    consumerCyclicalChangesPercentage: 2.44805,
    consumerDefensiveChangesPercentage: 0.16651,
    energyChangesPercentage: 0.44145,
    financialServicesChangesPercentage: -0.38682,
    healthcareChangesPercentage: 0.31399,
    industrialsChangesPercentage: -0.81845,
    realEstateChangesPercentage: -2.79866,
    technologyChangesPercentage: -0.99677,
    utilitiesChangesPercentage: -0.6847,
  },
].reverse();

interface IndustrySectorComparisonScreenProps {
  ticker: string;
  currency: string;
  profile: CompanyProfile;
  similarStocks: Quote[];
  sectorPerformaceHistory: SectorPerformanceHistory[];
}

export default function IndustrySectorComparisonScreen(
  props: IndustrySectorComparisonScreenProps
) {
  const { ticker, currency, profile, sectorPerformaceHistory, similarStocks } =
    props;
  const { theme } = useTheme();
  const [tab, setTab] = useState<"Industry" | "Sector">("Industry");

  function handleTabChange(change: typeof tab) {
    setTab(change);
  }

  return (
    <main className=" space-y-14 py-10 ">
      <HeaderWithUnderline>
        {profile.companyName} Similar Stocks
      </HeaderWithUnderline>

      <section className=" space-y-4 ">
        <h3 className=" font-bold ">By Industry</h3>

        <div className=" space-y-8 ">
          <div className="  ">
            <div className=" overflow-x-auto text-sm ">
              <ResponsiveContainer width={"100%"} height={500}>
                <LineChart data={data} margin={{ top: 40, right: 40 }}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className=" stroke-main-gray-200 dark:stroke-main-gray-900"
                  />
                  <XAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={10}
                    dataKey="date"
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={5}
                    orientation="right"
                    padding={{ bottom: 20 }}
                    tickFormatter={(value) => `${value}%`}
                  />

                  <Tooltip
                    cursor={{
                      className: " fill-main-gray-200/20 dark:fill-white/10 ",
                    }}
                    content={(props) => {
                      const { payload, label } = props;

                      return (
                        <div className=" space-y-2 rounded bg-main-gray-700 p-2 text-main-gray-300 ">
                          {label && (
                            <div className="  ">
                              {format(new Date(label), "MMM dd, yyyy")}
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

                                    <div className=" flex gap-4 justify-between w-full ">
                                      <span>{name}</span>
                                      <span>
                                        {appUtils.formatNumber(
                                          (value || undefined) as
                                            | number
                                            | undefined,
                                          { currency }
                                        )}
                                      </span>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      );
                    }}
                  />
                  <Line
                    type="monotone"
                    name="Basic Materials"
                    dataKey="basicMaterialsChangesPercentage"
                    stroke="#8884d8"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    name="Communication Services"
                    dataKey="communicationServicesChangesPercentage"
                    stroke="#82ca9d"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    name="Consumer Cyclical"
                    dataKey="consumerCyclicalChangesPercentage"
                    stroke="#ff7300"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    name="Consumer Defensive"
                    dataKey="consumerDefensiveChangesPercentage"
                    stroke="#0088FE"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    name="Energy"
                    dataKey="energyChangesPercentage"
                    stroke="#FF0080"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    name="Financial Services"
                    dataKey="financialServicesChangesPercentage"
                    stroke="#FFBB28"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    name="Healthcare"
                    dataKey="healthcareChangesPercentage"
                    stroke="#00C49F"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    name="Industrials"
                    dataKey="industrialsChangesPercentage"
                    stroke="#FF8042"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    name="Real Estate"
                    dataKey="realEstateChangesPercentage"
                    stroke="#bcbd22"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    name="Technology"
                    dataKey="technologyChangesPercentage"
                    stroke="#ff0000"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    name="Utilities"
                    dataKey="utilitiesChangesPercentage"
                    stroke="#8A2BE2"
                    strokeWidth={3}
                  />

                  <Legend iconType="circle" wrapperStyle={{ padding: 20 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <p className=" border-t bg-gray-100 p-3 text-xs dark:border-main-gray-700 dark:bg-white/10 ">
              Compare key indicators and discover each stock&apos;s average
              analyst price target, as well as the latest recommendations by top
              Wall Street experts
            </p>
          </div>

          <div className=" overflow-x-auto ">
            <Table className=" w-full min-w-[50rem] ">
              <TableHeader>
                <TableRow headerRow>
                  <TableHead className=" min-w-[12rem] ">Name</TableHead>

                  <TableHead className=" ">Price</TableHead>

                  <TableHead className="  ">Market Cap</TableHead>

                  <TableHead className="  ">P/E</TableHead>

                  <TableHead className="  ">EPS</TableHead>

                  <TableHead className="  ">Change</TableHead>

                  <TableHead className="  ">Change %</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {similarStocks.map((similarStock, index) => {
                  return (
                    <TableRow key={`forecast-${index}`} className="  ">
                      <TableCell className=" ">
                        <div className=" flex items-center gap-4 ">
                          <Avatar className=" size-10 rounded-full bg-main-gray-200/50 p-2 text-xxs dark:bg-main-gray-800 ">
                            <AvatarImage
                              crossOrigin="anonymous"
                              className=" rounded-full "
                              src={tickerUtils.getTickerLogoUrl(
                                similarStock.symbol
                              )}
                            />

                            <AvatarFallback className=" truncate bg-transparent p-2 ">
                              {similarStock.symbol.slice(0, 4)}
                            </AvatarFallback>
                          </Avatar>

                          <div className=" flex flex-col space-y-1 ">
                            <Link
                              href={getTickerStockDescriptionRoute(
                                similarStock.symbol
                              )}
                              className=" w-fit text-base font-semibold text-[#125BD4] underline-offset-2 hover:underline "
                            >
                              {similarStock.symbol}
                            </Link>

                            <span className=" text-xs font-semibold ">
                              {similarStock.name}
                            </span>
                          </div>
                        </div>
                      </TableCell>

                      <TableCell className={``}>
                        {appUtils.formatNumber(similarStock.price)}
                      </TableCell>

                      <TableCell className=" ">
                        {appUtils.formatNumber(similarStock.marketCap, {
                          notation: "compact",
                        })}
                      </TableCell>

                      <TableCell className="">
                        {appUtils.formatNumber(similarStock.pe, {
                          style: "decimal",
                        })}
                      </TableCell>

                      <TableCell className="">
                        {appUtils.formatNumber(similarStock.eps, {
                          style: "decimal",
                        })}
                      </TableCell>

                      <TableCell className=" text-green-700 ">
                        <ColoredText
                          isPositive={(() => {
                            if (similarStock.change) {
                              if (similarStock.change > 0) return true;
                              if (similarStock.change < 0) return false;
                            }
                            return undefined;
                          })()}
                        >
                          {appUtils.formatNumber(similarStock.change, {
                            style: "decimal",
                          })}
                        </ColoredText>
                      </TableCell>

                      <TableCell className=" text-[#125BD4] ">
                        <ColoredText
                          isPositive={(() => {
                            if (similarStock.changesPercentage) {
                              if (similarStock.changesPercentage > 0)
                                return true;
                              if (similarStock.changesPercentage < 0)
                                return false;
                            }
                            return undefined;
                          })()}
                        >
                          {appUtils.formatNumber(
                            similarStock.changesPercentage,
                            {
                              style: "decimal",
                            }
                          )}
                          {similarStock.changesPercentage && "%"}
                        </ColoredText>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </main>
  );
}
