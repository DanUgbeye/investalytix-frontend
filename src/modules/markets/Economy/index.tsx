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
    href: "/markets/economy/bonds/us-10-year-treasury-bill/summary",
  },
  {
    parent: "bonds",
    label: "30 Years Treasury",
    href: "/markets/economy/bonds/us-30-year-treasury-bill/summary",
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
    href: "/markets/economy/labour/jobless-claims/summary",
  },
  {
    parent: "labour",
    label: "Unemployment Rate",
    href: "/markets/economy/labour/unemployment-rate/summary",
  },
  {
    parent: "labour",
    label: "Popluation",
    href: "/markets/economy/labour/population/world",
  },
  // government
  {
    parent: "government",
    label: "Credit Rating",
    href: "/markets/economy/government/credit-rating/summary",
  },
  {
    parent: "government",
    label: "Government Debt",
    href: "/markets/economy/government/government-debt/summary",
  },
  {
    parent: "government",
    label: "Government Debt to GDP",
    href: "/markets/economy/government/government-debt-to-gdp/summary",
  },
  // money
  {
    parent: "money",
    label: "Interest Rate",
    href: "/markets/economy/money/interest-rate/summary",
  },
  {
    parent: "money",
    label: "Central Bank Balance Sheet",
    href: "/markets/economy/money/cb-balance-sheet/summary",
  },
  // gdp
  {
    parent: "gdp",
    label: "GDP",
    href: "/markets/economy/gdp/gdp/summary",
  },
  {
    parent: "gdp",
    label: "GDP Growth Rate",
    href: "/markets/economy/gdp/growth-rate/summary",
  },
  // consumer
  {
    parent: "consumer",
    label: "Consumer Sentiment",
    href: "/markets/economy/consumer/sentiment/summary",
  },
  {
    parent: "consumer",
    label: "Consumer Spending",
    href: "/markets/economy/consumer/spending/summary",
  },
  // calendar
  {
    parent: "calendar",
    label: "Economic Calendar",
    href: "/markets/economy/calendar/summary",
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
