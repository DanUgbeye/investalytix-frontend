import { Quote } from "@/types";
import Quotes from "../Quotes";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/market/forex/asia`
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

export async function AsianMarket() {
  const data = await getData();

  return (
    <section>
          <h2 className="white-text mb-6 mt-8 text-2xl font-bold">
            ASIAN MARKET
          </h2>
          <div className="grid gap-5 lg:grid-cols-[4fr,3fr]">
            <Quotes quotes={data.data}/>
            <div className="white-text  text-[#2A3037]">
              <p className="border-t border-dashed border-[#D9D9D9] py-4 font-medium dark:border-[#D9D9D9]">
                CNBC Daily Open: A bumpy start to the year, but don&apos;t lose
                hope
              </p>
              <p className="border-t border-dashed border-[#D9D9D9] py-4 font-medium dark:border-[#D9D9D9]">
                Copper could skyrocket over 75% to record highs by 2025 — brace
                for deficits, analysts sa
              </p>
              <p className="border-y border-dashed border-[#D9D9D9] py-4 font-medium dark:border-[#D9D9D9]">
                Oil prices fall as traders monitor rising tensions in Red Sea
              </p>
            </div>
          </div>
        </section>
  );
}
