"use client";

import HeaderWithUnderline from "@/components/heading";
import NewsCard from "@/modules/news/components/news-card";
import NewsLink from "@/modules/news/components/news-link";
import appUtils from "@/utils/app-util";
import { format } from "date-fns";
import ChartSummary from "../../../../../components/chart-summary";
import { SummaryPageData } from "./page";

interface SummaryScreenProps extends SummaryPageData {
  ticker: string;
}

export default function SummaryScreen(props: SummaryScreenProps) {
  const { ticker, quote, outlook, currency } = props;

  return (
    <section className="space-y-8 pb-8">
      <ChartSummary ticker={ticker} />

      {/* KEY STATS */}
      <section className="space-y-6">
        <HeaderWithUnderline>Key Stats</HeaderWithUnderline>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] gap-6 p-4 xl:grid-cols-4 xl:justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold opacity-60">Open</span>

            <span className="text-xl">
              {appUtils.formatNumber(quote.open || undefined, { currency })}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold opacity-60">Prev Close</span>

            <span className="text-xl">
              {appUtils.formatNumber(quote.previousClose || undefined, {
                currency,
              })}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold opacity-60">Day High</span>

            <span className="text-xl">
              {appUtils.formatNumber(quote.dayHigh || undefined, { currency })}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold opacity-60">Day Low</span>

            <span className="text-xl">
              {appUtils.formatNumber(quote.dayLow || undefined, { currency })}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold opacity-60">52 Week High</span>

            <span className="text-xl">
              {appUtils.formatNumber(quote.yearHigh || undefined, { currency })}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold opacity-60">52 Week Low</span>

            <span className="text-xl">
              {appUtils.formatNumber(quote.yearLow || undefined, { currency })}
            </span>
          </div>

          <div className="1ap-2 flex flex-col">
            <span className="text-sm font-bold opacity-60">Beta</span>

            <span className="text-xl">
              {appUtils.formatNumber(outlook.profile.beta || undefined, {
                style: "decimal",
                notation: "compact",
              })}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold opacity-60">Volume</span>

            <span className="text-xl">
              {appUtils.formatNumber(quote.volume || undefined, {
                style: "decimal",
                notation: "compact",
              })}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold opacity-60">Average Volume</span>

            <span className="text-xl">
              {appUtils.formatNumber(quote.avgVolume || undefined, {
                style: "decimal",
                notation: "compact",
              })}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold opacity-60">Market Cap</span>

            <span className="text-xl">
              {appUtils.formatNumber(quote.marketCap || undefined, {
                currency,
                notation: "compact",
              })}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold opacity-60">EPS</span>

            <span className="text-xl">
              {appUtils.formatNumber(quote.eps || undefined, {
                notation: "compact",
                compactDisplay: "short",
              })}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold opacity-60">PE Ratio</span>

            <span className="text-xl">
              {appUtils.formatNumber(quote.pe || undefined, {
                style: "decimal",
                notation: "compact",
                compactDisplay: "short",
              })}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold opacity-60">Earnings Date</span>

            <span className="text-xl">
              {quote.earningsAnnouncement
                ? format(new Date(quote.earningsAnnouncement), "MMM dd, yyyy")
                : "N/A"}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold opacity-60">Shares Out</span>

            <span className="text-xl">
              {appUtils.formatNumber(quote.sharesOutstanding || undefined, {
                style: "decimal",
                notation: "compact",
                compactDisplay: "short",
              })}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold opacity-60">Dividend</span>

            <span className="text-xl">
              {appUtils.formatNumber(
                outlook.stockDividend[0]?.dividend || undefined
              )}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold opacity-60">Dividend Yield (TTM)</span>

            <span className="text-xl">
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
      <section className=" ">
        <HeaderWithUnderline>Recent News</HeaderWithUnderline>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(17rem,1fr))] gap-4 py-8 sm:gap-8">
          {outlook.stockNews.map((news, index) => {
            return (
              <NewsLink key={`${news.title}`} news={news}>
                <NewsCard news={news} />
              </NewsLink>
            );
          })}
        </div>
      </section>
    </section>
  );
}
