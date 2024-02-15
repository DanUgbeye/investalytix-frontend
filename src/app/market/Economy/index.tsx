"use client";
import { useState } from "react";
import InflationRate from "./MarketIndicators/InflationRate";
import InterestRate from "./MarketIndicators/InterestRate";
import UnemploymentRate from "./MarketIndicators/UnemploymentRate";
import CreditRating from "./MarketIndicators/CreditRating";
import GovernmentDeptToGDP from "./MarketIndicators/GovernmentDeptToGDP";

const markets = [
  // main indicators
  {
    parent: "main indicators",
    label: "GDP Growth Rate",
  },
  {
    parent: "main indicators",
    label: "Interest Rate",
  },
  {
    parent: "main indicators",
    label: "Inflation Rate",
  },
  {
    parent: "main indicators",
    label: "Unemployment Rate",
  },
  {
    parent: "main indicators",
    label: "Government Debt to GDP",
  },
  {
    parent: "main indicators",
    label: "Credit Rating",
  },

  // bonds
  {
    parent: "bonds",
    label: "10 Years Treasury",
  },
  {
    parent: "bonds",
    label: "30 Years Treasury",
  },
  {
    parent: "bonds",
    label: "Yield Curve",
  },
  // labour
  {
    parent: "labour",
    label: "Initial Jobless Claims",
  },
  {
    parent: "labour",
    label: "Unemployment Rate",
  },
  {
    parent: "labour",
    label: "Popluation",
  },
  // government
  {
    parent: "government",
    label: "Credit Rating",
  },
  {
    parent: "government",
    label: "Government Debt",
  },
  {
    parent: "government",
    label: "Government Debt to GDP",
  },
  // money
  {
    parent: "money",
    label: "Interest Rate",
  },
  {
    parent: "money",
    label: "Central Bank Balance Sheet",
  },
  // gdp
  {
    parent: "gdp",
    label: "GDP",
  },
  {
    parent: "gdp",
    label: "GDP Growth Rate",
  },
  // consumer
  {
    parent: "consumer",
    label: "Consumer Confidence",
  },
  {
    parent: "consumer",
    label: "Consumer Spending",
  },
  // calendar
  {
    parent: "calendar",
    label: "Economic Calendar",
  },
] as const;

const getMarketsByParent = (mkt: (typeof markets)[number]["parent"]) =>
  markets.filter((market) => market.parent === mkt);

export default function Economy() {
  const [activeMarket, setActiveMarket] = useState<
    (typeof markets)[number] | null
  >(null);

  const updateActiveMarket = (mkt: typeof activeMarket) =>
    setActiveMarket((state) => (state === mkt ? null : mkt));

  return (
    <div className="">
      {activeMarket?.parent == "main indicators" &&
      activeMarket.label === "Inflation Rate" ? (
        <InflationRate />
      ) : activeMarket?.parent == "main indicators" &&
        activeMarket.label === "Interest Rate" ? (
        <InterestRate />
      ) : activeMarket?.parent == "main indicators" &&
        activeMarket.label === "Unemployment Rate" ? (
        <UnemploymentRate />
      ) : activeMarket?.parent == "main indicators" &&
        activeMarket.label === "Government Debt to GDP" ? (
        <GovernmentDeptToGDP />
      ) : activeMarket?.parent == "main indicators" &&
        activeMarket.label === "Credit Rating" ? (
        <CreditRating />
      ) : activeMarket === null ? (
        <div className="grid gap-x-5 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          <div className="md:col-span-2 lg:col-span-3">
            <Menu
              onClick={updateActiveMarket}
              header="Main Indicators"
              links={getMarketsByParent("main indicators")}
            />
          </div>
          <Menu
            onClick={updateActiveMarket}
            header="Bonds"
            links={getMarketsByParent("bonds")}
          />
          <Menu
            onClick={updateActiveMarket}
            header="Labour"
            links={getMarketsByParent("labour")}
          />
          <Menu
            onClick={updateActiveMarket}
            header="Government"
            links={getMarketsByParent("government")}
          />
          <Menu
            onClick={updateActiveMarket}
            header="Money"
            links={getMarketsByParent("money")}
          />
          <Menu
            onClick={updateActiveMarket}
            header="GDP"
            links={getMarketsByParent("gdp")}
          />
          <Menu
            onClick={updateActiveMarket}
            header="Consumer"
            links={getMarketsByParent("consumer")}
          />
          <div className="max-lg:hidden"></div>
          <Menu
            onClick={updateActiveMarket}
            header="Calendar"
            links={getMarketsByParent("calendar")}
          />
          <div className="max-lg:hidden"></div>
        </div>
      ) : null}
    </div>
  );
}

type MenuProps = {
  links: ReturnType<typeof getMarketsByParent>;
  header: string;
  onClick: (v: (typeof markets)[number]) => void;
};
export function Menu({ links, header, onClick }: MenuProps) {
  return (
    <section>
      <header className="bg-[#0B0B0B] p-3 font-bold capitalize text-white">
        {header}
      </header>
      <ul className="flex w-full flex-col">
        {links.map((link) => (
          <li
            key={link.label.replaceAll(" ", "-")}
            className="w-full p-3 text-center text-[#252525] odd:bg-[#F9F9F9]"
          >
            <button onClick={() => onClick(link)}>{link.label}</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
