import Image from "next/image";
import PerformanceTable from "../../PerformanceTable";
import Panels from "../../Panels";

export default function Australia() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr,300px]">
      <div className="">
        <div className="relative mb-12 h-36 overflow-hidden lg:h-96">
          <Image src="/images/map1.png" fill alt="" className="object-cover" />
        </div>

        <div className="">
          <PerformanceTable />
        </div>

        <p className="mt-14 border border-[#DDDDDD] px-5 py-6">
          This page displays a table with GDP Growth Rate for a list of
          countries . This page provides values for GDP Growth Rate reported in
          several countries. The table has current values for GDP Growth Rate,
          previous releases, historical highs and record lows, release
          frequency, reported unit and currency plus links to historical data
          charts.
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <Panels heading={"Prices"} defaultOpen />
        <Panels heading={"Markets"} />
        <Panels heading={"Labour"} />
        <Panels heading={"GDP"} />
        <Panels heading={"Health"} />
        <Panels heading={"Money"} />
        <Panels heading={"Trade"} />
        <Panels heading={"Government"} />
        <Panels heading={"Business"} />
        <Panels heading={"Consumer"} />
        <Panels heading={"Housing"} />
        <Panels heading={"Taxes"} />
        <Panels heading={"Climate"} />
      </div>
    </div>
  );
}
