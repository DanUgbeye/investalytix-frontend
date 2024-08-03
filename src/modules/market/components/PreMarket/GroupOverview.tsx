"use client";
import ChartSummary from "@/components/chart-summary";
import MarketSectionHeader from "@/components/ui/MarketSectionHeader";
import useFetcher from "@/hooks/useFetcher";
import { Quote } from "@/types";
import { HTMLAttributes, useEffect, useState } from "react";
import Quotes, { QuoteField, QuotesTableProps } from "../Quotes";
import Spinner from "@/components/spinner";
import { motion } from "framer-motion";

async function getData(route: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${route}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json() as Promise<{
    message: String;
    status: number;
    data: Quote[];
  }>;
}

type Props = {
  label: string; // heading
  route: string; // route to fetch the data
  limit?: number; // number of results to display
  quotes?: Partial<QuotesTableProps>;
} & HTMLAttributes<HTMLDivElement>;

export default function GroupOverview(props: Props) {
  const { label, route, limit = 5, quotes = {}, ...rest } = props;
  const { wrapper, data, loading } = useFetcher<{
    message: String;
    status: number;
    data: Quote[];
  }>();
  const [quote, setQuote] = useState<Quote>();

  useEffect(() => {
    wrapper(() => getData(route));
  }, []);

  useEffect(() => {
    if (!data) return;
    setQuote(data.data[0]);
  }, [data]);

  function updateQuote(quote: Quote) {
    setQuote(quote);
  }

  function onRowClickHandler(quote: Quote) {
    updateQuote(quote);
  }

  return (
    <section {...rest}>
      <MarketSectionHeader className="pb-4 text-2xl font-bold" label={label} />

      {quote && (
        <p className="white-text mb-4 text-sm font-medium text-[#2F3A48]">
          {quote.name}
        </p>
      )}

      {!quote ? (
        <div className="h-80 w-full"></div>
      ) : (
        <ChartSummary ticker={quote.symbol} />
      )}

      {/* <motion.div
        initial="rest"
        animate={loading ? "show" : "hide"}
        variants={{
          rest: {
            top: -50,
            opacity: 0,
          },
          show: {
            opacity: 1,
            y: -20,
          },
          hide: {
            opacity: 0,
            y: -50,
          },
        }}
        className="flex items-center justify-center"
      >
        <div>
          <Spinner />
        </div>
      </motion.div> */}

      {quote && (
        <p className="white-text mb-10 mt-4 text-sm font-medium text-[#2F3A48]">
          Previous Close: {quote.previousClose}
        </p>
      )}

      {data?.data && (
        <Quotes
          quotes={data.data.slice(0, limit)}
          onRowHover={onRowClickHandler}
          {...quotes}
        />
      )}
    </section>
  );
}
