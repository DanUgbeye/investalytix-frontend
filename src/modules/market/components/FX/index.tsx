import Quotes from "@/modules/market/components/Quotes";
import { Quote } from "@/types";
import MarketHeading from "../MarketHeading";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/market/forex/overview`
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
    data: {
      american: Quote[];
      europe: Quote[];
      asian: Quote[];
    };
  }>;
}

export default async function FX() {
  const data = await getData();

  return (
    <div>
      {/* MAJOR CURRENCIES PAIRS */}
      <section className="">
        <MarketHeading label="MAJOR CURRENCIES PAIRS" />

        <Quotes />
      </section>

      {/* AMERICAS */}
      <section className="mt-11">
        <MarketHeading label="AMERICAS" />

        <Quotes quotes={data.data.american} />
      </section>

      {/* ASIA - PACIFIC */}
      <section className="mt-11">
        <MarketHeading label="ASIA - PACIFIC" />

        <Quotes quotes={data.data.asian} />
      </section>

      {/* EUROPE */}
      <section className="mt-11">
        <MarketHeading label="EUROPE" />

        <Quotes quotes={data.data.europe} />
      </section>
    </div>
  );
}
