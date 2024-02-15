"use client";
import { Menu } from "./Menu";

const markets = [
  // main indicators
  {
    parent: "main indicators",
    label: "GDP Growth Rate",
    href: "/markets/economy/main-indicators/gdp-growth-rate",
  },
  {
    parent: "main indicators",
    label: "Interest Rate",
    href: "/markets/economy/main-indicators/interest-rate",
  },
  {
    parent: "main indicators",
    label: "Inflation Rate",
    href: "/markets/economy/main-indicators/inflation-rate",
  },
  {
    parent: "main indicators",
    label: "Unemployment Rate",
    href: "/markets/economy/main-indicators/unemployment-rate",
  },
  {
    parent: "main indicators",
    label: "Government Debt to GDP",
    href: "/markets/economy/main-indicators/government-dept-to-gdp",
  },
  {
    parent: "main indicators",
    label: "Credit Rating",
    href: "/markets/economy/main-indicators/credit-ranking",
  },

  // bonds
  {
    parent: "bonds",
    label: "10 Years Treasury",
    href: "/markets/economy/bonds/10-years-treasury",
  },
  {
    parent: "bonds",
    label: "30 Years Treasury",
    href: "/markets/economy/bonds/30-years-treasury",
  },
  {
    parent: "bonds",
    label: "Yield Curve",
    href: "/markets/economy/bonds/yield-curve",
  },
  // labour
  {
    parent: "labour",
    label: "Initial Jobless Claims",
    href: "/markets/economy/labour/jobless-claims",
  },
  {
    parent: "labour",
    label: "Unemployment Rate",
    href: "/markets/economy/labour/unemployment-rate",
  },
  {
    parent: "labour",
    label: "Popluation",
    href: "/markets/economy/labour/population",
  },
  // government
  {
    parent: "government",
    label: "Credit Rating",
    href: "/markets/economy/government/credit-rating",
  },
  {
    parent: "government",
    label: "Government Debt",
    href: "/markets/economy/government/government-dept",
  },
  {
    parent: "government",
    label: "Government Debt to GDP",
    href: "/markets/economy/government/government-dept-to-gdp",
  },
  // money
  {
    parent: "money",
    label: "Interest Rate",
    href: "/markets/economy/money/interest-rate",
  },
  {
    parent: "money",
    label: "Central Bank Balance Sheet",
    href: "/markets/economy/money/cb-balance-sheet",
  },
  // gdp
  {
    parent: "gdp",
    label: "GDP",
    href: "/markets/economy/gdp/gdp",
  },
  {
    parent: "gdp",
    label: "GDP Growth Rate",
    href: "/markets/economy/gdp/gdp-growth-rate",
  },
  // consumer
  {
    parent: "consumer",
    label: "Consumer Confidence",
    href: "/markets/economy/consumer/consumer-confidence",
  },
  {
    parent: "consumer",
    label: "Consumer Spending",
    href: "/markets/economy/consumer/consumer-spending",
  },
  // calendar
  {
    parent: "calendar",
    label: "Economic Calendar",
    href: "/markets/economy/calander/economic-calendar",
  },
];

const getMarketsByParent = (mkt: (typeof markets)[number]["parent"]) =>
  markets.filter((market) => market.parent === mkt);

export default function Economy() {
  return (
    <div className="grid gap-x-5 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
      <div className="md:col-span-2 lg:col-span-3">
        <Menu
          header="Main Indicators"
          links={getMarketsByParent("main indicators")}
        />
      </div>
      <Menu header="Bonds" links={getMarketsByParent("bonds")} />
      <Menu header="Labour" links={getMarketsByParent("labour")} />
      <Menu header="Government" links={getMarketsByParent("government")} />
      <Menu header="Money" links={getMarketsByParent("money")} />
      <Menu header="GDP" links={getMarketsByParent("gdp")} />
      <Menu header="Consumer" links={getMarketsByParent("consumer")} />
      <div className="max-lg:hidden"></div>
      <Menu header="Calendar" links={getMarketsByParent("calendar")} />
      <div className="max-lg:hidden"></div>
    </div>
  );
}
