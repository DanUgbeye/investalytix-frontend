"use client";

import Chart from "@/components/Chart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import NewsCard from "@/modules/news/components/news-card";
import { CompanyOutlook } from "@/modules/ticker/types";
import { Quote } from "@/types";
import appUtils from "@/utils/app-util";
import { format } from "date-fns";
import Link from "next/link";
import { useState } from "react";

type NewsTab = "dow-jones" | "market";

interface SummaryScreenProps {
  ticker: string;
  quote: Quote;
  outlook: CompanyOutlook;
}

export default function SummaryScreen(props: SummaryScreenProps) {
  const { ticker, quote, outlook } = props;
  const [newsTab, setNewsTab] = useState<NewsTab>("market");

  function handleNewsTabChange(tab: NewsTab) {
    setNewsTab(tab);
  }

  return (
    <section className=" space-y-8 pb-8 ">
      <div className=" grid grid-cols-1 gap-8 xl:grid-cols-3   ">
        <div className=" w-full ">
          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 p-2 text-sm odd:bg-gray-50 dark:odd:bg-main-gray-900 ">
            <span className=" ">Previous Close</span>
            <span className=" font-bold ">
              {appUtils.formatNumber(quote.previousClose || undefined, {
                style: "decimal",
              })}
            </span>
          </div>

          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 p-2 text-sm odd:bg-gray-50 dark:odd:bg-main-gray-900 ">
            <span className=" ">Open</span>
            <span className=" font-bold ">
              {appUtils.formatNumber(quote.open || undefined, {
                style: "decimal",
              })}
            </span>
          </div>

          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 p-2 text-sm odd:bg-gray-50 dark:odd:bg-main-gray-900 ">
            <span className=" ">Day&apos;s Range</span>
            <span className=" font-bold ">
              {appUtils.formatNumber(quote.dayLow || undefined, {
                style: "decimal",
              })}{" "}
              -{" "}
              {appUtils.formatNumber(quote.dayHigh || undefined, {
                style: "decimal",
              })}
            </span>
          </div>

          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 p-2 text-sm odd:bg-gray-50 dark:odd:bg-main-gray-900 ">
            <span className=" ">52 Week Range</span>
            <span className=" font-bold ">
              {appUtils.formatNumber(quote.yearLow || undefined, {
                style: "decimal",
              })}{" "}
              -{" "}
              {appUtils.formatNumber(quote.yearHigh || undefined, {
                style: "decimal",
              })}
            </span>
          </div>

          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 p-2 text-sm odd:bg-gray-50 dark:odd:bg-main-gray-900 ">
            <span className=" ">Market Cap</span>
            <span className=" font-bold ">
              {appUtils.formatNumber(quote.marketCap || undefined, {
                style: "decimal",
              })}
            </span>
          </div>
        </div>

        <div className=" w-full ">
          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 p-2 text-sm odd:bg-gray-50 dark:odd:bg-main-gray-900 ">
            <span className=" ">Volume</span>
            <span className=" font-bold ">
              {appUtils.formatNumber(quote.volume || undefined, {
                style: "decimal",
              })}
            </span>
          </div>

          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 p-2 text-sm odd:bg-gray-50 dark:odd:bg-main-gray-900 ">
            <span className=" ">Avg. Volume</span>
            <span className=" font-bold ">
              {appUtils.formatNumber(quote.avgVolume || undefined, {
                style: "decimal",
              })}
            </span>
          </div>

          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 p-2 text-sm odd:bg-gray-50 dark:odd:bg-main-gray-900 ">
            <span className=" ">PE Ratio (TTM)</span>
            <span className=" font-bold ">
              {appUtils.formatNumber(
                outlook.ratios[0]?.peRatioTTM || undefined,
                {
                  style: "decimal",
                }
              )}
            </span>
          </div>

          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 p-2 text-sm odd:bg-gray-50 dark:odd:bg-main-gray-900 ">
            <span className=" ">EPS</span>
            <span className=" font-bold ">
              {appUtils.formatNumber(quote.eps || undefined, {
                style: "decimal",
              })}
            </span>
          </div>

          <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 p-2 text-sm odd:bg-gray-50 dark:odd:bg-main-gray-900 ">
            <span className=" ">Earnings Date</span>
            <span className=" font-bold ">
              {quote.earningsAnnouncement
                ? format(new Date(quote.earningsAnnouncement), "MMM dd, yyyy")
                : "N/A"}
            </span>
          </div>
        </div>

        <div className=" h-48 w-full ">
          <Chart />
        </div>
      </div>

      {/* KEY STATS */}
      <div className=" space-y-6 ">
        <h2 className="border-l-[6px] border-l-primary-base pl-5 text-3xl font-extrabold">
          KEY STATS
        </h2>

        <div className=" grid gap-8 xl:grid-cols-3 xl:justify-between ">
          <div className=" w-full ">
            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-main-gray-900 ">
              <span className=" ">Open</span>
              <span className=" font-bold ">
                {appUtils.formatNumber(quote.open || undefined, {
                  style: "decimal",
                })}
              </span>
            </div>

            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-main-gray-900 ">
              <span className=" ">Prev Close</span>
              <span className=" font-bold ">
                {appUtils.formatNumber(quote.previousClose || undefined, {
                  style: "decimal",
                })}
              </span>
            </div>

            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-main-gray-900 ">
              <span className=" ">Day High</span>
              <span className=" font-bold ">
                {appUtils.formatNumber(quote.dayHigh || undefined, {
                  style: "decimal",
                })}
              </span>
            </div>

            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-main-gray-900 ">
              <span className=" ">Day Low</span>
              <span className=" font-bold ">
                {appUtils.formatNumber(quote.dayLow || undefined, {
                  style: "decimal",
                })}
              </span>
            </div>
          </div>

          <div className=" w-full ">
            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-main-gray-900 ">
              <span className=" ">52 Week High</span>
              <span className=" font-bold ">
                {appUtils.formatNumber(quote.yearHigh || undefined, {
                  style: "decimal",
                })}
              </span>
            </div>

            {/* <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-main-gray-900 ">
              <span className=" ">52 Week High Date</span>
              <span className=" font-bold ">07/19/23</span>
            </div> */}

            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-main-gray-900 ">
              <span className=" ">52 Week Low</span>
              <span className=" font-bold ">
                {appUtils.formatNumber(quote.yearLow || undefined, {
                  style: "decimal",
                })}
              </span>
            </div>

            {/* <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-main-gray-900 ">
              <span className=" ">52 Week Low Date</span>
              <span className=" font-bold ">01/03/23</span>
            </div> */}

            {/* <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-main-gray-900 ">
              <span className=" ">Beta</span>
              <span className=" font-bold ">1.32</span>
            </div> */}

            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-main-gray-900 ">
              <span className=" ">Volume</span>
              <span className=" font-bold ">
                {appUtils.formatNumber(quote.volume || undefined, {
                  style: "decimal",
                  notation: "compact",
                })}
              </span>
            </div>

            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-main-gray-900 ">
              <span className=" ">Average Volume</span>
              <span className=" font-bold ">
                {appUtils.formatNumber(quote.avgVolume || undefined, {
                  style: "decimal",
                  notation: "compact",
                })}
              </span>
            </div>
          </div>

          <div className=" w-full ">
            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-main-gray-900 ">
              <span className=" ">Market Cap</span>
              <span className=" font-bold ">
                {appUtils.formatNumber(quote.marketCap || undefined, {
                  style: "decimal",
                  notation: "compact",
                  compactDisplay: "short",
                })}
              </span>
            </div>

            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-main-gray-900 ">
              <span className=" ">Shares Out</span>
              <span className=" font-bold ">
                {appUtils.formatNumber(quote.sharesOutstanding || undefined, {
                  style: "decimal",
                  notation: "compact",
                  compactDisplay: "short",
                })}
              </span>
            </div>

            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-main-gray-900 ">
              <span className=" ">Dividend</span>
              <span className=" font-bold ">
                {appUtils.formatNumber(
                  outlook.stockDividend[0]?.dividend || undefined,
                  {
                    style: "decimal",
                  }
                )}
              </span>
            </div>

            <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-2 text-sm odd:bg-gray-50 dark:odd:bg-main-gray-900 ">
              <span className=" ">Dividend Yield (TTM)</span>
              <span className=" font-bold ">
                {appUtils.formatNumber(
                  outlook.metrics.dividendYielTTM || undefined,
                  {
                    style: "decimal",
                  }
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className=" grid gap-10 xl:grid-cols-[auto,1fr] ">
        {/* KEY DATA */}
        <div className=" min-w-60 space-y-4 ">
          <header className="relative w-full ">
            <div className=" flex w-full py-4 ">
              <h3 className=" white-text text-2xl font-bold text-[#2A3037]">
                KEY DATA
              </h3>
            </div>

            <div className="absolute h-[2px] w-full bg-gradient-to-r from-[#FB8B1E] from-50% to-[#545454] to-50% dark:to-white/50"></div>
          </header>

          <div className=" grid grid-cols-[auto,auto] gap-x-3 ">
            {[
              {
                label: "OPEN",
                value: appUtils.formatNumber(quote.open || undefined, {}),
              },
              {
                label: "DAY RANGE",
                value: `${appUtils.formatNumber(quote.dayLow || undefined, {})} - ${appUtils.formatNumber(quote.dayHigh || undefined, {})}`,
              },
              {
                label: "52 WEEK RANGE",
                value: `${appUtils.formatNumber(quote.yearLow || undefined, {})} - ${appUtils.formatNumber(quote.yearHigh || undefined, {})}`,
              },
              {
                label: "MARKET CAP",
                value: appUtils.formatNumber(quote.marketCap || undefined, {
                  notation: "compact",
                }),
              },
              {
                label: "SHARES OUTSTANDING",
                value: appUtils.formatNumber(
                  quote.sharesOutstanding || undefined,
                  { notation: "compact", style: "decimal" }
                ),
              },
              // Uncomment and update the lines below as needed
              // {
              //   label: "PUBLIC FLOAT",
              //   value: appUtils.formatNumber(quote.publicFloat || undefined, { notation: "compact", style: "decimal" })
              // },
              // {
              //   label: "BETA",
              //   value: "1.32" // Replace with actual data
              // },
              // {
              //   label: "REV. PER EMPLOYEE",
              //   value: "$2.381M" // Replace with actual data
              // },
              {
                label: "P/E RATIO",
                value: appUtils.formatNumber(
                  outlook.ratios[0]?.peRatioTTM || undefined,
                  { style: "decimal" }
                ),
              },
              {
                label: "EPS",
                value: appUtils.formatNumber(quote.eps || undefined, {}),
              },
              {
                label: "YIELD",
                value: outlook.ratios[0]?.dividendYielPercentageTTM
                  ? appUtils.formatNumber(
                      outlook.ratios[0]?.dividendYielPercentageTTM,
                      { style: "decimal" }
                    ) + "%"
                  : "-",
              },
              {
                label: "AVERAGE VOLUME",
                value: appUtils.formatNumber(quote.avgVolume || undefined, {
                  notation: "compact",
                  style: "decimal",
                }), // Replace with actual data
              },
              {
                label: "DIVIDEND",
                value: appUtils.formatNumber(
                  outlook.stockDividend[0]?.dividend || undefined,
                  { notation: "compact" }
                ),
              },
              {
                label: "EX-DIVIDEND DATE",
                value: outlook.stockDividend[0]?.declarationDate
                  ? format(
                      new Date(outlook.stockDividend[0]?.declarationDate),
                      "MMM dd, yyyy"
                    )
                  : "-",
              },
              // {
              //   label: "SHORT INTEREST",
              //   value: `${appUtils.formatNumber(
              //     outlook.financialsQuarter.cash[0]?.interestIncome ||
              //       undefined,
              //     { notation: "compact", minimumFractionDigits: 0 }
              //   )} ${outlook.financialsQuarter.income[0] ? format(outlook.financialsQuarter.income[0].date, "mm/dd/yy") : "-"}`,
              // },
              // {
              //   label: "% OF FLOAT SHORTED",
              //   value: appUtils.formatNumber(
              //     outlook.financialsQuarter.income[0]?.interestIncome ||
              //       undefined,
              //     { notation: "compact", style: "decimal" }
              //   ), // Replace with actual data
              // },
            ].map(({ label, value }, index) => (
              <div
                key={`${label}-${index}`}
                className=" flex w-full flex-col gap-y-2 border-b py-2 dark:border-main-gray-600 "
              >
                <span className=" text-sm ">{label}</span>
                <span className=" font-bold ">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RECENT NEWS */}
        <div className=" space-y-4 ">
          <header className="relative w-full ">
            <div className=" flex w-full py-4 ">
              <h3 className=" white-text text-2xl font-bold text-[#2A3037]">
                RECENT NEWS
              </h3>
            </div>

            <div className="absolute h-[2px] w-full bg-gradient-to-r from-[#FB8B1E] from-50% to-[#545454] to-50% dark:to-white/50"></div>
          </header>

          <div className="  ">
            <div className=" divide-y dark:divide-inherit dark:border-main-gray-600 ">
              {outlook.stockNews.map((news, index) => {
                return (
                  <div
                    key={`news-${index}`}
                    className={cn(
                      " grid grid-cols-1 grid-rows-[auto,auto] gap-5 py-4 md:grid-cols-[auto,1fr] md:grid-rows-1 "
                    )}
                  >
                    <Avatar className=" h-full  w-full rounded-none md:max-h-60 md:max-w-96 ">
                      <AvatarImage
                        src={news.image}
                        alt=""
                        className="aspect-video h-full w-full object-cover "
                        width={196}
                        height={110}
                      />

                      <AvatarFallback className="">
                        {news.symbol}
                      </AvatarFallback>
                    </Avatar>

                    <div className="">
                      <div className="flex flex-col flex-wrap items-start justify-between gap-y-2 ">
                        <Link
                          href={news.url}
                          target="_blank"
                          className={cn(
                            "white-text text-lg font-bold text-[#020224] hover:text-primary-light hover:underline lg:text-xl"
                          )}
                        >
                          {news.title}
                        </Link>

                        <div className=" space-y-1 ">
                          <div className="whitespace-nowrap">{news.site}</div>

                          <p className="white-text flex flex-nowrap items-center gap-2 text-sm font-medium text-[#565555] lg:text-base">
                            {news.symbol && (
                              <>
                                <span className="">{news.symbol}</span>
                                <span className="inline-block h-1 w-1 bg-[#0097F4]"></span>
                              </>
                            )}

                            <span className="whitespace-nowrap">
                              {format(
                                new Date(news.publishedDate),
                                "MMMM dd, yyyy"
                              )}
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* <p className="white-text mt-4 text-base text-[#4B4646] lg:mt-4 ">
                        {news.text}
                      </p> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
