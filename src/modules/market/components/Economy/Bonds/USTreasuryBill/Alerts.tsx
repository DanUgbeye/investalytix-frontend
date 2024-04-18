import Image from "next/image";
import Panel from "../../Panel";
import QuotesTable from "./QuotesTable";
import BondsTable from "./BondsTable";
import RelatedTable from "./RelatedTable";
import BondNoteYield from "./BondNoteYield";

export default function Alerts() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr,300px]">
      <div className="">
        <p className="mb-8 text-[#636363] white-text">
          The yield on the 10-year US Treasury note rose to the 4.1% mark on
          Wednesday, the highest in over one month, as strong retail sales
          figures magnified recent pushbacks against imminent interest rate cuts
          by the Federal Reserve. Retail activity expanded by 0.6% from the
          previous month in December, above market expectations of a 0.4%
          increase to extend evidence of the resilience of US consumers to
          higher interest rates. Earlier, FOMC member Waller pushed back against
          the need for rate cuts, citing a strong labor market and economic
          activity. Funds futures show that roughly 60% of the market has
          positioned for a rate cut by March, considerably lower than levels at
          the start of the year.
        </p>

        <div className="relative mb-8 h-[500px] w-full">
          <Image src="/images/chart1.png" fill alt="" />
        </div>

        <BondsTable />

        <div className="h-8 w-full"></div>
        <RelatedTable />

        <div className="h-8 w-full"></div>
        <BondNoteYield />
      </div>
      <div className="">
        <QuotesTable />

        <div className="mt-8 flex flex-col gap-1">
          <Panel heading={"Prices"} defaultOpen />
          <Panel heading={"Markets"} />
          <Panel heading={"Labour"} />
          <Panel heading={"GDP"} />
          <Panel heading={"Health"} />
          <Panel heading={"Money"} />
          <Panel heading={"Trade"} />
          <Panel heading={"Government"} />
          <Panel heading={"Business"} />
          <Panel heading={"Consumer"} />
          <Panel heading={"Housing"} />
          <Panel heading={"Taxes"} />
          <Panel heading={"Climate"} />
        </div>
      </div>
    </div>
  );
}
