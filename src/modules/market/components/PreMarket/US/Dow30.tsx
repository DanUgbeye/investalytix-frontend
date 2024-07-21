import MarketSectionHeader from "@/components/ui/MarketSectionHeader";
import Quotes from "../../Quotes";
import { Quote } from "@/types";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/market/index/dow-jones/constituents`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<{
    message: String;
    status: number;
    data: Quote[];
  }>;
}

export default async function Dow30() {
  const data = await getData();

  return (
    <section>
      <MarketSectionHeader label="DOW 30" id="dow-30" />
      <Quotes
        quotes={data.data}
        fields={[
          {
            label: "Symbol",
            key: "symbol",
          },
          {
            label: "name",
            key: "name",
          },
          {
            label: "price",
            key: "price",
          },
          {
            label: "chg",
            key: "change",
          },
          {
            label: "%chg",
            key: "changesPercentage",
          },
          {
            label: "low",
            key: "dayHigh",
          },
          {
            label: "high",
            key: "dayHigh",
          },
          {
            label: "close",
            key: "previousClose",
          },
        ]}
      />
    </section>
  );
}
