"use client";
import ChartSummary from "@/app/(app)/ticker/[ticker]/stock-description/chart-summary";
import MarketSectionHeader from "@/components/ui/MarketSectionHeader";
import useFetcher from "@/hooks/useFetcher";
import { Quote } from "@/types";
import { HTMLAttributes, useEffect, useState } from "react";
import Quotes, { QuoteField } from "../Quotes";

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
  index?: string;
  label: string;
  route: string;
  fields?: QuoteField[];
} & HTMLAttributes<HTMLDivElement>;

export default function GroupOverview(props: Props) {
  const { index, label, route, fields, ...rest } = props;
  const { wrapper, data } = useFetcher<{
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

      {quote && (
        <p className="white-text mb-10 mt-4 text-sm font-medium text-[#2F3A48]">
          Previous Close: {quote.previousClose}
        </p>
      )}

      {data?.data && (
        <Quotes
          fields={fields}
          quotes={data.data.slice(0, 5)}
          onRowClick={onRowClickHandler}
        />
      )}
    </section>
  );
}
