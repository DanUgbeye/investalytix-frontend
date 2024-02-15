"use client";
import { useState } from "react";
import Africa from "./Africa";
import America from "./America";
import Asia from "./Asia";
import Australia from "./Australia";
import Europe from "./Europe";
import G20 from "./G20";
import World from "./World";

export default function GDPGrowthRate() {
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

      <div className="">
        {activeMarket === "AFRICA" ? (
          <Africa />
        ) : activeMarket === "AMERICA" ? (
          <America />
        ) : activeMarket === "ASIA" ? (
          <Asia />
        ) : activeMarket === "AUSTRALIA" ? (
          <Australia />
        ) : activeMarket === "EUROPE" ? (
          <Europe />
        ) : activeMarket === "G20" ? (
          <G20 />
        ) : activeMarket === "WORLD" ? (
          <World />
        ) : null}
      </div>
    </div>
  );
}
