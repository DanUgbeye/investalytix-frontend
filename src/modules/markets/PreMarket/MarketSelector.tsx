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
    <div className="mx-auto mb-11 grid w-fit grid-cols-2 gap-2 rounded bg-[#F9F9F9] p-3">
      {markets.map((market, index) => (
        <Link
          key={market.href}
          href={market.href}
          className={`whitespace-nowrap rounded px-14 py-2 text-center font-semibold hover:bg-primary-base hover:text-white focus:bg-primary-base focus:text-white ${
            active === market.label
              ? "bg-primary-base text-white"
              : "bg-[#F5F5F5] text-[#636363]"
          }`}
        >
          {market.label}
        </Link>
      ))}
    </div>
  );
}
