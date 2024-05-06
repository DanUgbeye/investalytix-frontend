import Image from "next/image";
import Panel from "../../Panel";
import RelatedTable from "./RelatedTable";
import BalanceSheet from "./BalanceSheet";

export default function Forecast() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr,300px]">
      <div className="overflow-hidden">
        <p className="white-text text-[#636363]">
          Central Bank Balance Sheet in the United States decreased to 7673741
          USD Million in January 17 from 7686710 USD Million in the previous
          week. Central Bank Balance Sheet in the United States averaged
          3633306.96 USD Million from 2002 until 2024, reaching an all time high
          of 8965487.00 USD Million in April of 2022 and a record low of
          712809.00 USD Million in January of 2003.
          <br />
          <br />
          source: Federal Reserve
        </p>

        <div className="relative mt-8 h-[320px] w-full max-md:h-[200px]">
          <Image
            src="/images/chart2.png"
            fill
            alt=""
            className="object-contain object-left"
          />
        </div>

        <div className="h-8 w-full"></div>
        <RelatedTable />

        <div className="h-8 w-full"></div>

        <BalanceSheet />
      </div>
      <div className="">
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
