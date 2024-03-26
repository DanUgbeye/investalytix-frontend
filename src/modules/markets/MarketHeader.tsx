import Link from "next/link";

const markets = [
  { label: "PRE-MKT", href: "/markets/pre-market" },
  { label: "STOCK MARKET", href: "/markets/stock-market" },
  { label: "FX", href: "/markets/fx" },
  { label: "CRYPTOCURRENCY", href: "/markets/cryptocurrency" },
  { label: "COMMODITIES", href: "/markets/commodities" },
  { label: "BONDS", href: "/markets/bonds" },
  { label: "ECONOMY", href: "/markets/economy" },
] as const;

export default function MarketHeader({
  name,
  active,
}: {
  name: string;
  active?: (typeof markets)[number]["label"];
}) {
  return (
    <div className="">
      {active && (
        <p className="mb-2 text-center text-xl font-extrabold uppercase">
          MARKETS
        </p>
      )}
      <h1 className="mb-7 border-b-[6px] border-primary-base pb-2 text-center text-3xl font-extrabold">
        {name}
      </h1>

      <div
        className={"mb-10 flex justify-between gap-10 overflow-auto px-14 py-5"}
      >
        {markets.map((mkt) => (
          <Link
            key={mkt.href}
            href={mkt.href}
            className={`whitespace-nowrap border-b-2 pb-2 font-bold ${
              mkt.label === active
                ? "border-primary-base "
                : "border-transparent"
            }`}
          >
            {mkt.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
