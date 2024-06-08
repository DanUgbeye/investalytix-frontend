import Quotes from "@/modules/market/components/Quotes";
import { Quote } from "@/types";
import MarketHeading from "../MarketHeading";

export default function Cryptocurrency({ quotes }: { quotes: Quote[] }) {
  return (
    <>
      {/* CRYPTOCURRENCY PAIRS */}
      <section className="">
        <MarketHeading label="CRYPTOCURRENCY PAIRS" />

        <Quotes
          quotes={quotes}
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
              label: "close",
              key: "previousClose",
            },
          ]}
        />
      </section>
    </>
  );
}
