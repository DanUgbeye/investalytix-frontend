"use client";

import HeaderWithUnderline from "@/components/heading";
import { CompanyOutlook } from "@/modules/ticker/types";
import { Quote } from "@/types";
import appUtils from "@/utils/app-util";
import { format, formatDistanceToNowStrict } from "date-fns";
import Link from "next/link";
import ChartSummary from "./chart-summary";

interface SummaryScreenProps {
  ticker: string;
  quote: Quote;
  outlook: CompanyOutlook;
  currency: string;
}

export default function SummaryScreen(props: SummaryScreenProps) {
  const { ticker, quote, outlook, currency } = props;

  return (
    <section className=" space-y-8 pb-8 ">
      <ChartSummary ticker={ticker} />

      {/* KEY STATS */}
      <section className=" space-y-6 ">
        <HeaderWithUnderline>Key Stats</HeaderWithUnderline>

        <div className=" grid grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] gap-8 p-4 xl:grid-cols-4 xl:justify-between ">
          <div className=" flex flex-col gap-1 ">
            <span className=" text-sm font-bold ">Open</span>

            <span className=" text-xl ">
              {appUtils.formatNumber(quote.open || undefined, { currency })}
            </span>
          </div>

          <div className=" flex flex-col gap-1 ">
            <span className=" text-sm font-bold ">Prev Close</span>

            <span className=" text-xl ">
              {appUtils.formatNumber(quote.previousClose || undefined, {
                currency,
              })}
            </span>
          </div>

          <div className=" flex flex-col gap-1 ">
            <span className=" text-sm font-bold ">Day High</span>

            <span className=" text-xl ">
              {appUtils.formatNumber(quote.dayHigh || undefined, { currency })}
            </span>
          </div>

          <div className=" flex flex-col gap-1 ">
            <span className=" text-sm font-bold ">Day Low</span>

            <span className=" text-xl ">
              {appUtils.formatNumber(quote.dayLow || undefined, { currency })}
            </span>
          </div>

          <div className=" flex flex-col gap-1 ">
            <span className=" text-sm font-bold ">52 Week High</span>

            <span className=" text-xl ">
              {appUtils.formatNumber(quote.yearHigh || undefined, { currency })}
            </span>
          </div>

          <div className=" flex flex-col gap-1 ">
            <span className=" text-sm font-bold ">52 Week Low</span>

            <span className=" text-xl ">
              {appUtils.formatNumber(quote.yearLow || undefined, { currency })}
            </span>
          </div>

          <div className=" 1ap-2 flex flex-col ">
            <span className=" text-sm font-bold ">Beta</span>

            <span className=" text-xl ">
              {appUtils.formatNumber(outlook.profile.beta || undefined, {
                style: "decimal",
                notation: "compact",
              })}
            </span>
          </div>

          <div className=" flex flex-col gap-1 ">
            <span className=" text-sm font-bold ">Volume</span>

            <span className=" text-xl ">
              {appUtils.formatNumber(quote.volume || undefined, {
                style: "decimal",
                notation: "compact",
              })}
            </span>
          </div>

          <div className=" flex flex-col gap-1 ">
            <span className=" text-sm font-bold ">Average Volume</span>

            <span className=" text-xl ">
              {appUtils.formatNumber(quote.avgVolume || undefined, {
                style: "decimal",
                notation: "compact",
              })}
            </span>
          </div>

          <div className=" flex flex-col gap-1 ">
            <span className=" text-sm font-bold ">Market Cap</span>

            <span className=" text-xl ">
              {appUtils.formatNumber(quote.marketCap || undefined, {
                style: "decimal",
                notation: "compact",
                compactDisplay: "short",
              })}
            </span>
          </div>

          <div className=" flex flex-col gap-1 ">
            <span className=" text-sm font-bold ">EPS</span>

            <span className=" text-xl ">
              {appUtils.formatNumber(quote.eps || undefined, {
                notation: "compact",
                compactDisplay: "short",
              })}
            </span>
          </div>

          <div className=" flex flex-col gap-1 ">
            <span className=" text-sm font-bold ">PE Ratio</span>

            <span className=" text-xl ">
              {appUtils.formatNumber(quote.pe || undefined, {
                style: "decimal",
                notation: "compact",
                compactDisplay: "short",
              })}
            </span>
          </div>

          {/* <div className=" flex flex-col gap-1 ">
            <span className=" text-sm font-bold ">PE Ratio (TTM)</span>

            <span className=" text-xl ">
              {appUtils.formatNumber(
                outlook.ratios[0]?.peRatioTTM || undefined,
                {
                  style: "decimal",
                  notation: "compact",
                  compactDisplay: "short",
                }
              )}
            </span>
          </div> */}

          <div className=" flex flex-col gap-1 ">
            <span className=" text-sm font-bold ">Earnings Date</span>

            <span className=" text-xl ">
              {quote.earningsAnnouncement
                ? format(new Date(quote.earningsAnnouncement), "MMM dd, yyyy")
                : "N/A"}
            </span>
          </div>

          <div className=" flex flex-col gap-1 ">
            <span className=" text-sm font-bold ">Shares Out</span>

            <span className=" text-xl ">
              {appUtils.formatNumber(quote.sharesOutstanding || undefined, {
                style: "decimal",
                notation: "compact",
                compactDisplay: "short",
              })}
            </span>
          </div>

          <div className=" flex flex-col gap-1 ">
            <span className=" text-sm font-bold ">Dividend</span>

            <span className=" text-xl ">
              {appUtils.formatNumber(
                outlook.stockDividend[0]?.dividend || undefined
              )}
            </span>
          </div>

          <div className=" flex flex-col gap-1 ">
            <span className=" text-sm font-bold ">Dividend Yield (TTM)</span>

            <span className=" text-xl ">
              {appUtils.formatNumber(
                outlook.metrics.dividendYielTTM || undefined,
                {
                  style: "decimal",
                }
              )}
            </span>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="  ">
        <HeaderWithUnderline>Recent News</HeaderWithUnderline>

        <div className=" grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-8 py-8 ">
          {outlook.stockNews.map((news, index) => {
            return (
              <Link
                key={`${news.title}`}
                href={news.url}
                target="_blank"
                className=" group space-y-1 rounded-lg p-3 duration-300 hover:bg-primary-base/10 "
              >
                <div className=" grid grid-cols-[auto,auto,1fr] items-center gap-2 rounded-lg text-sm text-main-gray-600 dark:text-main-gray-500 ">
                  <span>
                    {formatDistanceToNowStrict(new Date(news.publishedDate), {
                      addSuffix: true,
                    })}
                  </span>

                  <span className=" size-1 rounded-full bg-main-gray-600 " />

                  <span className=" truncate">{news.site}</span>
                </div>

                <div className=" line-clamp-3 font-medium ">{news.title}</div>
              </Link>

              // <div
              //   key={`news-${index}`}
              //   className={cn(
              //     " grid grid-cols-1 grid-rows-[auto,auto] gap-5 py-4 md:grid-cols-[auto,1fr] md:grid-rows-1 "
              //   )}
              // >
              //   <Avatar className=" h-full  w-full rounded-none md:max-h-60 md:max-w-96 ">
              //     <AvatarImage
              //       src={news.image}
              //       alt=""
              //       className="aspect-video h-full w-full object-cover "
              //       width={196}
              //       height={110}
              //     />

              //     <AvatarFallback className="">{news.symbol}</AvatarFallback>
              //   </Avatar>

              //   <div className="">
              //     <div className="flex flex-col flex-wrap items-start justify-between gap-y-2 ">
              //       <Link
              //         href={news.url}
              //         target="_blank"
              //         className={cn(
              //           "white-text text-lg font-bold text-[#020224] hover:text-primary-light hover:underline lg:text-xl"
              //         )}
              //       >
              //         {news.title}
              //       </Link>

              //       <div className=" space-y-1 ">
              //         <div className="whitespace-nowrap">{news.site}</div>

              //         <p className="white-text flex flex-nowrap items-center gap-2 text-sm font-medium text-[#565555] lg:text-base">
              //           {news.symbol && (
              //             <>
              //               <span className="">{news.symbol}</span>
              //               <span className="inline-block h-1 w-1 bg-[#0097F4]"></span>
              //             </>
              //           )}

              //           <span className="whitespace-nowrap">
              //             {format(
              //               new Date(news.publishedDate),
              //               "MMMM dd, yyyy"
              //             )}
              //           </span>
              //         </p>
              //       </div>
              //     </div>

              //     {/* <p className="white-text mt-4 text-base text-[#4B4646] lg:mt-4 ">
              //           {news.text}
              //         </p> */}
              //   </div>
              // </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
