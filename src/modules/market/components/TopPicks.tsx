import { Quote } from "@/types";
import Link from "next/link";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/market/actives` + "?limit=5"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<{
    message: String;
    status: number;
    data: Quote[];
  }>;
}

export default async function TopPicks() {
  const data = await getData();
  return (
    <div>
      <header className="relative mb-5 flex items-center justify-between">
        <p className="white-text text-2xl font-bold capitalize text-[#2A3037]">
          hot picks
        </p>

        <Link
          href={`/picks?q=hot picks`}
          className="text-hover-focus rounded-full py-1 text-sm"
        >
          view all
        </Link>
      </header>

      <div className="flex flex-col">
        {data.data.slice(0, 5).map((quote) => {
          if (!quote.changesPercentage) return null;
          const isPositive = quote.changesPercentage >= 0;

          return (
            <div
              key={quote.name}
              className="grid grid-cols-3 border-b py-2 dark:dark:border-white/10"
            >
              <div className="flex w-[40%] items-center gap-2">
                <div className="h-6 w-6 shrink-0 animate-pulse rounded-full bg-gray-200"></div>
                <div className="">{quote.symbol}</div>
              </div>
              <div
                className={`w-fit place-self-center self-center rounded px-4 py-1 text-center font-bold ${
                  isPositive
                    ? "bg-[#D6FFEF] text-[#00CA5F]"
                    : "bg-[#FEDEDF] text-[#E74C3C]"
                }`}
              >
                {isPositive && "+"}
                {quote?.changesPercentage.toFixed(2)}%
              </div>
              <p className="white-text text-end">${quote.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
