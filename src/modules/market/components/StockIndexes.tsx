import { Quote } from "@/types";
import MarketHeading from "./MarketHeading";
import Quotes from "./Quotes";
import { HTMLAttributes } from "react";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/tickers/^IXIC,^GSPC,^DJI,^RUT,^OEX,^MID,^NYA/quotes`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<{
    message: String;
    status: number;
    data: Quote[];
  }>;
}

export default async function StockIndexes({
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const data = await getData();
  return (
    <section {...props}>
      <MarketHeading label="Stock Indexes" />

      <Quotes
        fields={[
          {
            label: "Name",
            key: "name",
          },
          {
            label: "Last",
            key: "price",
          },
          {
            label: "Chg",
            key: "change",
          },
          {
            label: "Chg%",
            key: "changesPercentage",
          },
        ]}
        quotes={data.data.slice(0, 5)}
      />
    </section>
  );
}
