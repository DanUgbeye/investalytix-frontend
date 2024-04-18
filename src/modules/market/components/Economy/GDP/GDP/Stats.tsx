import Image from "next/image";
import Panel from "../../Panel";
import GDP from "./GDP";
import RelatedTable from "./RelatedTable";

export default function Stats() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr,300px]">
      <div className="overflow-hidden">
        <p className="text-[#636363] white-text">
          The Gross Domestic Product (GDP) in the United States was worth
          25439.70 billion US dollars in 2022, according to official data from
          the World Bank. The GDP value of the United States represents 10.91
          percent of the world economy.
          <br />
          <br />
          source: World Bank
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

        <GDP />

        <p className="mt-8 w-full border border-[#DDDDDDDD] px-4 py-5 text-[#333333] white-text">
          This page displays a table with actual values, consensus figures,
          forecasts, statistics and historical data charts for Unemployment
          Rate. This page provides values for Unemployment Rate reported in
          several countries. The table has current values for Unemployment Rate,
          previous releases, historical highs and record lows, release
          frequency, reported unit and currency plus links to historical data
          charts.
        </p>
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
