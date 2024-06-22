"use client";

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
import { CompanyOutlook, Dividend, Ratio } from "@/modules/ticker/types";
import useTheme from "@/store/theme/useTheme";
import appUtils from "@/utils/app-util";
import { format } from "date-fns";
import { Minus, Plus } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

function formatDividendData(data: Dividend[]) {
  const dataMap = new Map<number, { year: number; from: number; to: number }>();

  data.forEach((item) => {
    const year = new Date(item.date).getFullYear();

    let entry = dataMap.get(year);
    if (!entry) {
      dataMap.set(year, { year, from: item.dividend, to: item.dividend });
      return;
    }

    if (item.dividend < entry.from) {
      entry.from = item.dividend;
    }

    if (item.dividend > entry.to) {
      entry.to = item.dividend;
    }

    dataMap.set(year, entry);
  });

  return Array.from(dataMap.values());
}

interface DividendsScreenProps {
  ticker: string;
  outlook: CompanyOutlook;
  dividends: Dividend[];
  currency: string;
  ratio: Ratio;
}

export default function DividendsScreen(props: DividendsScreenProps) {
  const { currency, ticker, dividends, outlook, ratio } = props;
  const { theme } = useTheme();

  const [showAllDividends, setShowAllDividends] = useState(false);

  const dividendsToDisplay = useMemo(() => {
    if (showAllDividends) return dividends;
    return dividends.filter(
      (dividend) =>
        new Date().getFullYear() - new Date(dividend.date).getFullYear() < 3
    );
  }, [dividends, showAllDividends]);

  function handleShowMoreDividends() {
    setShowAllDividends((prev) => !prev);
  }

  return (
    <main className=" max-w-7xl space-y-10 pb-12 ">
      <HeaderWithUnderline>
        {outlook.profile.companyName} Dividends Overview
      </HeaderWithUnderline>

      <div className=" grid grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] gap-6 p-4 xl:grid-cols-4 xl:justify-between ">
        <div className=" flex flex-col gap-1 ">
          <span className=" text-sm font-bold ">Last Ex-Dividend Date</span>

          <span className=" text-xl ">
            {dividends[0] &&
              format(new Date(dividends[0].date), "MMMM dd, yyyy")}
          </span>
        </div>

        <div className=" flex flex-col gap-1 ">
          <span className=" text-sm font-bold ">Dividend Amount Per Share</span>

          <span className=" text-xl ">
            {appUtils.formatNumber(dividends[0]?.dividend || undefined, {
              currency,
            })}
          </span>
        </div>

        <div className=" flex flex-col gap-1 ">
          <span className=" text-sm font-bold ">Dividend Yield</span>

          <span className=" text-xl ">
            {appUtils.formatNumber(
              outlook.ratios[0]?.dividendYielPercentageTTM || undefined,
              {
                style: "decimal",
              }
            )}
            {outlook.ratios[0]?.dividendYielPercentageTTM && "%"}
          </span>
        </div>

        <div className=" flex flex-col gap-1 ">
          <span className=" text-sm font-bold ">Payout Ratio</span>

          <span className=" text-xl ">
            {appUtils.formatNumber(
              ratio.dividendPayoutRatio
                ? ratio.dividendPayoutRatio * 100
                : undefined,
              {
                style: "decimal",
              }
            )}
            {ratio.dividendPayoutRatio && "%"}
          </span>
        </div>

        {/* <div className=" flex flex-col gap-1 ">
          <span className=" text-sm font-bold ">P/E</span>

          <span className=" text-xl ">
            {appUtils.formatNumber(quote.pe || undefined, {
              style: "decimal",
            })}
          </span>
        </div> */}
      </div>

      <div className=" space-y-5 ">
        <h4 className=" text-xl font-bold ">Dividend Amount Per Share</h4>

        <div className="  ">
          <ResponsiveContainer
            width={"100%"}
            height={200}
            className={" text-xs md:text-sm "}
          >
            <BarChart data={dividends.slice(0, 10).toReversed()}>
              <CartesianGrid
                vertical={false}
                strokeDasharray="3 3"
                className=" stroke-main-gray-200 dark:stroke-main-gray-700"
              />

              <XAxis
                axisLine={false}
                tickLine={false}
                dataKey={"date"}
                className=" text-xs"
                tickFormatter={(value) => {
                  const { quarter, year } = appUtils.getYearAndQuarter(
                    value || new Date()
                  );
                  return `${quarter} '${year}`;
                }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                orientation="right"
                className=" text-xs"
                tickFormatter={(value) =>
                  appUtils.formatNumber(value, {
                    style: "decimal",
                    minimumFractionDigits: 2,
                  })
                }
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
                                <span>
                                  {name}:{" "}
                                  {appUtils.formatNumber(
                                    (value || undefined) as number | undefined,
                                    { currency }
                                  )}
                                </span>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  );
                }}
              />

              <Bar
                dataKey="dividend"
                name={"Dividend"}
                fill="#448AFF"
                radius={[2, 2, 0, 0]}
                maxBarSize={35}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="  ">
        <h4 className=" py-5 text-xl font-bold ">
          {outlook.profile.companyName} Dividend History
        </h4>

        <div className="  ">
          <div className=" overflow-x-auto ">
            <Table className="w-full min-w-[50rem] ">
              <TableHeader>
                <TableRow headerRow>
                  <TableHead className=" ">Ex-Date</TableHead>

                  <TableHead className=" ">Amount</TableHead>

                  <TableHead className=" ">Declaration Date</TableHead>

                  <TableHead className=" ">Payment Date</TableHead>

                  <TableHead className=" ">Record Date</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {dividendsToDisplay.map((dividend, index) => {
                  return (
                    <TableRow key={`dividends-${index}`} className=" text-sm ">
                      <TableCell className="  ">
                        {format(dividend.date, "MMM dd, yyyy")}
                      </TableCell>

                      <TableCell className=" ">
                        {appUtils.formatNumber(dividend.dividend, {
                          currency,
                          maximumFractionDigits: undefined,
                        })}
                      </TableCell>

                      <TableCell className="  ">
                        {dividend.declarationDate
                          ? format(dividend.declarationDate, "MMM dd, yyyy")
                          : "-"}
                      </TableCell>

                      <TableCell className="  ">
                        {dividend.recordDate
                          ? format(dividend.recordDate, "MMM dd, yyyy")
                          : "-"}
                      </TableCell>

                      <TableCell className={` `}>
                        {dividend.paymentDate
                          ? format(dividend.paymentDate, "MMM dd, yyyy")
                          : "-"}
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
              onClick={handleShowMoreDividends}
            >
              {showAllDividends ? (
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
    </main>
  );
}
