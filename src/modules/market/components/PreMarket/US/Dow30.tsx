import MarketSectionHeader from "@/components/ui/MarketSectionHeader";
import Quotes from "../../Quotes";

export default function Dow30() {
  return (
    <section>
      <MarketSectionHeader label="DOW 30" id="dow-30" />
      <div className="mt-11"></div>

      {/* <header className="mb-5">
        <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
          DOW 30 CHART
        </h2>
      </header> */}
      <Quotes
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
