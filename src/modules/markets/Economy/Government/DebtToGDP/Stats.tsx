import Image from "next/image";
import Panel from "../../Panel";
import DeptToGDP from "./DeptToGDP";
import RelatedTable from "./RelatedTable";


export default function Summary() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr,300px]">
      <div className="overflow-hidden">
        <p className="text-[#636363] dark:text-white">
          The United States recorded a Government Debt to GDP of 129 percent of
          the country&apos;s Gross Domestic Product in 2022. Government Debt to GDP
          in the United States averaged 65.20 percent of GDP from 1940 until
          2022, reaching an all time high of 129.00 percent of GDP in 2022 and a
          record low of 31.80 percent of GDP in 1981.
          <br />
          <br />
          source: Office of Management and Budget, The White House
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

        <DeptToGDP />
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