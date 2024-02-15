"use client";
import { useState } from "react";
import PerformanceTable from "../../PerformanceTable";
import Panels from "../../Panels";

export default function GovernmentDeptToGDP() {
  const markets = [
    "WORLD",
    "EUROPE",
    "AMERICA",
    "ASIA",
    "AFRICA",
    "AUSTRALIA",
    "G20",
  ] as const;

  const [activeMarket, setActiveMarket] = useState<(typeof markets)[number]>(
    markets[0]
  );

  const updateActiveMarket = (mkt: typeof activeMarket) => () =>
    setActiveMarket(mkt);
  return (
    <div className="">
      <div
        className={"mb-14 flex justify-between gap-4 overflow-auto px-14 py-5"}
      >
        {markets.map((mkt) => (
          <button
            key={mkt}
            onClick={updateActiveMarket(mkt)}
            className={`whitespace-nowrap rounded px-5 py-3 ${
              mkt === activeMarket
                ? "bg-primary-base text-white"
                : "bg-transparent text-[#636363]"
            }`}
          >
            {mkt}
          </button>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr,300px]">
        <PerformanceTable />
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
    </div>
  );
}
