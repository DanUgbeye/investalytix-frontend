import MarketSectionHeader from "@/components/ui/MarketSectionHeader";
import Quotes from "../../Quotes";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/market/sector-performance`
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
    data: { sector: string; changesPercentage: string }[];
  }>;
}

export default async function Sectors() {
  const data = await getData();
  return (
    <section>
      <MarketSectionHeader label="SECTORS" id="sectors" />

      <div className="flex flex-col">
        {data.data.map((quote) => {
          // if (!quote.changesPercentage) return null;
          // const isPositive = quote.changesPercentage >= 0;

          return (
            <div
              key={quote.sector}
              className="grid h-12 grid-cols-[1fr,auto] border-b py-2 dark:dark:border-white/10"
            >
              <div className="">{quote.sector}</div>
              <p className="white-text text-end">{quote.changesPercentage}</p>
            </div>
          );
        })}
      </div>

      {/* <Quotes
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
      /> */}
    </section>
  );
}
