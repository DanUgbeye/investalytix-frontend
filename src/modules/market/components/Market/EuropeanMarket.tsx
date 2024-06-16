import { Quote } from "@/types";
import Quotes from "../Quotes";
import { Suspense } from "react";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/market/forex/europe?limit=10`
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

export async function EuropeanMarket() {
  const data = await getData();

  return (
    <section>
      <h2 className="white-text mb-6 mt-8 text-2xl font-bold capitalize">
        europe market
      </h2>
      <Suspense fallback="loading european market">
        <Quotes quotes={data.data.slice(0, 10)} />
      </Suspense>
    </section>
  );
}
