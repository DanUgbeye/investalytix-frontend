import Link from "next/link";

const markets = [
  { label: "U.S", href: "/markets/pre-market/us" },
  { label: "AMERICAS", href: "/markets/pre-market/americas" },
] as const;

export default function MarketSelector({
  active,
}: {
  active?: (typeof markets)[number]["label"];
}) {
  return (
    <div className="mx-auto mb-20 flex w-fit items-center justify-center gap-2 rounded">
      {markets.map((market, index) => (
        <Link
          key={market.href}
          href={market.href}
          className={`capitalize bg-hover-focus px-4 py-1 rounded-full whitespace-nowrap text-center text-sm ${
            active === market.label
              ? "text-primary-base"
              : ""
          }`}
        >
          {market.label.toLowerCase()}
        </Link>
      ))}
    </div>
  );
}
