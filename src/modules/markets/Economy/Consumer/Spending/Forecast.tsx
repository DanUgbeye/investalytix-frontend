import Image from "next/image";
import Panel from "../../Panel";
import RelatedTable from "./RelatedTable";
import Spending from "./Spending";

export default function Forecast() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr,300px]">
      <div className="overflow-hidden">
        <p className="text-[#636363] dark:text-white">
          Consumer Spending in the United States increased to 15569.85 USD
          Billion in the fourth quarter of 2023 from 15461.38 USD Billion in the
          third quarter of 2023. Consumer Spending in the United States averaged
          6710.12 USD Billion from 1950 until 2023, reaching an all time high of
          15569.85 USD Billion in the fourth quarter of 2023 and a record low of
          1487.85 USD Billion in the first quarter of 1950.
          <br />
          <br />
          source: U.S. Bureau of Economic Analysis
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

        <Spending />
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
