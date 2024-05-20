import Quotes from "@/modules/market/components/Quotes";
import { Quote } from "@/types";

export default function Cryptocurrency({ quotes }: { quotes: Quote[] }) {
  return (
    <>
      {/* CRYPTOCURRENCY PAIRS */}
      <section className="">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            CRYPTOCURRENCY PAIRS
          </h2>
        </header>

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
