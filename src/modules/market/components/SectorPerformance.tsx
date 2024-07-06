import { Quote } from "@/types";
import Link from "next/link";

async function getData(url: string) {
  const res = await fetch(url + "?limit=5");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<{
    message: String;
    status: number;
    data: { sector: string; changesPercentage: string }[];
  }>;
}

export default async function SectorPerformance({
  url,
  moreUrl,
  title,
}: {
  url: string;
  title: string;
  moreUrl?: string;
}) {
  const data = await getData(url);
  return (
    <div>
      <header className="relative mb-5 flex items-center justify-between">
        <p className="white-text text-2xl font-bold capitalize text-[#2A3037]">
          {title}
        </p>

        {moreUrl && (
          <Link
            href={moreUrl}
            className="text-hover-focus rounded-full py-1 text-sm"
          >
            view all
          </Link>
        )}
      </header>

      <div className="flex flex-col">
        {data.data.slice(0, 5).map((quote) => {
          // if (!quote.changesPercentage) return null;
          // const isPositive = quote.changesPercentage >= 0;

          return (
            <div
              key={quote.sector}
              className="grid h-12 grid-cols-[1fr,auto] border-b py-2 dark:dark:border-white/10"
            >
              <div className="">{quote.sector}</div>
              <p className="white-text text-end">{quote.changesPercentage}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
